// ================> Show/hide menu <================
const navMenu = document.getElementById('nav-menu'),
			navToggle = document.getElementById('nav-toggle'),
			navClose = document.getElementById('nav-close');

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}


// ================> Remove menu <===================
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link => link.addEventListener('click', () => {
	navMenu.classList.remove('show-menu');
}));


// ===============> Accordion skills <===============
const skillsContent = document.getElementsByClassName('skills__content'),
			skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
	let itemClass = this.parentNode.className;

	for (let i = 0; i < skillsContent.length; i += 1) {
		skillsContent[i].className = 'skills__content skills__close';
	}

	if (itemClass === 'skills__content skills__close') {
		this.parentNode.className = 'skills__content skills__open';
	}
}

skillsHeader.forEach(el => el.addEventListener('click', toggleSkills));


// =============> Qulification tabs <================
const tabs = document.querySelectorAll('[data-target]'),
			tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target);

		tabContents.forEach(tabContent => {
			tabContent.classList.remove('qualification__active');
		});

		target.classList.add('qualification__active');

		tabs.forEach(tab => {
			tab.classList.remove('qualification__active');
		});
		tab.classList.add('qualification__active');
	});
});