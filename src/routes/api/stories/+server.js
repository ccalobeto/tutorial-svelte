import stories from "$data/stories.js";
import filterStories from "$utils/filterStories";
import { json } from "@sveltejs/kit";
import { allFiles } from "$utils/globFiles";
import filterStoriesByValues from "$utils/filterStoriesByValues";

const listing = Object.keys(allFiles);
const files = listing.map((item) => item.split("/").pop().split(".")[0]);

export async function GET() {
  const keys = ['url', 'date', 'month', 'hed', 'dek', 'author', 'keyword', 'slug']
  const dataWithUsefulKeys = filterStories({ data: stories, keys });
  // this extra filter goes because some files images in stories  are not present in baked images
  const dataWithImages = filterStoriesByValues(dataWithUsefulKeys, files);
  return json(dataWithImages);
}