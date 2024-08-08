<script>
	import mapboxgl from 'mapbox-gl';
	import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	let stations = [];
	let map;

	mapboxgl.accessToken =
		'pk.eyJ1IjoiY2NhbG9iZXRvIiwiYSI6ImNsemhhYzc3NjAyZjcybXEwc3pzbzg5aWcifQ.i8wSRm6K7eYFQAgS6T1W2g';

	function getCoordinates(station) {
		let point = new mapboxgl.LngLat(station.Long, station.Lat);
		let { x, y } = map.project(point);
		return { cx: x, cy: y };
	}

	onMount(async () => {
		map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v12',
			zoom: 12,
			center: [-71.09415, 42.36027]
		});

		await new Promise((resolve) => {
			map.on('load', resolve);
		});

		map.addSource('boston-routes', {
			type: 'geojson',
			data: 'https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::existing-bike-network-2022.geojson?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D'
		});

		map.addSource('cambridge-routes', {
			type: 'geojson',
			data: 'https://raw.githubusercontent.com/cambridgegis/cambridgegis_data/main/Recreation/Bike_Facilities/RECREATION_BikeFacilities.geojson'
		});

		map.addLayer({
			id: 'boston-routes',
			type: 'line',
			source: 'boston-routes',
			paint: {
				'line-color': '#2ca25f',
				'line-width': 3,
				'line-opacity': 0.5
			}
		});

		map.addLayer({
			id: 'cambridge-routes',
			type: 'line',
			source: 'cambridge-routes',
			paint: {
				'line-color': '#9ebcda',
				'line-width': 3,
				'line-opacity': 0.8
			}
		});

		stations = await d3.csv(
			'https://vis-society.github.io/labs/8/data/bluebikes-stations.csv',
			(row) => ({
				...row,
				Lat: +row.Lat,
				Long: +row.Long,
				'Total Docks': +row['Total Docks']
			})
		);
	});
</script>

<title>Bike Watch</title>
<h1>Bike Watch</h1>
<p>
	In this project, we will be building an immersive, interactive map visualization of bike traffic
	in the Boston area during different times of the day.
</p>

<div id="map">
	{#each stations as station}
		<svg>
			<circle
				cx={getCoordinates(station).cx}
				cy={getCoordinates(station).cy}
				r="5"
				fill="steelblue"
			/>
		</svg>
	{/each}
</div>

<style>
	@import url('$lib/global.css');

	#map {
		flex: 1;
		background: yellowgreen;
	}

	#map svg {
		/* background-color: yellow;
		opacity: 0.5; */
		position: absolute; /*work together to position on top of the map*/
		z-index: 1; /*work together to position on top of the map*/
		width: 100%; /*to make it fill the map container*/
		height: 100%; /*to make it fill the map container*/
		pointer-events: none; /* still pan and move the map */
	}
</style>
