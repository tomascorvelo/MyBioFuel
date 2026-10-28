"use strict";
const models = {
	compact: {
		kicker: 'FOR THE HANDS-ON OPERATOR',
		name: 'FC 50',
		description: 'A capable starting point for farms, workshops, and anyone ready to make use of local oil.',
		capacity: 'Up to 50 L',
		footprint: 'Tiny but mighty'
	},
	standard: {
		kicker: 'FOR A STEADY DAILY ROUTINE',
		name: 'FC 100',
		description: 'More room to process regular feedstock for an active farm, fleet, or independent operation.',
		capacity: 'Up to 100 L',
		footprint: 'Average but there is nothing average about this'
	},
	production: {
		kicker: 'FOR A GROWING OPERATION',
		name: 'FC 150',
		description: 'A higher-capacity configuration for teams planning around consistent, larger-volume inputs.',
		capacity: 'Up to 150 L',
		footprint: 'Overkill is just a mith'
	}
};

const modelOptions = document.querySelectorAll('.model-option');

modelOptions.forEach((option) => {
	option.addEventListener('click', () => {
		const model = models[option.dataset.model];

		modelOptions.forEach((item) => {
			const isSelected = item === option;
			item.classList.toggle('is-active', isSelected);
			item.setAttribute('aria-pressed', String(isSelected));
		});

		document.querySelector('#model-kicker').textContent = model.kicker;
		document.querySelector('#model-name').textContent = model.name;
		document.querySelector('#model-description').textContent = model.description;
		document.querySelector('#model-capacity').textContent = model.capacity;
		document.querySelector('#model-footprint').textContent = model.footprint;
		document.querySelector('.equipment-art').dataset.model = option.dataset.model;
	});
});

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
	const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
	menuToggle.setAttribute('aria-expanded', String(!isOpen));
	menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
	siteNav.classList.toggle('is-open', !isOpen);
});

siteNav.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		menuToggle.setAttribute('aria-expanded', 'false');
		menuToggle.setAttribute('aria-label', 'Open navigation');
		siteNav.classList.remove('is-open');
	});
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
