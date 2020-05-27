require('@rails/ujs').start();
require('@rails/activestorage').start();
require('channels');

import 'bootstrap';
// CSS
import 'mapbox-gl/dist/mapbox-gl.css';
// internal imports
import { initMapbox } from '../plugins/init_mapbox';

// document.addEventListener('turbolinks:load', () => {

window.addEventListener('DOMContentLoaded', () => {
	initMapbox();
});
// });

document.querySelector('#query').addEventListener('keyup', event => {
	document.querySelectorAll('.trip_venue_query input').forEach(input => {
		input.value = event.target.value;
	});
});
