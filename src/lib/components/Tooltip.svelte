<script>
  export let commit = {};
</script>

<dl id="commit-tooltip" class="info tooltip">
  <dt>Commit</dt>
  <dd><a href={commit.url} target="_blank">{commit.id}</a></dd>
  <dt>Author</dt>
  <dd>{commit.author}</dd>
  <dt>Date</dt>
  <dd>
    {commit.datetime?.toLocaleDateString("en", { dateStyle: "full" })}
  </dd>
  <dt>Time</dt>
  <dd>
    {commit.time}
  </dd>
  <dt>Lines</dt>
  <dd>{commit.totalLines}</dd>
</dl>

<style>
  dl.info {
    display: grid;
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
  }
</style>
