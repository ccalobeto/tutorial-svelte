<script>
	import Author from "$components/Author.svelte";

	let { data } = $props();
</script>

<Author stories={data.stories} author={data.author} />
