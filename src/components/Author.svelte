<script>
	let { stories, author } = $props();
</script>

<h1>Stories from {author.name}</h1>
{#each stories as story}
	<h3>{story.hed}</h3>
{/each}
