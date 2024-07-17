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

## Lab 4.4: Templating projects from a data file

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

## Lab 4.5: Displaying the first 3 projects on the home page
1. Create and use **Project** component
This line is useful only to declare a prop variable
In Project.svelte
```
export let data = {};
```
Project.svelte goes into components folder

2. Showing the latest projects on the home page

Use the `<Project>` component to  show the lastest 3.

3. Customizing heading levels

Set the hierarchy of the component using props and move styles from global style.css to the component into `<style>` element.

## Lab 4.6: Creating a layout for UI shared across pages
Create a Layout for nav.
- An app has multiple layouts. In our case is there is a layout for the app.html.
- The convention to create a layout component is `+layout.svelte`
- Move part of the code from `global.js` to `+layout.svelte`
- Must be placed `<slot />` inside the layout
- Use `$page` from `$app/stores` to add a class to the current page link. 
- The layout has its own styles.

## Lab 5.1 Port the theme switcher to Svelte (Dark/Light theme)
*Concepts*

“Bind” in this context means that the value of the variable will be automatically updated when the value of the `<select>` changes, and vice versa.

Html tag is not part of the svelte technology. So that's is for `console.log(document)` throws an error `500 internal error`. 

Explanation: 

`Our Svelte code is first ran in Node.js to generate the static parts of our HTML, and the more dynamic parts make it to the browser. However, Node.js has no document object, let alone a document.documentElement object`

When accessing properties of objects of …questionable existence, we can use the optional chaining operator **?**. instead of the dot operator to avoid errors

Use $ for reactivity statement

Read from localStorage to save the color scheme

Preventing FOUC (Optional) add the `script` code to the app.html

## 5.2 Loading data from an API
### Slides
- Reactivity is recalculating things when an event occurs.
- CSS is Reactive. Change a CSS variable via JS
- JS is not reactive. You have to do it with event listeners
- For reactivity in svelte do:
![](./static/images/reactivity.png)
`$` recalculate when dependencies change
`bind:value={a}` update the UI when the input changes
```
<script>
	let a = 1, b = 2, c;
	$: c = a + b;
</script>

<input type="number" id="a" bind:value={a}> +
<input type="number" id="b" bind:value={b}> =
<input type="number" id="c" bind:value={c} disabled>
```

### Lab
Images of the resuls
![](./static/images/loading-api.png)
- Use an API to extract github stats data. An example from `https://api.github.com/users/your-username`
- *fetch* is an example of an asynchronous function. This means that it does not return the data directly, but rather a Promise that will eventually resolve to the data. In fact, fetch() returns a Promise that resolves to a Response object, which is a representation of the response to the request. To get meaningful data from a Response object, we need to call one of its methods, such as json(), which returns a Promise that resolves to the JSON representation of the response body.
- Use the `#await`block for managing promises
- Use `<dl>`, `<dt>` and `<dd>` tags and styles to custom display information.
- Update the year of your projects.