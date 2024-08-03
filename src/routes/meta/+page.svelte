<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import Tooltip from "../../lib/components/Tooltip.svelte";
  import Pie from "../../lib/components/Pie.svelte";

  let data = [];
  let commits = [];
  let maximumDepth = 0;
  let longestLine = 0;
  let files = 0;
  let maxLines = 0;
  let fileLengths = [];
  let averageFileLength = 0;
  let width = 1000;
  let height = 0.6 * width;
  let rScale, yScale, xScale;
  let margin = { top: 10, right: 10, bottom: 30, left: 20 };
  let usableArea = {
    top: margin.top,
    right: width - margin.right,
    bottom: height - margin.bottom,
    left: margin.left,
  };
  usableArea.width = usableArea.right - usableArea.left;
  usableArea.height = usableArea.bottom - usableArea.top;
  let xAxis, yAxis;
  let yAxisGridlines;
  let hoveredIndex = -1;
  let cursor = { x: 0, y: 0 };

  let svg;
  let brushSelection;
  let selectedLines;
  let languageBreakdown;

  onMount(async () => {
    data = await d3.csv("loc.csv", (row) => ({
      ...row,
      line: +row.line,
      depth: +row.depth,
      length: +row.length,
      date: new Date(row.date + "T00:00" + row.timezone),
      datetime: new Date(row.datetime),
    }));

    commits = d3
      .groups(data, (d) => d.commit)
      .map(([commit, lines]) => {
        let first = lines[0];
        let { author, date, time, timezone, datetime } = first;
        let ret = {
          id: commit,
          url: "https://github.com/vis-society/lab-7/commit/" + commit,
          author,
          date,
          time,
          timezone,
          datetime,
          hourFrac: datetime.getHours() + datetime.getMinutes() / 60,
          totalLines: lines.length,
          maxDepth: d3.max(lines, (d) => d.depth),
          files: d3.group(lines, (d) => d.file).size,
        };

        // Like ret.lines = lines
        // but non-enumerable so it doesn’t show up in JSON.stringify
        // 25/07/24: put the entire lines per commit and end of the object commit
        Object.defineProperty(ret, "lines", {
          value: lines,
          configurable: true,
          writable: true,
          enumerable: false,
        });

        return ret;
      });
    commits = d3.sort(commits, (d) => -d.totalLines);
  });

  $: maximumDepth = d3.max(commits, (d) => d.maxDepth);
  $: longestLine = d3.max(commits, (d) => d.totalLines);
  $: files = d3.sum(commits, (d) => d.files);
  $: maxLines = d3.sum(commits, (d) => d.totalLines);
  $: fileLengths = d3.rollups(
    data,
    (v) => d3.max(v, (v) => v.line),
    (d) => d.file,
  );
  $: averageFileLength = d3.mean(fileLengths, (d) => d[1]);

  $: yScale = d3
    .scaleLinear()
    .domain(d3.extent(commits, (d) => d.hourFrac))
    .range([usableArea.top, usableArea.bottom]);
  $: xScale = d3
    .scaleTime()
    .domain(d3.extent(commits, (d) => d.datetime))
    .range([usableArea.left, usableArea.right]);
  $: {
    d3.select(xAxis).call(d3.axisBottom(xScale));
    d3.select(yAxis).call(
      d3
        .axisLeft(yScale)
        .tickFormat((d) => String(d % 24).padStart(2, "0") + ":00"),
    );
  }
  $: {
    d3.select(yAxisGridlines).call(
      d3.axisLeft(yScale).tickFormat("").tickSize(-usableArea.width),
    );
  }

  $: hoveredCommit = commits[hoveredIndex] ?? hoveredCommit ?? {};
  $: rScale = d3
    .scaleSqrt()
    .domain(d3.extent(commits, (d) => d.totalLines))
    .range([2, 20]);

  $: {
    d3.select(svg).call(d3.brush().on("start brush end", brushed));
    d3.select(svg).selectAll(".dots, .overlay ~ *").raise();
  }

  function brushed(event) {
    // console.log(event.selection);
    brushSelection = event.selection;
    return brushSelection;
  }

  function isCommitSelected(commit) {
    if (!brushSelection) {
      return false;
    }
    let [[x0, y0], [x1, y1]] = brushSelection;
    let x = xScale(commit.date);
    let y = yScale(commit.hourFrac);
    let isInsideShape = x >= x0 && x <= x1 && y >= y0 && y <= y1;
    return isInsideShape;
  }

  $: selectedCommits = brushSelection ? commits.filter(isCommitSelected) : [];
  $: hasSelection = brushSelection && selectedCommits.length > 0;

  $: selectedLines = (hasSelection ? selectedCommits : commits).flatMap(
    (d) => d.lines,
  );
  $: {
    languageBreakdown = d3
      .rollups(
        selectedLines,
        (v) => v.length,
        (d) => d.type,
      )
      .map((d) => ({ language: d[0].toUpperCase(), lines: d[1] }));

    languageBreakdown = d3.map(languageBreakdown, (d) => ({
      ...d,
      percentage: d.lines / d3.sum(languageBreakdown, (d) => d.lines),
    }));
  }

  const formatter = d3.format(".1~%");
