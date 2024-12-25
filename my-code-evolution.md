# Generating code in pudding

## Part 1
### Data generation
Go to [stories](https://docs.google.com/spreadsheets/d/1hIIwnbmcIpRlygNZNY6SAnKFzAI79QROcrCglQhoZyQ/edit?gid=0#gid=0) and [authors](https://docs.google.com/spreadsheets/d/1jFlS8Ghkat-h2W27Q2YfoXRV5RuNFY_ML6hiirMa6HM/edit?gid=0#gid=0), then adjust `google.config.js` following the [rules](https://github.com/the-pudding/svelte-starter#google-docs-and-sheets)
```zsh
npm run gdoc
```

### Data Usage
- Create a `$utils/parseStories.js` function to clean data.
- Create a **load** function in `+page.server.js` to extract data from *csv* and clean it. 
- In `+page.svelte` get data with props and pass it to **Home** component.
- In `Home.svelte` component get data with props and render it.

### Links
- Create author route and dynamic page `[author].svelte`

## Part 2


