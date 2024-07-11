<script>
  export let data = {};
  let p = data;
  export let hLevel = 2;
</script>

<article>
  <svelte:element this={"h" + hLevel}>{p.title}</svelte:element>
  <img src={p.image} alt="" />
  <p>{p.description}</p>
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
</style>
