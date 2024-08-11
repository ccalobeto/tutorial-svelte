<script>
	import mapboxgl from 'mapbox-gl';
	import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	// import { _MAPBOX_KEY } from './+page.server';

	const TRIP_DATA_URL = 'https://vis-society.github.io/labs/8/data/bluebikes-traffic-2024-03.csv';
	const TRIP_STATIONS_URL = 'https://vis-society.github.io/labs/8/data/bluebikes-stations.csv';

	let privateKey;
	let stations = [];
	let map;
	let mapViewChanged = 0;
	let trips = [];
	let departures = [];
	let arrivals = [];
	let rScale;
	let timeFilter = -1;
	let departuresByMinute = Array.from({ length: 1440 }, () => []);
	let arrivalsByMinute = Array.from({ length: 1440 }, () => []);

	function getCoordinates(station) {
		let point = new mapboxgl.LngLat(station.Long, station.Lat);
		let { x, y } = map.project(point);
		return { cx: x, cy: y };
	}

	function minutesSinceMidnight(date) {
		return date.getHours() * 60 + date.getMinutes();
	}

	function filterByMinute(tripsByMinute, minute) {
		// Normalize both to the [0, 1439] range
		// % is the remainder operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

		let minMinute = (minute - 60 + 1440) % 1440;
		let maxMinute = (minute + 60) % 1440;

		if (minMinute > maxMinute) {
			let beforeMidnight = tripsByMinute.slice(minMinute);
			let afterMidnight = tripsByMinute.slice(0, maxMinute);
			return beforeMidnight.concat(afterMidnight).flat();
		} else {
			return tripsByMinute.slice(minMinute, maxMinute).flat();
		}
	}

	onMount(async () => {
		const response = await fetch('api/privateKey');
		const data = await response.json();
		privateKey = data.privateKey;
		mapboxgl.accessToken = privateKey;

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

		stations = await d3.csv(TRIP_STATIONS_URL, (row) => ({
			...row,
			Lat: +row.Lat,
			Long: +row.Long,
			'Total Docks': +row['Total Docks']
		}));

		trips = await d3.csv(TRIP_DATA_URL).then((trips) => {
			for (let trip of trips) {
				trip.started_at = new Date(trip.started_at);
				trip.ended_at = new Date(trip.ended_at);
				let startedMinutes = minutesSinceMidnight(trip.started_at);
				let endedMinutes = minutesSinceMidnight(trip.ended_at);
				departuresByMinute[startedMinutes].push(trip);
				arrivalsByMinute[endedMinutes].push(trip);
			}
			return trips;
		});
	});

	$: map?.on('move', () => mapViewChanged++);

	$: departures = d3.rollup(
		trips,
		(v) => v.length,
		(d) => d.start_station_id
	);
	$: arrivals = d3.rollup(
		trips,
		(v) => v.length,
		(d) => d.end_station_id
	);

	$: stations = stations.map((station) => {
		let id = station.Number;
		station.arrivals = arrivals.get(id) ?? 0;
		station.departures = departures.get(id) ?? 0;
		station.totalTraffic = station.arrivals + station.departures;
		return station;
	});

	$: rScale = d3
		.scaleSqrt()
		.domain([0, d3.max(stations, (d) => d.totalTraffic)])
		.range(timeFilter === -1 ? [0, 25] : [3, 50]);

	$: timeFilterLabel = new Date(0, 0, 0, 0, timeFilter).toLocaleTimeString('en', {
		timeStyle: 'short'
	});

	$: filteredDepartures = d3.rollup(
		filterByMinute(departuresByMinute, timeFilter),
		(v) => v.length,
		(d) => d.start_station_id
	);
	$: filteredArrivals = d3.rollup(
		filterByMinute(arrivalsByMinute, timeFilter),
		(v) => v.length,
		(d) => d.end_station_id
	);

	$: filteredStations = stations.map((station) => {
		station = { ...station }; // clone first
		let id = station.Number;
		station.arrivals = filteredArrivals.get(id) ?? 0;
		station.departures = filteredDepartures.get(id) ?? 0;
		station.totalTraffic = station.arrivals + station.departures;
		return station;
	});

	let stationFlow = d3.scaleQuantize().domain([0, 1]).range([0, 0.5, 1]);
</script>

<title>Bike Watch</title>
<header>
	<h1>Bike Watch</h1>
	<div class="time-filter">
		<p>
			<label for="time-slider">Filter by time: </label>
			<input type="range" id="time-slider" min="-1" max="1440" bind:value={timeFilter} />
		</p>
		<div class="time">
			<em>(any time)</em>
			<time>{timeFilterLabel}</time>
		</div>
	</div>
</header>

<div class="clock"></div>

<p>
	In this project, we will be building an immersive, interactive map visualization of bike traffic
	in the Boston area during different times of the day.
</p>

<div id="map">
	<svg>
		{#key mapViewChanged}
			{#each filteredStations as station}
				<circle
					cx={getCoordinates(station).cx}
					cy={getCoordinates(station).cy}
					r={rScale(station.totalTraffic)}
					style="--departure-ratio:{stationFlow(station.departures / station.totalTraffic)}"
				>
					<title
						>{station.NAME}:
						{station.totalTraffic} trips ({station.departures} departures, {station.arrivals} arrivals)
					</title>
				</circle>
			{/each}
		{/key}
	</svg>
</div>

<div class="legend">
	<div style="--departure-ratio: 1">More departures</div>
	<div style="--departure-ratio: 0.5">Balanced</div>
	<div style="--departure-ratio: 0">More arrivals</div>
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

	circle {
		fill-opacity: 60%;
		stroke: white;
		pointer-events: auto;
		fill: var(--color);
	}

	#map circle,
	.legend > div {
		--color-departures: steelblue;
		--color-arrivals: darkorange;
		--color: color-mix(
			in oklch,
			var(--color-departures) calc(100% * var(--departure-ratio)),
			var(--color-arrivals)
		);
	}
	header {
		display: flex;
		gap: 1em;
		align-items: baseline;
	}

	.time-filter {
		margin-left: auto;
	}

	.time {
		display: grid;
	}

	.legend {
		display: flex;
		margin-block: 1em;
	}
	.legend > div {
		flex: 1;
		gap: 1px;
		text-align: center;
		background-color: var(--color);
		color: white;
	}
</style>
