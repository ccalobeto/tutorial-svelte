<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";

  let data = [];

  onMount(async () => {
    data = await d3.csv("loc.csv", (row) => ({
      ...row,
      line: +row.line,
      depth: +row.depth,
      length: +row.length,
      date: new Date(row.date + "T00:00" + row.timezone),
      datetime: new Date(row.datetime),
    }));
    console.log(data);
  });
</script>

<h1>Meta</h1>
<p>This page includes stats about the project.</p>
<p>Total lines of code: {data.length}</p>
