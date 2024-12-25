import stories from "$data/stories.csv";
import parseStories from "$utils/parseStories.js";

export async function load() {
	const keys = ['url', 'date', 'hed', 'dek', 'author', 'keyword']
	const cleanedData = parseStories({ data: stories, keys });
	return {
		data: cleanedData
	};
}
