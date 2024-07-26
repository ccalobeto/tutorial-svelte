<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";

  let data = [];
  let commits = [];
  let aggregatedData = [];
  let maximumDepth = 0;
  let longestLine = 0;
  let files = 0;
  let maxLines = 0;
  let fileLengths = [];
  let averageFileLength = 0;

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

    console.log("commits:", commits);
    console.log("data:", data);
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
</script>

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

<style>
  dl {
    display: grid;
    grid-template-columns: 8ch auto;
    grid-gap: 10px;
    padding: 10px;
    border-radius: 5px;
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
</style>
