import { json } from "@sveltejs/kit";
import stories from "$data/stories.js";
import authors from "$data/authors.js";
import filterStories from "$utils/filterStories";

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
  const name = url.pathname.split('/').pop();
  const keys = ['hed', 'author']
  const data = filterStories({ data: stories, keys });
  const match = authors.find((d) => d.slug === name)
  const filtered = data.filter((d) => d.author.includes(match.id))
  console.log(`${filtered.length} stories from ${name}`);
  const body = {
    stories: filtered,
    author: match
  }
  return json(body)
}