<script>
  import { page } from "$app/stores";

  let pages = [
    { title: "Home", url: "." },
    { title: "Projects", url: "./projects" },
    { title: "Resume", url: "./resume" },
    { title: "Contact", url: "./contact" },
    { title: "Meta", url: "./meta" },
    { title: "Github", url: "https://github.com/ccalobeto" },
  ];

  let colorScheme = "light dark";
  let root = globalThis?.document?.documentElement;
  $: root?.style.setProperty("color-scheme", colorScheme);

  let localStorage = globalThis.localStorage ?? {};

  $: localStorage.colorScheme = colorScheme;
</script>

<label class="color-scheme">
  Theme:
  <select id="theme-select" bind:value={colorScheme}>
    <!-- TODO add <option> elements here -->
    <option value="light dark">Automatic</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</label>

<nav>
  {#each pages as p}
    <a
      href={p.url}
      class:current={"." + $page.route.id === p.url}
      target={p.url.startsWith("http") ? "_blank" : null}>{p.title}</a
    >
  {/each}
</nav>

<slot />

<style>
  nav {
    display: flex;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: var(--border-color);
  }

  a.current {
    flex: 1;
  }

  a:visited {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    border-bottom: var(--color-accent);
    /* background-color: oklch(from var(--color-accent) 95% 5% h); */
    background-color: color-mix(in oklch, var(--color-accent), canvas 85%);
  }

  a:link {
    text-decoration: none;
    text-align: center;
    padding: 0.5em;
    color: inherit;
    border-bottom: 0.4em;
    padding-bottom: 0.4em;
  }
  .color-scheme {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-family: inherit;
    width: 10%;
  }
</style>
