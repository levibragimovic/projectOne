document.addEventListener("DOMContentLoaded", function () {

	$(document).ready(function () {
		$("#carousel1").owlCarousel({
			items: 1,
			loop: true,
			smartSpeed: 700,
			dots: true,
			dotsEach: true,
			responsiveClass: true,
		});
	});

	var menu = document.querySelector('#hamburger'),
		navPanel = document.querySelector('.header-nav-position');

	menu.addEventListener('click', function (event) {
		menu.classList.toggle('is-active');
		navPanel.classList.toggle('display--active');

		if (menu.classList.contains('is-active')) {
			navPanel.style.top = '0';
			document.body.style.overflow = 'hidden';
		} else {
			navPanel.style.top = '';
			document.body.style.overflow = '';
		}

	});

	$(document).ready(function () {
		$("#carousel2").owlCarousel({
			items: 1,
			loop: true,
			smartSpeed: 700,
			dots: true,
			dotsEach: true,
			responsiveClass: true,
		});
	});


	var btn = document.querySelector('.button'),
		btnBlock = document.querySelector('.video-btn'),
		video = document.querySelector('.video-activ');

	function play() {
		btn.classList.toggle('pause');
		if (btn.classList.contains('pause')) {
			video.play();
			video.setAttribute('controls', true);
			// btnBlock.style.display = 'none';
		}
		if (!btn.classList.contains('pause')) {
			video.pause();
			video.removeAttribute('controls');
		}
	}

	btnBlock.addEventListener('click', play);

	var videoActive = document.querySelector('.video-greeting');
	videoActive.onmouseover = function() {
		btnBlock.classList.remove('video-btn-invisible');
	};

	videoActive.onmouseleave = function() {
		btnBlock.classList.add('video-btn-invisible');
	};


	var media768 = window.matchMedia("(max-width: 768px)");
	function media(val) {
		if (document.documentElement.clientWidth <= 768) {
			video.setAttribute('controls', true);
		} 
	}
	media(media768);

});