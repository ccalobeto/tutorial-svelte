export default function filterStory({ data, keys }) {
  return data.map((d) => {
    const o = {};
    keys.forEach((k) => (o[k] = d[k]));
    return o;
  });
}