<script>
	import { getContext } from "svelte";
	import { base } from "$app/paths";
	// import Footer from "$components/Footer.svelte";

	// const copy = getContext("copy");
	// const data = getContext("data");
	let { data } = $props();
</script>

<!-- <Footer recirc={true} /> -->
<h1>the pudding</h1>
<a href="{base}/about">about</a>
{#each data as { hed, dek, slug }}
	<h3>{hed}</h3>
	<p>{dek}</p>
	<p>{slug}</p>
{/each}
