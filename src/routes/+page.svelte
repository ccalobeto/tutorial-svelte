<script>
	// import { setContext } from "svelte";
	// import { browser } from "$app/environment";
	import copy from "$data/copy.json";

	import Meta from "$components/Meta.svelte";
	import Home from "$components/Home.svelte";
	import version from "$utils/version.js";
	import Footer from "$components/Footer.svelte";

	let { data } = $props();

	version();

	const preloadFont = [
		"https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2",
		"https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2",
		"https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Regular-Web.woff2",
		"https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Bold-Web.woff2"
	];

	const { title, description, url, keywords } = copy;
	// setContext("copy", copy);
	// setContext("data", data);
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />
<Home data={data.data} />
<Footer />
