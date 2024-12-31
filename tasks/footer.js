import fs from "fs";
import { csvParse } from "d3-dsv";


const CWD = process.cwd()

const stories = csvParse(fs.readFileSync(`${CWD}/src/data/stories.csv`, "utf8"))

stories.sort((d1, d2) => new Date(d1.order) - new Date(d2.order))

const output = stories.map((d) => {
  return {
    image: d.url.replace(/\//, "_"),
    url: d.url,
    hed: d.hed,
    topic: d.collection,
  }
})

const json = JSON.stringify(output)
fs.writeFileSync(`${CWD}/static/assets/data/stories.json`, json)