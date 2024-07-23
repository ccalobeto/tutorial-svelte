<script>
  import * as d3 from "d3";
  import projects from "$lib/projects.json";
  import Project from "$lib/components/Project.svelte";
  import Pie from "$lib/components/Pie.svelte";

  let rolledData = d3.rollups(
    projects,
    (d) => d.length,
    (d) => d.year,
  );
  let pieData = rolledData.map(([year, count]) => {
    return { value: count, label: year };
  });

  let query = "";
  let filteredProjects;

  $: filteredProjects = projects.filter((project) => {
    if (query) {
      return project.title.includes(query);
    }

    return true;
  });
</script>

<Pie data={pieData} />

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1>
  {projects.length} Projects
  <div class="projects">
    {#each projects as p}
      <Project data={p} hLevel={3} />
    {/each}
  </div>
</h1>
