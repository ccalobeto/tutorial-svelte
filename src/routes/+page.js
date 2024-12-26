export async function load({ fetch }) {
  const response = await fetch("api/stories");
  const data = await response.json();
  return { data };
}
