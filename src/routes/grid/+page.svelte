<h1>--Grid 2 columns--</h1>
<section class="container-grid">
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<div>5</div>
	<div>6</div>
	<div>7</div>
</section>

<h1>--Grid auto columns--</h1>
<section class="container-grid-auto">
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<div>5</div>
	<div>6</div>
	<div>7</div>
</section>

<h1>--Grid example--</h1>
<div class="grid-images">
	<img src="images/pic01.jpg" alt="" />
	<img src="images/pic02.jpg" alt="" />
	<img src="images/pic03.jpg" alt="" />
	<img src="images/pic04.jpg" alt="" />
	<img src="images/pic05.jpg" alt="" />
</div>

<style>
	/* Grid example */
	.grid-images {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 32px 16px; /* space between rows and columns */
	}
	img {
		width: 100%;
		height: auto;
		border-radius: 8px;
	}

	/* grid auto columns*/
	.container-grid-auto {
		background: lightsalmon;
		border: 3px solid #000;
		border-radius: 10px;
		display: grid; /* use */
		/* grid-template-columns: auto auto 20px; use auto */
		/* grid-template-columns: 50% 100px auto 10vw; use combinations */
		/* grid-template-columns: 1fr 1fr 1fr; use fractions */
		grid-template-columns: 1fr 2fr; /* use fractions variation */
		grid-template-rows: 100px 50px 300px 100px; /* size of each row */
	}

	.container-grid-auto div {
		background: lightblue;
		border: 2px solid #09f;
		border-radius: 6px;
	}

	/* grid 2 columns*/
	.container-grid {
		background: lightsalmon;
		border: 3px solid #000;
		border-radius: 10px;
		display: grid; /* use */
		grid-template-columns: 100px 100px; /* use */
	}

	.container-grid div {
		background: lightblue;
		border: 2px solid #09f;
		border-radius: 6px;
	}

	h1 {
		color: gray;
		opacity: 0.5;
	}
</style>
