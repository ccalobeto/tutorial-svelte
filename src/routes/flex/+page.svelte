<h1>--inline--</h1>
<section class="parent-inline-1">
	<div class="inline-1">1</div>
	<div class="inline-1">2</div>
	<div class="inline-1">3</div>
</section>

<h1>--flex--</h1>
<section class="parent-flex-1">
	<div class="flex-1">1</div>
	<div class="flex-1">2</div>
	<div class="flex-1">3</div>
</section>

<h1>--flex-direction--</h1>
<section class="parent-flex-dir-1">
	<div class="flex-dir-1">1</div>
	<div class="flex-dir-1">2</div>
	<div class="flex-dir-1">3</div>
</section>

<h1>--flex-wrap--</h1>
<section class="parent-flex-wrap-1">
	<div class="item-flex-wrap-1">1</div>
	<div class="item-flex-wrap-1">2</div>
	<div class="item-flex-wrap-1">3</div>
</section>

<h1>--justify-content--</h1>
<section class="parent-justify-1">
	<div class="item-justify-1">1</div>
	<div class="item-justify-1">2</div>
	<div class="item-justify-1">3</div>
</section>

<style>
	/* justify-content */
	.parent-justify-1 {
		display: flex;
		flex-direction: row;
		border: 4px solid #000;
		width: 250px;
		box-sizing: border-box;
		height: 400px;
		justify-content: center;
		/* justify-content: space-around; */
		/* justify-content: space-between; */
		gap: 15px;
	}
	.item-justify-1 {
		border: 1px solid;
		opacity: 0.9;
		width: 50px;
		height: 50px;
	}

	.item-justify-1:first-child {
		background: yellow;
	}

	.item-justify-1:last-child {
		background: red;
	}
	/* flex-wrap */
	.parent-flex-wrap-1 {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		border: 4px solid #000;
		width: 200px;
	}
	.item-flex-wrap-1 {
		border: 1px solid;
		opacity: 0.9;
		width: 100px;
		height: 100px;
		background: #09f;
	}

	.item-flex-wrap-1:first-child {
		background: yellow;
	}

	.item-flex-wrap-1:last-child {
		background: red;
	}
	/* flex-direction */
	.parent-flex-dir-1 {
		display: flex;
		flex-direction: column;
	}
	.flex-dir-1 {
		border: 1px solid;
		opacity: 0.9;
		width: 100px;
		height: 100px;
		background: #09f;
	}

	.flex-dir-1:first-child {
		background: yellow;
	}

	.flex-dir-1:last-child {
		background: red;
	}

	/* display:flex */
	.parent-flex-1 {
		display: flex;
	}
	.flex-1 {
		border: 1px solid;
		opacity: 0.9;
		width: 100px;
		height: 100px;
		background: #09f;
	}

	.flex-1:first-child {
		background: yellow;
	}

	.flex-1:last-child {
		background: red;
	}
	/* display:inline */
	.parent-inline-1 {
		display: block;
	}
	.inline-1 {
		border: 1px solid;
		opacity: 0.9;
		width: 100px;
		height: 100px;
		background: #09f;
		/* display: block; by default div has display:block */
		display: inline;
	}

	.inline-1:first-child {
		background: yellow;
	}

	.inline-1:last-child {
		background: red;
	}

	h1 {
		color: gray;
		opacity: 0.5;
	}
</style>
