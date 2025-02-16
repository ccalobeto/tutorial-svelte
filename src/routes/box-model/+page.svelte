<h1>--Box model--</h1>
<span> Esto es un texto </span>
<span> Esto es un texto </span>
<div class="container">Modelo de la caja</div>

<section class="section-container"></section>

<h1>--Flex box--</h1>
<section class="container-overflow">CSS is awesome</section>

<h1>--Position--</h1>
<section>
	<div class="container-position">container</div>
</section>

<h1>--Position fixed--</h1>
<section class="parent">
	<div class="container-position-fixed">container</div>
</section>
<section class="parent">
	<div class="container-position-fixed">container</div>
</section>
<section class="parent">
	<div class="container-position-fixed">container</div>
</section>

<h1>--Position sticky--</h1>
<section class="parent-sticky">
	<div class="container-position-sticky">container</div>
</section>
<section class="parent-sticky">
	<div class="container-position-sticky">container</div>
</section>
<section class="parent-sticky">
	<div class="container-position-sticky">container</div>
</section>

<style>
	/* position sticky */
	.parent-sticky {
		border: 5px solid #000;
		width: 250px;
		height: 700px;
		box-sizing: border-box;
		position: relative; /*works even if it is not set */
	}

	.container-position-sticky {
		width: 100px;
		height: 100px;
		background: #09f;
		position: sticky;
		top: 0;
		right: 0;
	}
	/* position fixed */
	.parent {
		border: 5px solid #000;
		width: 250px;
		height: 250px;
		box-sizing: border-box;
		position: relative;
	}

	.container-position-fixed {
		width: 100px;
		height: 100px;
		background: #09f;
		position: fixed;
		/* bottom: 0; disabled to see sticky
		right: 0; disabled to see sticky */
	}

	/* position */

	section {
		width: 250px;
		height: 250px;
		border: 5px solid #000;
		box-sizing: border-box;
		position: relative; /*use position, positioncenter*/
	}

	.container-position {
		width: 100px;
		height: 100px;
		background: #09f;
		position: absolute; /*position-anywhere, position-center*/
		/* top: 50px; position-anywhere */
		/* right: 50px; position-anywhere */
		inset: 0; /*position-center*/
		margin: auto; /*position-center*/
	}

	/* overflow*/

	.container-overflow {
		width: 150px;
		height: 150px;
		background-color: #09f;
		padding: 10px;
		box-sizing: border-box;
		font-size: 48px;
		/* overflow: auto; solution */
		overflow: scroll; /*solution*/
	}

	/* box model */
	.container {
		width: 50vw;
		height: 50vh;
		background-color: #09f;
	}

	.section-container {
		width: 360px;
		height: 360px;
		background-color: #09f;
		padding: 36px;
		border: 10px solid purple;
		margin: 20px;
		/* box-sizing: border-box; /*by default* */
		box-sizing: border-box;
	}

	span {
		background: red;
		padding: 20px;
	}

	h1 {
		color: gray;
		opacity: 0.5;
	}
</style>
