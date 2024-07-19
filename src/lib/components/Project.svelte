<script>
  export let data = {};
  let p = data;
  export let hLevel = 2;
</script>

<article>
  <svelte:element this={"h" + hLevel}>{p.title}</svelte:element>
  <img src={p.image} alt="" />
  <p>{p.description}</p>
  <div>{p.year}</div>
</article>

<style>
  h3 {
    line-height: 1.1;
    text-wrap: balance;
  }
  article {
    grid-template-rows: subgrid;
    grid-row: span 1;
  }

  img {
    max-width: 95%;
    height: auto;
    display: block;
  }

  div {
    font-family: Baskervill, sans-serif;
    font-variant-numeric: oldstyle-nums;
    font-size: 0.8em;
  }

  p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 0.6em;
  }
</style>
