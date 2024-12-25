import { timeParse, timeFormat } from "d3";

const strToArray = (str) => str.split(",").map((s) => s.trim());
const makeSlus = (str) => str.toLowerCase().replace(/\//g, '_');

export default function parseStories({ data, keys }) {
  const formatDate = timeParse("%m/%d/%Y");
  const formatMonth = timeFormat("%B %Y");
  const clean = data.map((d) => ({
    ...d,
    date: formatDate(d.date),
    month: formatMonth(formatDate(d.date)),
    slug: makeSlus(d.url),
    path: `https://pudding.cool/${d.url}`,
    img: makeSlus(d.url),
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