# The steps of generating code in pudding

## Data generation
Go to [stories](https://docs.google.com/spreadsheets/d/1hIIwnbmcIpRlygNZNY6SAnKFzAI79QROcrCglQhoZyQ/edit?gid=0#gid=0) and [authors](https://docs.google.com/spreadsheets/d/1jFlS8Ghkat-h2W27Q2YfoXRV5RuNFY_ML6hiirMa6HM/edit?gid=0#gid=0), then adjust `google.config.js` following the [rules](https://github.com/the-pudding/svelte-starter#google-docs-and-sheets)
```zsh
npm run gdoc
```

## Pass cleaned data to be rendered
- Create a `$utils/parseStories.js` function to clean data.
- Load and use function to clean data in `+page.server.js`
- Get data with props in `+page.svelte` and pass them to a component.
- Get data with props in `Home.svelte` component and render data.

## Links
### Create author route and dynamic page `[author].svelte`

