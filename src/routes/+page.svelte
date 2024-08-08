<script>
	import mapboxgl from 'mapbox-gl';
	import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';
	import { onMount } from 'svelte';

	mapboxgl.accessToken =
		'pk.eyJ1IjoiY2NhbG9iZXRvIiwiYSI6ImNsemhhYzc3NjAyZjcybXEwc3pzbzg5aWcifQ.i8wSRm6K7eYFQAgS6T1W2g';

	onMount(async () => {
		let map = new mapboxgl.Map({
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
	});
</script>

<title>Bike Watch</title>
<h1>Bike Watch</h1>
<p>
	In this project, we will be building an immersive, interactive map visualization of bike traffic
	in the Boston area during different times of the day.
</p>

<div id="map"></div>

<style>
	@import url('$lib/global.css');

	#map {
		flex: 1;
		background: yellowgreen;
	}
</style>
