<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/components/Project.svelte";
</script>

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
