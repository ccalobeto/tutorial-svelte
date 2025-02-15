<!-- Colors -->
<h1>--Colors--</h1>
<h2>Colors</h2>
<h3>RGBA(legacy)</h3>
<h4>RGB</h4>
<h5>HSL</h5>
<h6>OKLCH</h6>

<h1>--Classes--</h1>
<nav id="nav">
	<ul class="links">
		<li><a href="index.html">This is Massively</a></li>
		<li><a href="generic.html">Generic Page</a></li>
		<li class="active"><a href="elements.html">Elements Reference</a></li>
	</ul>
	<ul class="icons">
		<li>
			<a href="/static" class="icon brands fa-twitter"><span class="label">Twitter</span></a>
		</li>
		<li>
			<a href="/static" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a>
		</li>
		<li>
			<a href="/static" class="icon brands fa-instagram"><span class="label">Instagram</span></a>
		</li>
		<li>
			<a href="/static" class="icon brands fa-github"><span class="label">GitHub</span></a>
		</li>
	</ul>
</nav>

<h1>--Inheritance--</h1>
<div class="container">
	Este es el container
	<div class="child">Este es el child</div>
</div>

<h1>--pseudoclasses--</h1>
<div class="container">
	Este es el container
	<a href="https://www.twitch.tv/" class="link-games"> -twich </a>
	<a href="https://www.nexusmods.com/" class="link-games"> -nexusmods </a>
	<a href="https://store.epicgames.com/en-US/" class="link-games"> -epicgames</a>
</div>

<h1>--first-child, last-child--</h1>
<ul class="experience">
	<li>
		<span>Data viz developer</span>
	</li>
	<li>
		<span>Data scientist</span>
	</li>
	<li>
		<span>Data commision coordinator</span>
	</li>
</ul>

<style>
	/* first-child, last-child */
	.experience li:first-child {
		color: pink;
	}

	.experience li:last-child {
		color: purple;
	}

	/* pseudoclasses */
	.link-games {
		color: red;
	}
	.link-games:hover {
		color: yellow;
		outline: 5px solid #0080ff;
	}
	.link-games:active {
		outline: 5px solid brown;
	}
	/* inheritance */
	.container {
		color: #09f;
		font-size: 32px;
		border: 3px solid #e100ff;
		display: flex;
	}

	.child {
		border: inherit;
		font-size: initial;
	}

	/* colors */

	h2 {
		color: rgba(255, 0, 0, 0.5);
	}

	h3 {
		color: rgb(213 50 200 / 50%);
	}

	h4 {
		color: hsl(292, 90%, 44%, 0.764);
	}

	h5 {
		color: oklch(180 0.8 0.5 / 1);
	}

	h6 {
		color: red;
	}

	/* clases */
	.label {
		color: red;
	}

	#nav {
		background: #09f;
		color: white;
		border: 30px solid #000;
	}
</style>
