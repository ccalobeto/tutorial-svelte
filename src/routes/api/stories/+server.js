import stories from "$data/stories.csv";
import cleanStories from "$utils/cleanStories";
import filterStories from "$utils/filterStories";
import { json } from "@sveltejs/kit";

const data = cleanStories(stories);
export async function GET() {
  const keys = ['url', 'date', 'month', 'hed', 'dek', 'author', 'keyword', 'slug']
  const cleanedData = filterStories({ data, keys });
  return json(cleanedData);
}