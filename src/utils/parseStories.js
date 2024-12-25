import * as d3 from "d3";

const strToArray = (str) => str.split(",").map((s) => s.trim());
const makeSlus = (str) => str.toLowerCase().replace(/\//g, '_');

export default function parseStories({ data, keys }) {
  const formatDate = d3.timeParse("%Y-%m-%d");
  const clean = data.map((d) => ({
    ...d,
    slug: makeSlus(d.url),
    path: `https://pudding.cool/${d.url}`,
    img: makeSlus(d.url),
    date: formatDate(d.date),
    author: strToArray(d.author),
    keyword: strToArray(d.keyword),
  }));

  const result = clean.map((d) => {
    const o = {};
    keys.forEach((k) => (o[k] = d[k]));
    return o;
  });

  return result;

}