<h1>--Simple Layout--</h1>
<section class="container">
	<header>Header</header>
	<aside>aside</aside>
	<main>Main</main>
	<footer>Footer</footer>
</section>

<h1>--Enhanced Layout--</h1>
<section class="container-enhanced">
	<header>Header</header>
	<aside>aside</aside>
	<main>Main</main>
	<footer>Footer</footer>
</section>

<h1>--Responsive Layout--</h1>
<section class="container-responsive">
	<header>Header</header>
	<aside>aside</aside>
	<main>Main</main>
	<footer>Footer</footer>
</section>

<style>
	/* Responsive Layout */
	.container-responsive {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 35px 1fr 100px;
		min-height: 100vh;
		grid-template-areas:
			'header header sidebar'
			'content content content'
			'footer footer footer';
	}

	@media (width > 600px) {
		.container-responsive {
			grid-template-areas:
				'header header header'
				'content content sidebar'
				'footer footer footer';
		}
	}

	.container-responsive header {
		background: #09f;
		grid-area: header; /* name of the area */
	}

	.container-responsive aside {
		background: yellow;
		grid-area: sidebar; /* name of the area */
	}

	.container-responsive main {
		background: red;
		grid-area: content; /* name of the area */
	}

	.container-responsive footer {
		background: gray;
		grid-area: footer; /* name of the area */
	}

	/* Layout enhanced */
	.container-enhanced {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 35px 1fr 100px;
		min-height: 100vh;
		grid-template-areas:
			'header header header'
			'sidebar content content'
			'footer footer footer';
	}

	.container-enhanced header {
		background: #09f;
		grid-area: header; /* name of the area */
	}

	.container-enhanced aside {
		background: yellow;
		grid-area: sidebar; /* name of the area */
	}

	.container-enhanced main {
		background: red;
		grid-area: content; /* name of the area */
	}

	.container-enhanced footer {
		background: gray;
		grid-area: footer; /* name of the area */
	}

	/* Simple Layout but difficult to style*/
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 35px 1fr 100px;
		min-height: 100vh;
	}

	.container header {
		background: #09f;
		grid-column: 1 / 4; /* start column / end column */
	}

	.container aside {
		background: yellow;
	}

	.container main {
		background: red;
		grid-column: span 2; /* complete the second column */
	}

	.container footer {
		background: gray;
		grid-column: 1 / 4; /* start column / end column */
	}

	h1 {
		color: gray;
		opacity: 0.5;
	}
</style>
