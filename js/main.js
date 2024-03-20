const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
	body.classList.toggle('dark-mode');
});

$(document).ready(function () {
	$('[data-fancybox="gallery"]').fancybox({
		loop: true,
		buttons: ['slideShow', 'thumbs', 'close'],
	});
});

$(document).ready(function () {
	$('.product-gallery').each(function () {
		$(this)
			.find('a')
			.attr('data-fancybox', 'catalog')
			.fancybox({
				loop: true,
				buttons: ['slideShow', 'fullScreen', 'thumbs', 'close'],
			});
	});
});
