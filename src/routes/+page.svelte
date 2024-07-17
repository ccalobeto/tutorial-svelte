<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/components/Project.svelte";

  let promise = fetch("https://api.github.com/users/leaverou").then(
    (response) => response.json(),
  );
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

<section>
  <h2>My Github Stats</h2>
  {#await promise}
    <p>Loading...</p>
  {:then data}
    <dl>
      <dt>Followers:</dt>
      <dd>{data.followers}</dd>
      <dt>Following:</dt>
      <dd>{data.following}</dd>
      <dt>Repos:</dt>
      <dd>{data.public_repos}</dd>
      <dt>Gists:</dt>
      <dd>{data.public_gists}</dd>
    </dl>
  {:catch error}
    <p class="error">
      Something went wrong: {error.message}
    </p>
  {/await}
</section>
<h1>
  Latest Projects
  <div class="projects">
    {#each projects.slice(0, 3) as p}
      <Project data={p} hLevel="3" />
    {/each}
  </div>
</h1>

<style>
  dl {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  dt {
    font-weight: bold;
    grid-row: 1;
  }
  dd {
    margin-left: 0;
    grid-row: 2;
  }
</style>
