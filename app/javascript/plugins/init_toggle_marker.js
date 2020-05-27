const addActive = event => {
	const id = event.target.id.split('-')[1];
	const marker = document.querySelector(`#marker-${id}`);
	marker.classList.add('marker-active');
	console.log(marker);
};

const bindAddVenue = btn => {
	console.log(btn);
	btn.addEventListener('click', addActive);
};

const initAddMarker = () => {
	document.querySelectorAll('.add-venue').forEach(bindAddVenue);
};

const removeActive = event => {
	const id = event.target.id.split('-')[1];
	const marker = document.querySelector(`#marker-${id}`);
	marker.classList.remove('marker-active');
};

const bindRemoveVenue = btn => {
	btn.addEventListener('click', removeActive);
};

const initRemoveMarker = () => {
	document.querySelectorAll('.remove-venue').forEach(bindRemoveVenue);
};

export { initAddMarker, initRemoveMarker };
