import stories from "$data/stories.csv";

export async function load() {
	return {
		data: stories
	};
}
