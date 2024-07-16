<script>
  import { page } from "$app/stores";
  import "../style.css";

  let pages = [
    { title: "Home", url: "./" },
    { title: "Projects", url: "./projects" },
    { title: "Resume", url: "./resume" },
    { title: "Contact", url: "./contact" },
    { title: "Github", url: "https://github.com/ccalobeto" },
  ];
</script>

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
</style>
