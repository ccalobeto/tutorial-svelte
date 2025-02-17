<h1>Curso de css Animaciones</h1>

<section>
	<img src="images/pic01.jpg" alt="" />
	<img src="images/pic02.jpg" alt="" />
	<img src="images/pic03.jpg" alt="" />
	<img src="images/pic04.jpg" alt="" />
	<img src="images/pic05.jpg" alt="" />
</section>

<style>
	section {
		columns: 2;
		padding: 16px 32px;
		column-gap: 32px;
		background-color: black;
	}

	section img {
		border-radius: 4px;
		width: 100%;
		height: auto;
		margin-bottom: 32px;
	}

	h1 {
		background: black;
		color: white;
		text-align: center;
		padding: 16px;
		margin: 0;
		width: 100%;

		top: 0;
		position: sticky;

		animation: enhanced-header linear both;
		animation-timeline: scroll(root block);
		animation-range: 0% 200px;
	}

	@keyframes enhanced-header {
		to {
			background: rgba(255, 255, 255, 0.5);
			backdrop-filter: blur(5px);
			font-size: 18px;
			color: black;
		}
	}
</style>
