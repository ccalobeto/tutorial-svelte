<script>
  import * as d3 from "d3";
  import projects from "$lib/projects.json";
  import Project from "$lib/components/Project.svelte";
  import Pie from "$lib/components/Pie.svelte";

  let pieData;
  let rolledData;
  let selectedYearIndex = -1;
  let selectedYear;

  $: {
    pieData = {};

    rolledData = d3.rollups(
      filteredProjects,
      (d) => d.length,
      (d) => d.year,
    );
    pieData = rolledData.map(([year, count]) => {
      return { value: count, label: year };
    });
  }

  let query = "";
  let filteredProjects;
  let filteredByYear;

  $: selectedYear =
    selectedYearIndex > -1 ? pieData[selectedYearIndex].label : null;

  $: filteredProjects = projects.filter((project) => {
    if (query) {
      let values = Object.values(project).join("\n").toLowerCase();
      return values.includes(query.toLowerCase());
    }
    return true;
  });
  $: filteredByYear = projects.filter((project) => {
    if (selectedYear) {
      return project.year === selectedYear;
    }
    return true;
  });
</script>

<Pie data={pieData} bind:selectedIndex={selectedYearIndex} />

<svelte:head>
  <title>Projects</title>
</svelte:head>

<input
  type="search"
  bind:value={query}
  aria-label="Search projects"
  placeholder=" Search projects ..."
/>
<h1>
  {projects.length} Projects
  <div class="projects">
    {#each filteredByYear as p}
      <Project data={p} hLevel={3} />
    {/each}
  </div>
</h1>
