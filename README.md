# CURSO DE CSS COMPLETO: De Principiante a Front-End 2024
[Video Tutorial](https://www.youtube.com/watch?v=TlJbu0BMLaY)

## Enlaces recomendados
- [Manz.dev](https://lenguajecss.com/)
- [Google](https://web.dev/learn/css)
- [mdm](https://developer.mozilla.org/es/docs/Web/CSS#tutoriales) `<-- la mejor`
- [codilink](https://codi.link/) for online practice

## Calculators
- [oklch](https://oklch.com/)

# Content
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




