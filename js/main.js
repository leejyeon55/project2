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
		$('.gnb_area').css('border','none');
		bg.addClass('on')
	},
	mouseleave: function () {
		dep2.stop().fadeOut(200);
		bg.stop().animate({ height: 0 }, 500);
		$('.gnb_area').css('border-bottom','1px solid #e8e8e8');
	},
});

//스와이퍼1
let swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
	  el: ".swiper-pagination",
	  type: "fraction",
	  clickable: true,
	  renderFraction: function (currentClass, totalClass) {
		return '<span class="' + currentClass + '"></span>' +
			' ㅡ ' + 
			   '<span class="' + totalClass + '"></span>';
	  }
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

//햄버거메뉴 열기 / 닫기 
const ham = $('.hamberger');
const btnX = $('.btn_x');
ham.on('click',function (){
	$('.ham_nav').addClass('on');
})
btnX.on('click',function (){
	$('.ham_nav').removeClass('on');
})
