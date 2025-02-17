<div id="progress"></div>
<main>
	<h1>Spider-Man: El héroe de Nueva York</h1>

	<h2>Introducción</h2>
	<p>
		Spider-Man, también conocido como Peter Parker, es uno de los superhéroes más icónicos de Marvel
		Comics. Desde su primera aparición en 1962, ha capturado la imaginación de millones de personas
		en todo el mundo. Su historia se desarrolla principalmente en la vibrante ciudad de Nueva York,
		donde lucha contra el crimen y protege a los inocentes.
	</p>

	<h2>Los orígenes de Spider-Man</h2>
	<p>
		Peter Parker era un estudiante de secundaria que fue mordido por una araña radiactiva, lo que le
		otorgó habilidades sobrehumanas. Con su nueva fuerza, agilidad y la capacidad de trepar paredes,
		decidió usar sus poderes para ayudar a los demás. Sin embargo, también aprendió que "un gran
		poder conlleva una gran responsabilidad".
	</p>

	<h2>Su trabajo en la ciudad</h2>
	<p>
		Spider-Man patrulla las calles de Nueva York, enfrentándose a villanos como el Duende Verde,
		Doctor Octopus y Venom. Su trabajo no solo consiste en luchar contra el crimen, sino también en
		ser un símbolo de esperanza para los neoyorquinos. A menudo se le ve balanceándose entre los
		rascacielos, utilizando sus telarañas para moverse rápidamente y llegar a donde se le necesita.
	</p>

	<h2>Relaciones y desafíos</h2>
	<p>
		A lo largo de su vida, Peter ha enfrentado numerosos desafíos personales, incluyendo la pérdida
		de seres queridos y la lucha por equilibrar su vida como estudiante y superhéroe. Sus relaciones
		con personajes como Mary Jane Watson y su tía May son fundamentales en su historia, añadiendo
		profundidad a su carácter y motivaciones.
	</p>

	<h2>Impacto cultural</h2>
	<p>
		Spider-Man no solo es un héroe en los cómics, sino que también ha tenido un impacto
		significativo en la cultura popular. Ha sido protagonista de numerosas películas, series de
		televisión y videojuegos, convirtiéndose en un símbolo de valentía y perseverancia. Su lema,
		"Con gran poder, viene una gran responsabilidad", resuena con muchas personas, inspirando a
		generaciones a hacer el bien.
	</p>

	<h2>Conclusión</h2>
	<p>
		Spider-Man es más que un simple superhéroe; es un reflejo de los desafíos y triunfos de la vida
		cotidiana. Su dedicación a proteger a los ciudadanos de Nueva York lo convierte en un verdadero
		héroe, y su historia continúa inspirando a muchos en todo el mundo.
	</p>
</main>

<style>
	main {
		padding: 32px;
	}

	#progress {
		position: fixed;
		top: 0;
		width: 0%;
		height: 1em;
		background: red;

		animation: progress-row 5s ease-in-out;
		animation-timeline: scroll(root block);
	}

	@keyframes progress-row {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}

	h1 {
		color: #c0392b;
	}
	h2 {
		color: #2980b9;
	}
	p {
		line-height: 1.6;
	}
</style>
