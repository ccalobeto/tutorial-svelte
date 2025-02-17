# CURSO DE CSS COMPLETO: De Principiante a Front-End 2024
[Video Tutorial](https://www.youtube.com/watch?v=TlJbu0BMLaY)

## Enlaces recomendados
- [Manz.dev](https://lenguajecss.com/)
- [Google](https://web.dev/learn/css)
- [mdm](https://developer.mozilla.org/es/docs/Web/CSS#tutoriales) `<-- la mejor`
- [codilink](https://codi.link/) for online practice

## Tool calculators
- [oklch](https://oklch.com/)

# Content
Every section has a route for example `http://localhost:5173/basics`. In `+page.svelte` file of every route the style is divided into subsections.

## 1. Basics
### 1.1 Colors
Different ways to set colors with property-values `rgb`, `hsl`, `olkch`

> [!NOTE] A good practice to build your site is to use *classes* and not *identifiers* like `#`.

### 1.2 Inheritance 
In inheritance is important to use *fallbacks* in case the first value of the property does not exits, then use the second value and so on. 

### 1.3 Pseudo classes 
- They are states of properties
- These are `hover`, `active`, `focus`, `first-child`, `last-child` etc
- Border and outline. Border makes a little jumping, but outline not.
![border-to-outline](static/docs/border-to-outline.gif)

### 1.4 Combined selectors
- Combined selector to paint text
- Use operators (1:00:00) like `>` (direct childs), `~` (brothers elements), `+` direct child <-- used by adjoining buttoms. 

### 1.5 Cascading
If an element is set two times, it will take the property of the last one.

### 1.6 Specifity
- Applies the declaration which is more spefic. See [specifity calculator](https://specificity.keegan.st/) 
![](/static/docs/specifity.png)

- In the example the last declaration with `p` (general) doesn't work because the *specifity* of `text` is stronger (more specific). Specifity for Blue is (0,1,0) and for red (0,0,1).

- Complex specifity
![](/static/docs/specifity-complex.png)

- Libraries that help with specifity like *tailwindcss*

- *Styling lines*  and `!important` breaks the rule of specifity. 1:15:00. Don't use them.

### 1.7 Absolute and relative units
- `px` is an *absolute* value.
- `50vh` 50% *relative* to the viewport height
- *Reset css* change default css values, is not used now. *Normalize css*  common css values for different **browsers**.

## 2. Box Model
### 2.1 Initial concepts
- `span`, `a`, `em` and `strong` work **inline** so *height* and *width* properties don't work with these elements. Only *padding*.
- `div`, `h1` and `section` work with **block** by default so there is a jump line.
- The box size is width + height + padding + border.
- The content is surrounded by *height* and *width* limits only.
- The box by default is set to `box-sizing: content-box`
- With `box-sizing: border-box` padding and border are inside *height* and *width* limits. ![](/static/docs/box-sizing.png)

### 2.2 Middle concepts
- Overflow: happens when a content(text, images, videos) doesn't reach in the box. Use `overflow:auto` or `overflow:scroll`.
![](/static/docs/position-scroll.gif)

- Position: use in combination with `position:relative` for the parent element and `position:absolute` for the child. In the child use with `right`, `top`, `bottom` and `left`. If you want to center use `margin: auto` and `inset:0`.
![](/static/docs/position-center.png)

- Position-fixed: it remains fixed in the viewport. It is used by  chatbots window.
![](/static/docs/position-fixed.gif)

- Position-sticky
The element (blue box) remains fixed to the container (black border box).

## 3. z-index
- See the effect the blue box is on top of one container and behind of another container. It is caused by **contexto de aplilamiento**. 
![](/static/docs/fixed.gif)

- Fix with `z-index:2`
![](/static/docs/z-index.gif)

- Use tools like [web.dev](https://web.dev/learn/css/z-index)

- z-index deeper 2:22:00, `position:relative` is the key.

## 4. Flex
It works only in **one axis** as a column or a row. More cool exercisesin [flexboxfroggy](https://flexboxfroggy.com/). 
- Initial state child div element by default `display:block`
![](/static/docs/initial-state.png)

- Change state in child div to `display:inline` and it will stacked as text and `height` and `width` will not work.
![](/static/docs/flex-inline.png)

- In parent `display:flex` arrange childs as a block but horizontally.
![](/static/docs/display-flex.png)

- In parent `display:flex` and `flex-direction:column` append the blocks vertically.
![](/static/docs/flex-direction.png)

- Use `flex-wrap:nowrap` to fit the childs in the parent in one row. By default *nowrap*.
![Initial](/static/docs/flex-nowrap.png)
![Real](/static/docs/flex-nowrap-real.png)

- Use `flex-wrap:wrap` to stacked childs (each 100px) if they don't fit the parent (200px).
![Then](/static/docs/flex-wrap.png)

- Control spaces betwen elements (in deep) : 2:45:00. With `flex:auto` , `flex:1` like here ![flex-1](/static/docs/flex-1.png). Complex configuration of flex; different sizes of childs ![flex-complex](/static/docs/flex-complex.png).

- Justify-content
![center](/static/docs/justify-center.png)
![space-around](/static/docs/justify-space.png)
![between](/static/docs/justify-between.png)
![gap](/static/docs/justify-gap.png)

- Cross axis distribution in parent with `align-items: center` and `align-content: center` => 3:00:00. Use dev tools to debug.
![](/static/docs/align-content.png)

## 5. Grid
Grid is **multidimensional**, Flex is **one-dimensional**. Go to [grid garden](https://cssgridgarden.com/) to take into practice, the learned grid concepts. Manipulate the grid is like a sheet in excel.

- Element sizes can be *fixed* or *flexible*.

- Elements can be *positioned* every where in the grid and be on top other elements.

- Grid with two columns.
![](/static/docs/grid-2.png)

- Grid template columns
![](/static/docs/grid-auto.png)
![](/static/docs/grid-combinations.png)
![](/static/docs/grid-fractions.png)
![](/static/docs/grid-fractions-variation.png)
![](/static/docs/grid-rows.png)

- Aside bar => 3:53:00
Use of `<aside>` element and `minmax` function to calculates the minimum size of the aside bar. This function is used instead of `@media queries`. 

### 5.1 Example 
- Begins 3:57:00

- A simple grid distribution
![](/static/docs/grid-example.png)

- Be responsive without using *@media* queries in one line with `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`, fills column(s) of 1fr (or more) every 200px width. 
![](/static/docs/grid-example-responsive.gif)

- Differences between *autofill* and *autofit* => fits width images to the width viewport. You will look that effect when there are few of images. 

### 5.2 Bento Grids
 - What we will do 
 ![](/static/docs/grid-bento.png)

 - Use grid layout in dev tools 
 ![](/static/docs/grid-dev-tools.png)

 - Bento builded with `grid-column` and `grid-row`. Use case for calculators.
 ![](/static/docs/grid-bento-build.png)

 - You could add negative numbers, just count reverse.
 ![](/static/docs/grid-bento-more.png)

 - You could set one cell on top of another cell and complement with `z-index` => 4:23:50. Utility while you do hover in a grid, another behavior appears.

 - Use few code instead of media queries
 ![](/static/docs/grid-bento-media.gif)

## 6. Layout
### 6.1 Layouts
- Simple layout
![](/static/docs/layout-basic.png)

- Enhanced layout naming grid-area and here is how to control **visually**.
```js
grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
```
![](/static/docs/layout-enhanced.png)

- Mobile layout
Use `@media` queries to move sidebar to the top.
![](/static/docs/layout-responsive.gif)

### 6.2 Inline alignment of elements
Element size is different from grid size and confuses a lot of people.

- Inline alignment with `justify-content` and `align-content` or `place-content` (talked too in flex) => 4:39:20
![](/static/docs/layout-inline.png)

## 7. Advanced animations
Two forms of element animations: **transitions** and **animations**.
They improve the user experience.

### 7.1 Transitions
- Inital state
![](/static/docs/transition-initial.gif)

- Transition goes in its **initial** state to avoid jumps.
By default transitions are linear and animate all here: background, scale and shadow.
![](/static/docs/transition-transition.gif)

- But shadows are too cost in memory => 5:01:00. Control the animation and remove long shadows `transition-property: background, scale`.

- Non linear transitions: *ease*, *ease-in*, *ease-out*, *ease-in-out*, *steps(n)* and *cubic-bezier(params)*
![](/static/docs/transition-ease.gif)

- Use delay to show more fancy elements and **improve user experience** with `transition-delay: 1s` => 5:13:50
![](/static/docs/transition-delay.gif)

- Short version with `transition`, delay goes to final.
```js
transition: 
  background 300ms linear 2s;
  scale 500ms ease-in-out;
  box-shadow 1s ease;
```
- Not all elements are transitioned like images, fonsts etc because they don't have a middle state.

- Deactive transitions with `@media`query => 5:22:00.

### 7.2 Animations
Talking about fotograms and *keyframes*. Animations returns to initial state. It is better to do css than js. Animations use GPU.

- Animation simple
![](/static/docs/animation-simple.gif)

- Animation enhanced that blinks 5 times, `animation-iteration-count: 5`
![](/static/docs/animation-enhanced.gif)

- Many animations of Mario => 5:36:40. You could insert two o more animations too.
![](/static/docs/animation-mario.gif)
![](/static/docs/animation-mario-2.gif)




























