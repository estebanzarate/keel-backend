const mainGallery = document.querySelector('.main-gallery');

for (let i = 0; i < 33; i++) {
	mainGallery.innerHTML += `<img class='gallery-img' src='../assets/images/gallery/img${
		i + 1
	}.jpg' alt='img${i + 1}' />`;
}

document.addEventListener('click', e => {
	if (e.target.matches('.gallery-img')) {
		const galleryImgModal = document.querySelector('.gallery-modal');
		galleryImgModal.innerHTML += `
			<div class='gallery-modal-container'>
				<img class='gallery-modal-img' src='${String(e.target.src).replace(
					'https://estebanzarate.github.io/keel',
					'..'
				)}'  alt='${e.target.alt}'>
			</div>
		`;
		galleryImgModal.classList.add('img-modal-visible');
		document.body.style.overflow = 'hidden';
	}
	if (e.target.matches(['.gallery-modal-container', '.gallery-modal', '.gallery-modal-img'])) {
		document.querySelector('.gallery-modal').classList.remove('img-modal-visible');
		document.querySelector('.gallery-modal-container').remove();
		document.body.style.overflow = 'unset';
	}
});
