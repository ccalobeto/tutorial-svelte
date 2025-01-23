# Making a complete website in pudding

## Diagram
![](/static/assets/diagram/pudding-template-drawio.svg)

## Notes
Some parts don't have code, see the log.

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
- Refactor, create a separate script for [filtering stories](https://github.com/ccalobeto/svelte-pudding/commit/8702cf3f27ac12567d382cf22aefe58379d3dcf8).
- [Render hed and slug](https://github.com/ccalobeto/svelte-pudding/commit/564f4e83623ab9376044fcdbfca06b79ca523302). Don't forget to add keys before rendering the page in `Home.svelte` component.
- Move loading data from `+page.server.js` to an [**api**](https://github.com/ccalobeto/svelte-pudding/commit/e7b124291a2feced5b9db3193fc8128d0e22f9bd).

## Part 4
### Add [thumbernails](https://github.com/ccalobeto/svelte-pudding/commit/faf2208a1cfe0cf2862872eca97a32c4120af46d)
### Given a list of images [filter data](https://github.com/ccalobeto/svelte-pudding/commit/14641ef338572249dcf0d0154c316572d37a2da3)
### Author's page creation
- Change the way of [loading and cleaning](https://github.com/ccalobeto/svelte-pudding/commit/16235ec72db0877479096a876ac535588d9ea08b) a csv file
- Create an [author's page](https://github.com/ccalobeto/svelte-pudding/commit/14f4bdb28e133a0932785796371583c04a544770) component
- Create a *page.js* that use an author that fetches a request to an *api* that filter his stories.
- Be careful if you use [subdirectories](https://github.com/ccalobeto/svelte-pudding/commit/9fcb3ea160435fdc3d03e86468458567ca98ad4f). Add `{base}` to your *url* to `fetch`

## Part 5
- Import `js` file instead of `csv` file.
- Change [fonts](https://github.com/ccalobeto/svelte-pudding/commit/2e59187254e5e739e53ab229c89cbc2695cc4539) 

## Part 6

## Part 7
- [Image](https://github.com/ccalobeto/svelte-pudding/commit/80b94272a96f81db01e8b2b03681d5e8d11be905) improve 
## Part 8
- Another way to [fetch](https://github.com/ccalobeto/svelte-pudding/commit/8e48045ba39de9c0c5788fdf9f7495634b1d1d88) data from csv file
- Some css styling: padding

## Part 9
### Extract data from doc files 
Use data in doc files to be displayed in components. A history could be made from a writer's story and you extract those pieces of text to be rendered into components. Use **tags**.
- These doc files with markup are hosted in Drive. Be sure to share the folder.
- Add the id doc in [google.config.js](https://github.com/ccalobeto/svelte-pudding/commit/2e847602605124c4f86f45c71f791fee390d257f) and set the output.
![](/static/documentation/google-doc-url.png)
- Generate the `json` file with this command
```zh
npm run gdoc
```
- [Copy injection](https://github.com/ccalobeto/svelte-pudding/commit/92f300a10173e723d115c9097956dd827cf442bd)

## Part 10
- The developer shows how they use **Figma** to design the digital content.
- Add an intro to *The pudding* through `website: home copy`
- It is not practical that your team type a href in a doc file, so make it dynamic using `[popular]` in docs that refers to interesting stories of *The Pudding*, see since 50:39.[](https://github.com/ccalobeto/svelte-pudding/commit/9f4d9a185c34ab609094909b3f86b9ef584de7a2)

## Part 11
- The entire video is related to dynamic render content with google docs.

> [!WARNING]
> Some pieces of text are not showed with middle lines.

## Part 12
- Insert *base* path in some `href`.
- Generate multiple image sizes
- Given a paragraph in a doc file with keys (popular and personal) place the some images.
![](/static/documentation/12-paragraph.png)
- Output: little images in a paragraph.
![](/static/documentation/little-images.png)

## Partt 13
- Build Home.Search.svelte component for looking stories
- Build a Home.Stories.svelte component to display a quick summary.
Use of `setContext` and `getContext`
![](/static/documentation/13-stories-card.png)
- If you are searching stories the images collapses and display only a resume.

## Part 14
- Re-build the footer.
- A **Pitch a Story** page designed by Figma needs to move its content to google docs called **website:pitch copy** and format the text for being extracted by code.
![Pitch a Story](/static/documentation/14-figma-design.png)
![doc](/static/documentation/14-doc.png)
![Pitch page](/static/documentation/14-pitch-deploy.gif)
- Create a google doc called **website:data viz resources copy** for resources and use `resources.svelte` page and `Resources.svelte` component to render its content. Create a sheet called **website:resources** to fill categories. Remember to include the doc and sheet google files in `google.config.cjs`.
![resources doc](/static/documentation/14-website-resources.png)
![resources sheet](/static/documentation/14-website-resources-sheet.png)

> [!NOTE]
> Don't forget to share googel docs and sheets.

## Part 15
- Working with placeholder blurry images
- Create **website:resources* and `Resources.svelte` component for showing FAQs
![resources](/static/documentation/15-resources-doc.png)
![faq](/static/documentation/15-faq.png)
- Create **about** page using a template **website:about copy2**  and a sheet **website:awards**. Create an `about.svelte` page. And Don't forget to add the changes
to `google.config.js`
![about](/static/documentation/15-about.png)
![about](/static/documentation/15-about-2.png)
![](/static/documentation/15-about-3.png)
- Adjust **website:picth copy google-doc** file

## Part 16
- Add bio data to `Author.svelte` content. Reduce images sizes and compress with **ImageOptimize** tool. Create a `staff.js` and complete `About.svelte` to show all for authors images and its link profiles.
![](/static/documentation/16-about-authors.gif)

- Modify `Home.Stories.svelte` searching stories functionality, so it shows the first 10 blurry images and collapse the others at the bottom.
![](/static/documentation/16-collapse-images.gif)

## Part 17
- Modify the `links.js` and export **constants** to reach all the content.
- Modify `Home.Stories.svelte` to increase the font sizes and show bolded fonts.
![](/static/documentation/17-bolded-and-increased.gif)
- Create *tokenize* function in `Home.Search.svelte` that returns a list of tokens. Create a *getScore* function to give a rank.

- Given a *search* word, the app will find all the related stories (even with different authors) and returns a score per story. You can enter composite words. It works with the name of each column which are called tokens. It also scored a word inside of a string with a middle of points of weights.
![](/static/documentation/17-score.gif)

## Part 18
- Reduce the opacity (a lighter color)
![](/static/documentation/18-reduce-opacity.gif)

- Use of `del` tag and css to show delayed words and with css a fade in text(59:30).
![](/static/documentation/18-delay-words.gif)
![](/static/documentation/18-fade-in-text.gif)








 
