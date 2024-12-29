/** @type {import('./$types').PageLoad} */
import { base } from "$app/paths";
export async function load({ params, fetch }) {
  const url = `${base}/api/authors/${params.slug}`;
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
  const data = await response.json();
  return data
}

