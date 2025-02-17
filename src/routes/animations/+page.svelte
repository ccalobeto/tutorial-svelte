<h1>--Animation-Initial state--</h1>
<section>
	<div class="pulser"></div>
</section>

<h1>--Animation-transition--</h1>
<section class="section-transition">
	<div class="pulser-transition"></div>
</section>

<h1>--Animation-non-linear--</h1>
<section class="section-non-linear">
	<div class="pulser-non-linear"></div>
</section>

<style>
	/*Non linear*/
	div.pulser-non-linear {
		width: 50px;
		height: 50px;
		background-color: #09f;
		border-radius: 50%;
		position: relative;
		transition-duration: 2s;
		transition-property: background, scale;
		transition-timing-function: ease-in-out;
	}

	div.pulser-non-linear:hover {
		scale: 2;
		background: purple;
		box-shadow: 0 0 10px 10px purple;
	}

	.section-non-linear {
		display: grid;
		place-content: center;
		min-height: 50vh;
		border: 4px solid #000;
	}
	/*Transition*/
	div.pulser-transition {
		width: 50px;
		height: 50px;
		background-color: #09f;
		border-radius: 50%;
		position: relative;
		transition-duration: 2s;
	}

	div.pulser-transition:hover {
		scale: 2;
		background: purple;
		box-shadow: 0 0 10px 10px purple;
	}

	.section-transition {
		display: grid;
		place-content: center;
		min-height: 50vh;
		border: 4px solid #000;
	}
	/*Inital state*/
	div.pulser {
		width: 50px;
		height: 50px;
		background-color: #09f;
		border-radius: 50%;
		position: relative;
	}

	div.pulser:hover {
		scale: 2;
	}

	section {
		display: grid;
		place-content: center;
		min-height: 50vh;
		border: 4px solid #000;
	}

	h1 {
		color: gray;
		opacity: 0.5;
	}
</style>
