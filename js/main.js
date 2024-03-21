//nav
$(()=>{
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

//햄버거메뉴 열기 / 닫기 
const ham = $('.hamberger');
const btnX = $('.btn_x');
ham.on('click',function (){
	$('.ham_nav').addClass('on');
})
btnX.on('click',function (){
	$('.ham_nav').removeClass('on');
})

})
//배너 스와이퍼
$(()=>{let swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
	  el: ".swiper-pagination",
	  type: "fraction",
	  clickable: true,
	  formatFractionCurrent: function (number) {
		return ('0' + number).slice(-2);
	},
	formatFractionTotal: function (number) {
		return ('0' + number).slice(-2);
	},
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
let Myswiper = new Swiper(".MySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
 
	
	
});


//스와이퍼 슬라이드 재생멈춤버튼

$('.popupzone .swiper-pause').on('click',function () {
		$('.popupzone .swiper-pause').addClass('btnon');
		$('.popupzone .swiper-play').addClass('btnon');
		swiper.autoplay.stop();

});
$('.popupzone .swiper-play').on('click',function () {
	$('.popupzone .swiper-play').removeClass('btnon');
	$('.popupzone .swiper-pause').removeClass('btnon');
	swiper.autoplay.start();
});
//배너 스와이프
$('.bottom .swiper-pause').on('click',function () {
	$('.bottom .swiper-pause').addClass('btnon');
	$('.bottom .swiper-play').addClass('btnon');
	Myswiper.autoplay.stop();

});
$('.bottom .swiper-play').on('click',function () {
$('.bottom .swiper-play').removeClass('btnon');
$('.bottom .swiper-pause').removeClass('btnon');
Myswiper.autoplay.start();
});

})


//스크롤 애니메이션
$(document).ready(function() {
    const counters = $(".scroll_on");
    const exposurePercentage = 50;
    const loop = true;

    // 윈도우의 스크롤 모니터링
    $(window).on('scroll', function() {
        counters.each(function() {
            const el = $(this);
            const rect = el[0].getBoundingClientRect();
            const winHeight = window.innerHeight;
            const contentHeight = rect.bottom - rect.top;
            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                el.addClass('type_bottom');
            }
            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                el.removeClass('type_bottom');
            }
        });
    }).scroll();
});

//푸터 관련사이트 클릭
const site = $('.site')
site.on('click',function () {
	$('.site_inner').addClass('up')
	$('.site_inner').css('transform','translateY(-102px)');
	$('.fa-chevron-down').css('display','block');
	$('.fa-chevron-up').css('display','none')
})
