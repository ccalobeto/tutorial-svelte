export default function filterStoriesByValues(data, list) {
  return data.filter((d) => list.includes(d.slug));
}