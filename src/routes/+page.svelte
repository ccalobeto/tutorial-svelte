<script>
	import mapboxgl from 'mapbox-gl';
	import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';
	import { PUBLIC_MAPBOX_ACCESS_TOKEN } from '$env/static/public';

	mapboxgl.accessToken = PUBLIC_MAPBOX_ACCESS_TOKEN;
</script>

<title>Bike Watch</title>
<h1>Bike Watch</h1>
<p>
	In this project, we will be building an immersive, interactive map visualization of bike traffic
	in the Boston area during different times of the day.
</p>

{console.log(mapboxgl.accessToken)}
<div id="map"></div>

<style>
	@import url('$lib/global.css');

	#map {
		flex: 1;
		background: yellowgreen;
	}
</style>
