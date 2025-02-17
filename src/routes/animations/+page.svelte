<h1>--Transitions-initial state--</h1>
<section>
	<div class="pulser"></div>
</section>

<h1>--Transitions-transition--</h1>
<section class="section-transition">
	<div class="pulser-transition"></div>
</section>

<h1>--Transitions-non-linear--</h1>
<section class="section-non-linear">
	<div class="pulser-non-linear"></div>
</section>

<h1>--Animations--</h1>
<section class="section-animations">
	<div class="pulser-animations"></div>
</section>

<h1>--Animations-enhanced--</h1>

<section class="section-animations-enhanced">
	<div class="pulser-animations-enhanced"></div>
</section>

<style>
	/*Animations enhanced*/
	div.pulser-animations-enhanced {
		width: 50px;
		height: 50px;
		background-color: #09f;
		border-radius: 50%;
		position: relative;
	}

	.pulser-animations-enhanced::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: #09f;
		border-radius: 50%;
		z-index: -1;
		/* ----- */
		animation-name: pulse;
		animation-duration: 2s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: 5;
	}
	@keyframes pulse {
		/* build the animation */
		0% {
			opacity: 0;
		}
		50% {
			scale: 1.4;
			opacity: 0.4;
		}
	}

	.section-animations-enhanced {
		display: grid;
		place-content: center;
		min-height: 50vh;
		border: 4px solid #000;
	}
	/*Animations simple*/
	div.pulser-animations {
		width: 50px;
		height: 50px;
		background-color: #09f;
		border-radius: 50%;
		position: relative;
		animation: move; /* move is the name of the animation */
		animation-duration: 3s; /* duration of the animation */
	}

	@keyframes move {
		/* build the animation */
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(100px);
		}
	}

	.section-animations {
		display: grid;
		place-content: center;
		min-height: 50vh;
		border: 4px solid #000;
	}

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
