/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  const url = `/api/authors/${params.slug}`
  const response = await fetch(url);
  const data = await response.json();
  return data
}