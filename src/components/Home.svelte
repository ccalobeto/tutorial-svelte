<script>
	// import { getContext } from "svelte";
	import { base } from "$app/paths";
	// import Footer from "$components/Footer.svelte";
	import Intro from "$components/Home.Intro.svelte";

	// const copy = getContext("copy");
	// const data = getContext("data");
	let { data } = $props();
</script>

<!-- <Footer recirc={true} /> -->
<Intro />
<a href="{base}/about">About</a>
<a href="{base}/pitch">Pitch</a>
<a href="{base}/privacy">Privacy</a>
<a href="{base}/faq">FAQ</a>
<a href="{base}/author/amber-thomas">Amber Thomas</a>

{#each data as { hed, dek, url, slug }}
	<a href="https://pudding.cool/{url}" rel="external">
		<div class="thumbnail">
			<img
				src="common/assets/thumbnails/640/{slug}.jpg"
				alt={hed}
				loading="lazy"
			/>

			<h2>{hed}</h2>
			<p>{dek}</p>
		</div>
	</a>
{/each}

<style>
	a {
		display: block;
	}

	img {
		max-width: 30em;
	}

	.thumbnail {
		padding: 4em;
	}
</style>