</script>

<!-- svelte-ignore css_unused_selector -->
<h1>Meta</h1>
<h2>Summary</h2>
<dl class="stats">
  <dt>COMMITS</dt>
  <dd>{commits.length}</dd>
  <dt>FILES</dt>
  <dd>{files}</dd>
  <dt>Total <abbr title="Lines of code">LOC</abbr></dt>
  <dd>{data.length}</dd>
  <dt>MAX DEPTH</dt>
  <dd>{maximumDepth}</dd>
  <dt>LONGEST LINE</dt>
  <dd>{longestLine}</dd>
  <dt>AVG FILE LENGTH</dt>
  <dd>{averageFileLength}</dd>
</dl>

<h3>Commits by time of day</h3>
<svg viewBox="0 0 {width} {height}" bind:this={svg}>
  <g transform="translate(0, {usableArea.bottom})" bind:this={xAxis} />
  <g transform="translate({usableArea.left}, 0)" bind:this={yAxis} />
  <g class="dots" transform="translate(0, 0)">
    {#each commits as commit, index}
      <circle
        class:selected={isCommitSelected(commit)}
        cx={xScale(commit.datetime)}
        cy={yScale(commit.hourFrac)}
        r={rScale(commit.totalLines)}
        fill="yellow"
        stroke="gray"
        stroke-width="2"
        opacity="0.5"
        on:mouseenter={(event) => {
          hoveredIndex = index;
          cursor = { x: event.x, y: event.y };
        }}
        on:mouseleave={(event) => (hoveredIndex = -1)}
        tabindex="0"
        role="button"
      />
    {/each}
  </g>
  <g
    class="grid"
    transform="translate({usableArea.left}, 0)"
    bind:this={yAxisGridlines}
  />
</svg>
<Tooltip commit={hoveredCommit} index={hoveredIndex} {cursor} />
<p>{hasSelection ? selectedCommits.length : "No"} commits selected</p>
{console.log(brushSelection)}

<dl class="language">
  {#each languageBreakdown as item}
    <dt>{item.language}</dt>
    <dd>{item.lines} lines ({formatter(item.percentage)})</dd>
  {/each}
</dl>

<Pie
  data={languageBreakdown.map((d) => ({
    label: d.language,
    value: d.lines,
  }))}
/>

<style>
  svg {
    overflow: visible;
  }
  dl {
    display: grid;
    grid-template-columns: 8ch auto;
    grid-gap: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: antiquewhite;
  }

  dt {
    color: rgb(154, 153, 151);
    font-weight: bold;
    grid-row: 1;
    margin-left: auto;
    font-size: x-small;
  }

  dd {
    margin-left: auto;
    grid-row: 2;
    font-size: x-large;
  }

  .grid {
    stroke: rgb(154, 153, 151);
    opacity: 0.2;
  }

  circle {
    transition: 10ms;
    fill-opacity: 0.4;

    &:hover {
      transform: scale(1.2);
      transform-origin: center;
      transform-box: fill-box;
    }

    &.selected {
      fill: turquoise;
    }
  }

  @keyframes marching-ants {
    to {
      stroke-dashoffset: -8;
    }
  }

  svg :global(.selection) {
    fill-opacity: 10%;
    stroke: black;
    stroke-opacity: 1;
    stroke-dasharray: 5 3;
    background-color: pink;
    animation: marching-ants 2s linear infinite;
  }
  dl.language {
    background-color: rgb(138, 77, 194);
    display: grid;
    grid-template-columns: repeat(auto, 1fr);
    gap: 0.3em;
    grid-gap: 5px;
  }
  .language dt {
    color: gray;
    font-weight: bold;
    grid-row: 1;
    font-size: 12px;
  }
  .language dd {
    grid-row: 2;
    font-size: 10px;
    align-items: right;
  }

  .language dt:hover {
    border: 1px solid yellowgreen;
  }

  .language dd:hover {
    border: 1px solid yellowgreen;
  }
</style>
