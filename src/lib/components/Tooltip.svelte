<script>
  export let commit = {};
  export let index;
</script>

<dl id="commit-tooltip" class="info tooltip" hidden={index === -1}>
  <dt>Commit:</dt>
  <dd><a href={commit.url} target="_blank">{commit.id}</a></dd>
  <dt>Author:</dt>
  <dd>{commit.author}</dd>
  <dt>Date:</dt>
  <dd>
    {commit.datetime?.toLocaleDateString("en", { dateStyle: "full" })}
  </dd>
  <dt>Time:</dt>
  <dd>
    {commit.time}
  </dd>
  <dt>Lines:</dt>
  <dd>{commit.totalLines}</dd>
</dl>

<style>
  dl.info {
    display: grid;
    transition-duration: 500ms;
    transition-property: opacity, visibility;
    &[hidden]:not(:hover, :focus-within) {
      opacity: 0;
      visibility: hidden;
    }
  }

  .info dt {
    grid-column: 1;
  }
  .info dd {
    grid-column: 2;
  }

  .tooltip {
    position: fixed;
    top: 1em;
    left: 1em;
    background-color: okl h(100% 0% 0% / 80%);
    box-shadow: blanchedalmond 0 0 3em;
    border-radius: 10%;
    backdrop-filter: blur(5px);
    padding: 1em;
  }
</style>
