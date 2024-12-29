import stories from "$data/stories.csv";
import cleanStories from "$utils/cleanStories";
import filterStories from "$utils/filterStories";
import { json } from "@sveltejs/kit";
import { allFiles } from "$utils/globFiles";
import filterStoriesByValues from "$utils/filterStoriesByValues";

const data = cleanStories(stories);

const listing = Object.keys(allFiles);
const files = listing.map((item) => item.split("/").pop().split(".")[0]);

export async function GET() {
  const keys = ['url', 'date', 'month', 'hed', 'dek', 'author', 'keyword', 'slug']
  const dataWithUsefulKeys = filterStories({ data, keys });
  const dataWithImages = filterStoriesByValues(dataWithUsefulKeys, files);
  return json(dataWithImages);
}