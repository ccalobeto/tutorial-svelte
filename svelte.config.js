import adapterStatic from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";
import autoprefixer from "autoprefixer";

const dev = process.env.NODE_ENV === "development";

const preprocess = sveltePreprocess({
	postcss: {
		plugins: [autoprefixer]
	}
});

const config = {
	compilerOptions: {
		runes: true
	},
	preprocess,
	kit: {
		adapter: adapterStatic({ strict: false }),
		paths: {
			base: dev ? "" : "/svelte-pudding"
		}
	}
};

export default config;
