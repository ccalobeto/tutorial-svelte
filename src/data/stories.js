import data from "$data/stories.csv";
import { timeParse, timeFormat } from "d3";

const strToArray = (str) => str.split(",").map((s) => s.trim());
const makeSlug = (str) => str.toLowerCase().replace(/\//g, '_');

const formatDate = timeParse("%m/%d/%Y");
const formatMonth = timeFormat("%B %Y");

const clean = data.map((d) => ({
  ...d,
  date: formatDate(d.date),
  month: formatMonth(formatDate(d.date)),
  slug: makeSlug(d.url),
  path: `https://pudding.cool/${d.url}`,
  img: makeSlug(d.url),
  author: strToArray(d.author),
  keyword: strToArray(d.keyword),
}));

export default clean;