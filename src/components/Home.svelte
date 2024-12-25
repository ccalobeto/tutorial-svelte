<script lang="ts">
	import { getContext } from "svelte";
	// import Footer from "$components/Footer.svelte";

	// const copy = getContext("copy");
	// const data = getContext("data");
	let { data } = $props();
</script>

<!-- <Footer recirc={true} /> -->
<h1>the pudding</h1>
<a href="/about">about</a>
{#each data as { hed }}
	<p>{hed}</p>
{/each}
