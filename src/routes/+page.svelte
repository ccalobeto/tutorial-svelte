<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/components/Project.svelte";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse culpa quas id
  alias velit libero porro ex sunt fugit quibusdam quasi quaerat reprehenderit
  consequuntur, earum praesentium itaque, facilis architecto ratione?
</p>
<img src="./images/indy.jpg" alt="My favorite person" />
<h1>
  Latest Projects
  <div class="projects">
    {#each projects.slice(0, 3) as p}
      <Project data={p} />
    {/each}
  </div>
</h1>
