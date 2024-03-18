//nav
let maxH;
let bg = $('.w100');
const dep1 = $('.dep1');
const dep2 = $('.dep2');
dep2.each((i, e) => {
	maxH = Math.max($(e).outerHeight());
});
dep1.on({
	mouseenter: function () {
		dep2.stop().fadeIn(200);
		bg.stop().animate({ height: maxH + 80 }, 500);
	},
	mouseleave: function () {
		dep2.stop().fadeOut(200);
		bg.stop().animate({ height: 0 }, 500);
	},
});

//slide1

let swiper = new Swiper(".mySwiper", {
  pagination: {
	el: ".swiper-pagination",
	type: "fraction",
  },
  navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
  },
});

