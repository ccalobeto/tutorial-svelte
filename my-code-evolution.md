# Making a complete website in pudding

## Diagram
![](/static/assets/diagram/pudding-template-drawio.svg)

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
### Using subdirectories in Github
- To test local build add environment variable. Check if you need to add the variable in github for *production* build.
```zh
export NODE_ENV=development
```

- Add subdirectory, so modify your `path.base` in `svelte.config.js` and modify the `a` tag with `href="{base}/about"`

### Image Transformation
The mission is to use resizes to lower bandwidth

- Copy the `tasks/fetch-og-images.js` script to fetch images from [the pudding](https://github.com/the-pudding/website).

- Copy the `tasks/thumbnail-og.js` script to resize images from [the pudding](https://github.com/the-pudding/website).

> [!IMPORTANT]
> You will need to install some additional packages to run the scripts. 

## Part 3
- Refactor, create a separate script for filtering stories)
- Render hed and slug. Don't forget to add keys before rendering the page in `Home.svelte` component.
- Move loading data from `+page.server.js` to an **api**.

## Part 4
### Add thumbernails
### Given a list of images filter data
### Author's page creation
- Change the way of loading and cleaning a csv file
- Create an author's page component
- Create a *page.js* that use an author that fetches a request to an *api* that filter his stories.
- Be careful if you use subdirectories. Add `{base}` to your *url* to `fetch`
