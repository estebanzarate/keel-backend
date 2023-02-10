const nav = document.getElementById('nav');
const navUl = document.getElementById('nav-ul');
const burguerMenu = document.getElementById('burguer-menu');
const btnCloseNav = document.getElementById('btn-close-nav');

burguerMenu.addEventListener('click', () => {
	nav.classList.add('display-nav');
	navUl.classList.add('nav-ul');
	document.body.style.overflow = 'hidden';
});

btnCloseNav.addEventListener('click', () => {
	nav.classList.remove('display-nav');
	navUl.classList.remove('nav-ul');
	document.body.style.overflow = 'visible';
});

window.addEventListener('resize', () => {
	if (window.innerWidth > 600 && nav.classList.contains('display-nav')) {
		nav.classList.remove('display-nav');
		navUl.classList.remove('nav-ul');
		document.body.style.overflow = 'visible';
	}
});
