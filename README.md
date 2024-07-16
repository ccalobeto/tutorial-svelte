# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Notes
These are useful tips to follow a successful carreer in data visualization. Taken from the course [vis-society](https://vis-society.github.io/)

## Step 4.4: Templating projects from a data file

1. set your data projects in /src/lib/projects.json
Useful code to extract data from dev tools. Put it in the console log
```
$$(".projects > article").map (a => ({
	title: $('h2', a).textContent,
	image: $("img", a).getAttribute("src"),
	description: $("p", a).textContent,
}));
```
2. Load your data in src/routes/projects/+page.svelte
3. Counting projects

## Step 4.5: Displaying the first 3 projects on the home page
1. Create and use **Project** component
This line is useful only to declare a prop variable
In Project.svelte
```
export let data = {};
```
Project.svelte goes into components folder

2. Showing the latest projects on the home page
Use the <Project> component to  show the lastest 3.

3. Customizing heading levels
Set the hierarchy of the component using props and move styles from global style.css to the component into <style> element

## Step 4.6: Creating a layout for UI shared across pages
Create a Layout for nav.
- An app has multiple layouts. In our case is there is a layout for the app.html.
- The convention to create a layout component is `+layout.svelte`
- Move part of the code from `global.js` to `+layout.svelte`
- Must be placed `<slot />` inside the layout
- Use `$page` from `$app/stores` to add a class to the current page link. 
- The layout has its own styles.



