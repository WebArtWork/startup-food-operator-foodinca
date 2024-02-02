const nav = document.querySelector(".topbar__button");
const body = document.body;

nav.addEventListener("click", () => {
	body.classList.toggle("_lock");
});

window.addEventListener("scroll", reveal);

function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	for (var i = 0; i < reveals.length; i++) {
		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 150;

		if (revealtop < windowheight - revealpoint) {
			reveals[i].classList.add("reveal_active");
		} else {
			reveals[i].classList.remove("reveal_active");
		}
	}
}

/* --------------------------------- Sliders -------------------------------- */

const themes = new Swiper(".themes-slider", {
	// Optional parameters
	speed: 1000,
	slidesPerView: 4,
	spaceBetween: 30,
	autoplay: true,
	loop: true,
	

	autoplay: {
		disableOnInteraction: false,
		pauseOnMouseEnter: true,

		delay: 2000,
		},

	breakpoints: {
		1150: {
			slidesPerView: 4,
		},
		700: {
			slidesPerView: 3,
		},
		400: {
			slidesPerView: 2,
			spaceBetween: 20,

		},
		200: {
			slidesPerView: 1,
		},
	},

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".products-slider__button-next",
		prevEl: ".products-slider__button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

const products = new Swiper(".products-slider", {
	// Optional parameters
	speed: 1000,
	slidesPerView: 4,
	spaceBetween: 30,
	autoplay: true,
	loop: true,


	autoplay: {
		disableOnInteraction: false,
		pauseOnMouseEnter: true,

		delay: 2000,
		},

	breakpoints: {
		1150: {
			slidesPerView: 4,
		},
		700: {
			slidesPerView: 3,
		},
		200: {
			slidesPerView: 2,
			spaceBetween: 20,

		},
	},

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".products-slider__button-next",
		prevEl: ".products-slider__button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

const articles = new Swiper(".articles-slider", {
	// Optional parameters
	speed: 1000,
	slidesPerView: 1,
	spaceBetween: 20,

	// Navigation arrows
	navigation: {
		nextEl: ".articles-slider__button-next",
		prevEl: ".articles-slider__button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},

	breakpoints: {
		992: {
			slidesPerView: 3,
			allowTouchMove: false
		},

		620: {
			slidesPerView: 2,
			loop: false,
			autoplay: false
		},

		200: {
			slidesPerView: 1,
			loop: true,
			autoplay: true
		},
	},
});

const productMini = new Swiper(".product-slider-mini", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	speed: 1000,
	loop: true,
});
const product = new Swiper(".product-slider", {
	spaceBetween: 10,
	speed: 1000,
	loop: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	thumbs: {
		swiper: productMini,
	},
});

const productMore = new Swiper(".also-like-slider", {
	// Optional parameters
	speed: 1000,
	spaceBetween: 30,
	breakpoints: {

		992: {
			slidesPerView: 5,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		575: {
			slidesPerView: 3,
		},
		220: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
	},
});

/* --------------------------------- /Sliders -------------------------------- */

Fancybox.bind("[data-fancybox]", {
});

Fancybox.bind("[data-fancybox='product-gallery']", {
});
