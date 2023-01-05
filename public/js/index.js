const mainIndex = document.querySelector('.main-index');

document.addEventListener('scroll', () =>
	window.pageYOffset > 205
		? (mainIndex.style.position = 'relative')
		: (mainIndex.style.position = 'static')
);
