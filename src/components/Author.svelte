<script>
	let { stories, author } = $props();
</script>

<h1>Stories from {author.name}</h1>
{#each stories as story}
	<h3>{story.hed}</h3>
{/each}

<style>
	h1 {
		font-family: var(--sans);
	}
</style>
