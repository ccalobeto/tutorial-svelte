<script>
  import * as d3 from "d3";
  export let data = [];

  let arcData;
  let arcs;
  export let selectedIndex = -1;

  let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);
  let sliceGenerator = d3.pie().value((d) => d.value);
  $: arcData = sliceGenerator(data);
  $: arcs = arcData.map((d) => arcGenerator(d));
  let colors = d3.scaleOrdinal(d3.schemeTableau10);
</script>

<div class="container">
  <svg viewBox="-50 -50 100 100">
    {#each arcs as arc, i}
      <path
        d={arc}
        fill={colors(i)}
        class:selected={selectedIndex === i}
        on:click={(e) => (selectedIndex = selectedIndex === i ? -1 : i)}
      />
    {/each}
  </svg>

  <ul class="legend">
    {#each data as d, index}
      <li style="--color: {colors(index)}">
        <span
          class="swatch"
          class:selected={selectedIndex === index}
          on:click={(e) =>
            (selectedIndex = selectedIndex === index ? -1 : index)}
        ></span>
        <em>{d.label} ({d.value})</em>
      </li>
    {/each}
  </ul>
</div>

<style>
  svg {
    max-width: 20em;
    margin-block: 2em;
    overflow: visible;
  }

  svg:has(path:hover) {
    path:not(:hover) {
      opacity: 50%;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(4em, 1fr));
    gap: 1em;
    border: solid 1px #ccc;
    padding: 0.5em;
    margin: 1.2em;
    flex: 1;
  }

  li {
    min-width: 4em;
    display: grid-row;
    gap: 0.5em;
    align-items: center;
  }

  .swatch {
    aspect-ratio: 1 / 1;
    background-color: var(--color);
    border-radius: 50%;
  }
  span {
    display: inline-block;
  }
  div {
    display: flex;
    align-items: horizontal;
    gap: 0.5em;
  }

  path {
    transition: 500ms;
    cursor: pointer;
  }

  .selected {
    --color: oklch(60% 45% 0) !important;
    &:is(path) {
      fill: var(--color);
    }
  }
</style>
