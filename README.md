# CURSO DE CSS COMPLETO: De Principiante a Front-End 2024
[Video Tutorial](https://www.youtube.com/watch?v=TlJbu0BMLaY)

## Recomended Totorials
- [Manz.dev](https://lenguajecss.com/)
- [Google](https://web.dev/learn/css)
- [mdm](https://developer.mozilla.org/es/docs/Web/CSS#tutoriales) `<-- la mejor`
- [codilink](https://codi.link/) for online practice
- [scrolling](https://scroll-driven-animations.style/)
- [Bentogrids](https://bentogrids.com/)

## Dev Tool calculators
- [oklch](https://oklch.com/)

# Table of Contents
Every section has a route that shows the exercises for example `http://localhost:5173/basics`.

- [1. Basics ](#1-basics)
- [2. Box Model](#2-box-model)
- [3. Z index](#3-z-index)
- [4. Flex](#4-flex)
- [5. Grid](#5-grid)
- [6. Layout](#6-layout)
- [7. Advanced animations](#7-advanced-animations)
- [8. Scrolly](#8-scrolly)

## 1. Basics
### 1.1 Colors
There are different ways to set colors with property-values `rgb`, `hsl`, `olkch`.

> [!NOTE] 
> A good practice to build your site is to use *classes* and not *identifiers(#)*.

### 1.2 Inheritance 
In inheritance is important to use *fallbacks* in case the first value does not exits, then the property will use the second value and so on. 

### 1.3 Pseudo classes
[cumulative commit](https://github.com/ccalobeto/svelte-with-css/commit/083f6b2832fc9e374a90987381e6cc761710570a)

- They are also states for properties. These properties are `hover`, `active`, `focus`, `first-child`, `last-child` etc

- **border** and **outline** are properties used for <a>, <span> etc. Border makes a little jumping, but outline not.
![border-to-outline](static/docs/border-to-outline.gif)

### 1.4 Combined selectors
[commit](https://github.com/ccalobeto/svelte-with-css/commit/9d05a7b9159a9c95c242be985012b0bfc814b78c)
- Combine selector to paint text.

- Use operators (1:00:00) like `>` (direct childs), `~` (brothers elements), `+` direct child <-- used by adjoining buttoms. 

### 1.5 Cascading
If an element was declared two times, the property will use the last one.

### 1.6 Specifity
[commit](https://github.com/ccalobeto/svelte-with-css/commit/04fe13df5d30c6dc8403da0cb90ffeece35a4e00)

- It is binary value that indicates the declaration spefication. See [specifity calculator](https://specificity.keegan.st/) 
![](/static/docs/specifity.png)

- In the example the last declaration with `p` (general) doesn't work because the *specifity* of `text` is stronger (more specific). Specifity for Blue is (0,1,0) and for red (0,0,1).

- Complex specifity
![](/static/docs/specifity-complex.png)

- One library that use specifity is *tailwindcss*.

- *Styling lines*  and `!important` breaks the rule of specifity. 1:15:00. Don't use them.

### 1.7 Absolute and relative units
[commit](https://github.com/ccalobeto/svelte-with-css/commit/7db7e2819651922f0845ff61b31d11f1c3f007b6)

- `px` is an *absolute* value.

- `50vh` 50% *relative* to the viewport height

- *Reset css* template change default css values, is not used now. *Normalize css* template has common css values for different **browsers**.

## 2. Box Model
### 2.1 Initial concepts
[commit](https://github.com/ccalobeto/svelte-with-css/commit/cd4bb6e373548905aa328694b15a2a2eaa293588)

- `span`, `a`, `em` and `strong` work **inline** so *height* and *width* properties will not work. Only *padding*.

- `div`, `h1` and `section` work with **block** by default so there is a jump line when you stack them.

- The box size is width + height + padding + border.

- The content is surrounded by *height* and *width* limits only.

- The box by default is set to `box-sizing: content-box`.

- With `box-sizing: border-box` padding and border are inside *height* and *width* limits. 
![](/static/docs/box-sizing.png)

### 2.2 Middle concepts
[commit](https://github.com/ccalobeto/svelte-with-css/commit/a920432749af5b1cf01ceb03f2e2c6062d968640)

- **Overflow** happens when a content(text, images, videos) doesn't reach in the box. Use `overflow:auto` or `overflow:scroll`.
![](/static/docs/position-scroll.gif)

- **Position** is use in combination with `position:relative` for the parent element and `position:absolute` for the child. In the child use with `right`, `top`, `bottom` and `left`. If you want to center use `margin: auto` and `inset:0`.
![](/static/docs/position-center.png)

- Position-fixed: it remains fixed in the viewport. It is used by chatbots window.
![](/static/docs/position-fixed.gif)

- Position-sticky
The element (blue box) remains fixed to the container (black border box).
![](/static/docs/position-sticky.gif)

## 3. z-index
[commit](https://github.com/ccalobeto/svelte-with-css/commit/cae550530763101c696b87ccd723823b291bbfd2)

- See the effect the blue box is on top of one container and behind of another container, adjust the window. It is caused by **contexto de aplilamiento**. 
![](/static/docs/fixed.gif)

- Fix with `z-index:2`
![](/static/docs/z-index.gif)

- Use tools like [web.dev](https://web.dev/learn/css/z-index)

- z-index deeper 2:22:00, `position:relative` is the key.

## 4. Flex
[commit](https://github.com/ccalobeto/svelte-with-css/commit/6fcbb1db88225893a3350e3a27a14be12b9176a5)

It works only in **one axis**, as a column or as a row. More cool exercises in [flexboxfroggy](https://flexboxfroggy.com/).

- If you stack div elements by code, by default are `display:block`, they look like this
![](/static/docs/initial-state.png)

- Change child divs `display:inline` and it will stacked as text and `height` and `width` will not work.
![](/static/docs/flex-inline.png)

- With parent `display:flex` arrange childs as a block but horizontally.
![](/static/docs/display-flex.png)

- With parent `display:flex` and `flex-direction:column` display appends the blocks vertically again.
![](/static/docs/flex-direction.png)

- Use `flex-wrap:nowrap` to fit the childs in the parent in one row. By default *nowrap*.
![Initial](/static/docs/flex-nowrap.png)
See how it forces to fit.
![Real](/static/docs/flex-nowrap-real.png)

- Use `flex-wrap:wrap` to fit childs (each 100px wide) in a row (with `flex-direction: row`) but it didn't  because it can't fit the parent (of 200px wide) due to `border` properties. So with no space it will stack it.
![Then](/static/docs/flex-wrap.png)

- Control spaces betwen elements (in deep) : 2:45:00. With `flex:auto` , `flex:1` like wide *proportions* like here ![flex-1](/static/docs/flex-1.png). Complex configuration of flex; different sizes of childs ![flex-complex](/static/docs/flex-complex.png).

- Justify-content property
`justify-content: center` ![center](/static/docs/justify-center.png)
`justify-content: space-around` ![space-around](/static/docs/justify-space.png)
`justify-content: between` ![between](/static/docs/justify-between.png)
`justify-content:gap` ![gap](/static/docs/justify-gap.png)

- Complex divs distribution with `align-items: center` and `align-content: center` => 3:00:00. Use dev tools to debug.
![](/static/docs/align-content.png)

## 5. Grid
Grid is **multidimensional**, Flex is **one-dimensional**. Go to [grid garden](https://cssgridgarden.com/) to get in practice. 

> [!NOTE]
> Manipulating the grid is like a sheet in excel. You can edit the grid and the content in each cell.

- Element sizes can be **fixed** or **flexible**.

- Elements can be **positioned** every where in the grid and be on top other elements.

- Grid with two columns. *See in the next commit*.
![](/static/docs/grid-2.png)

- Grid template columns.*See in the next commit*.
![](/static/docs/grid-auto.png)
![](/static/docs/grid-combinations.png)
![](/static/docs/grid-fractions.png)
![](/static/docs/grid-fractions-variation.png)
![](/static/docs/grid-rows.png)

- Size of Aside bar => 3:53:00
talks about `<aside>` element and `minmax` function to calculate the minimum size of the aside bar. **minmax** function is used instead of `@media` queries for responsive purpuses. 

### 5.1 Example 
[commit](https://github.com/ccalobeto/svelte-with-css/commit/15f7fc2d9d6dd561f60aefae253b6ba5d9f0f2c3)

- Begins 3:57:00

- A simple grid distribution of images with 3 columns and equally spaces `grid-template-columns: 1fr 1fr 1fr;` 
![](/static/docs/grid-example.png)

- Being responsive in one line (not in commit but in route) : `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`; to fill column(s) of 1fr (or more) every 200px width. 
![](/static/docs/grid-example-responsive.gif)

- Difference between --autofill and autofit--: *autofit* fits width images to width viewport. You will look the effect when there are few of images. 

### 5.2 Bento Grids
[commit](https://github.com/ccalobeto/svelte-with-css/commit/bc4c34bc3d1d9b377dffaaed1caaf2826dfd56e2)

 - We will do this.
 ![](/static/docs/grid-bento.png)

 - Use grid layout in dev tools. The limit of one grid is surrounded by orange *sticks*. 
 ![](/static/docs/grid-dev-tools.png)

 - Used in calculator apps. Bento is builded with `grid-column` and `grid-row` child properties. 
 ![](/static/docs/grid-bento-build.png)

 - You could use *negative* numbers, just count reverse.
 ![](/static/docs/grid-bento-more.png)

 - You could set one cell on top of another cell, just complement with `z-index` => 4:23:50. 

 - Use few code to do the bento responsive => 4:25:00. In cellphone two columns, if the screen increases over 500px it turns three.
 ![](/static/docs/grid-bento-media.gif)
 ![](/static/docs/grid-bento-responsive.png)

 > [!TIP]
 > Use with `z-index` while you hover a grid and you want another behavior to appear like showing another element in the background with animation.

## 6. Layout
[commit](https://github.com/ccalobeto/svelte-with-css/commit/4187edbada29ec3380ad7424e1f9f3393b3be82d)

- Simple layout
![](/static/docs/layout-basic.png)

- Enhanced layout with grid-area names in child elements. Here is how you control **visually** in the parent.
```js
grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
```
![](/static/docs/layout-enhanced.png)

- Responsive layout
Use `@media` queries to move sidebar to the top.
![](/static/docs/layout-responsive.gif)

- (Not in commit) Inline alignment in a container (parent) with `justify-items` or `align-items` properties => 4:39:20. By default each element (in this case a div) *stretches* to a grid cell. Use this properties to center or justify the elements.
![](/static/docs/layout-inline-1.png)
Be careful with these properties, remember the code bellow **is the size of each grid** not the elements.
![](/static/docs/layout-inline-grid.png)

- To center all the grid to the container use `justify-content`, `align-content` or `place-content` properties. 
This is the real size of the grid from 1 to 7 div, all the orange area is the container size.
![](/static/docs/layout-inline-2.png)
Properties applied!
![](/static/docs/layout-inline-3.png)

> [!IMPORTANT]
> Element size (one cell) is different from grid size (multiple cells).

## 7. Advanced animations
- Two forms of element animations: **transitions** and **animations**.

- They improve the user experience.

### 7.1 Transitions
[commit](https://github.com/ccalobeto/svelte-with-css/commit/2988cef65f530d8d24b2be14746decdd66191768)

- Inital state
![](/static/docs/transition-initial.gif)

- By default transitions are linear and animate thes properties: background, scale and shadow at once. 
![](/static/docs/transition-transition.gif)
See that transition happens from `.pulser` (initial state) to `.pulser:hover`. 
Other states you can use: focus, active, when you change a class name by js, when you deactivate a form, deeactive an input etc

[!IMPORTANT]
> Transitions declare in initial state.

- But shadows are too costly in memory => 5:01:00. You can control the animation by setting `transition-property: background, scale` and remove long shadows.

- These are non linear transitions functions: *ease*, *ease-in*, *ease-out*, *ease-in-out*, *steps(n)* and *cubic-bezier(params)*
![](/static/docs/transition-ease.gif)

- Use delay to show your fancy solution and **improve user experience** with `transition-delay: 1s` => 5:13:50
![](/static/docs/transition-delay.gif)

- Reduce lines of code with `transition` and with this format `<property> <duration> <type> <delay>`.
```js
transition: 
  background 300ms linear 2s;
  scale 500ms ease-in-out;
  box-shadow 1s ease;
```
- Videos, images and fonts are not transitioned elements because they don't have a middle state.

- Deactive transitions with `@media` query => 5:22:00.

### 7.2 Animations
[commit](https://github.com/ccalobeto/svelte-with-css/commit/6ba59e50b5ba94314f268c397254eea22646d417)

- Animations are like talking about fotograms and *keyframes*. By default animations returns to the initial state. 

- It is better to code animations with css than js. Animations use GPU.

- A simple animation
![](/static/docs/animation-simple.gif)

- An enhanced animation that blinks 5 times, `animation-iteration-count: 5`
![](/static/docs/animation-enhanced.gif)

- Many animations of Mario => 5:36:40. You could insert two o more animations too.
![](/static/docs/animation-mario.gif)
![](/static/docs/animation-mario-2.gif)

## 8. Scrolly
This section is different from others with every route by title content. In this section, every **subtitle** has a route. See *explore only* term.

### 8.1 Scrolly
[commit](https://github.com/ccalobeto/svelte-with-css/commit/ca8d5818f8dbd74bb8bd610abdd7a6cc37805a14)

- Scrolly page and see the top red bar that increases its wide while scrollying.
![](/static/docs/scrolly-simple.gif)

- Explore only in [desktop](http://localhost:5173/scrolly)

### 8.2 Scrolly header
[commit](https://github.com/ccalobeto/svelte-with-css/commit/2f3a44782ccd2dc258fa7c066ccbb5677a955cdf)

- Scrolly
![](/static/docs/animation-sticky.gif)

- `animation-range: 0% 200px` accelerates the scroll of the top title bar.
![](/static/docs/animation-header.gif)

- Explore only in [desktop](http://localhost:5173/scrolly-header) 

### 8.3 Scrolly images
[commit](https://github.com/ccalobeto/svelte-with-css/commit/3a7aaf824d0e1c1412bf24a03237062ca31c6149)

- The images appears while scrolling.

- There is a problem with opacity because it moves h1 under images. With `z-index` in h1, you fix it.
![problem](/static/docs/animation-problem-opacity.png)
![fix](/static/docs/animation-fix-opacity.png)

- Accelerate the transition to see the images with `animation-range: entry 20% cover 30%`.
![](/static/docs/animation-images.gif)

- Explore only in [desktop](http://localhost:5173/scrolly-images)




































