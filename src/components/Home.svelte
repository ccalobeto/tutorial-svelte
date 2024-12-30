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
{#each data as { hed, dek, url, slug }}
	<a href="https://pudding.cool/{url}" rel="external">
		<img
			src="common/assets/thumbnails/640/{slug}.jpg"
			alt={hed}
			loading="lazy"
		/>
		<h2>{hed}</h2>
		<p>{dek}</p>
	</a>
{/each}

<a href="{base}/about">about</a>

<style>
	a {
		display: block;
	}

	img {
		max-width: 30em;
	}
</style>
