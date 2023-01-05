const mainAbout = document.querySelector('.main-about');
const about = document.querySelector('.about');
document.addEventListener('scroll', () =>
	window.pageYOffset > 40
		? ((mainAbout.style.position = 'relative'), (about.style.opacity = '0.8'))
		: ((mainAbout.style.position = 'static'), (about.style.opacity = '1'))
);
