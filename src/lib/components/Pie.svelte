<script>
  import * as d3 from "d3";

  let data = [
    { value: 1, label: "apples" },
    { value: 2, label: "oranges" },
    { value: 3, label: "mangos" },
    { value: 4, label: "pears" },
    { value: 5, label: "limes" },
    { value: 5, label: "cherries" },
  ];
  let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);
  let sliceGenerator = d3.pie();
  let arcData = sliceGenerator(data);
  let arcs = arcData.map((d) => arcGenerator(d));

  let colors = d3.scaleOrdinal(d3.schemeTableau10);
</script>

<svg viewBox="-50 -50 100 100">
  {#each arcs as arc, i}
    <path d={arc} fill={colors(i)} />
  {/each}
</svg>

<style>
  svg {
    max-width: 20em;
    margin-block: 2em;

    /* Do not clip shapes outside the viewBox */
    overflow: visible;
  }
</style>
