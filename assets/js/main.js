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