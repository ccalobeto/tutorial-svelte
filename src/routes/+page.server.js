import stories from "$data/stories.csv";
import cleanStories from "$utils/cleanStories";
import filterStories from "$utils/filterStories";

const data = cleanStories(stories);
export async function load() {
	const keys = ['url', 'date', 'month', 'hed', 'dek', 'author', 'keyword', 'slug']
	const cleanedData = filterStories({ data, keys });
	return {
		data: cleanedData
	};
}
