<h1>--z-index--</h1>
<section class="parent-z-index">
	<div class="container-position-z-index">container</div>
</section>
<section class="parent-z-index">
	<div class="container-position-z-index">container</div>
</section>

<style>
	/* z-index */
	.parent-z-index {
		border: 5px solid #000;
		width: 750px;
		height: 800px;
		box-sizing: border-box;
		/* position: relative; this is the key, must exists */
	}

	.container-position-z-index {
		width: 100px;
		height: 100px;
		background: #09f;
		position: fixed;
		right: 0;
		z-index: 1;
	}
	h1 {
		color: gray;
		opacity: 0.5;
	}
</style>
