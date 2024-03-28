// popup
$('.popup>span').on('click', function () {
	$('.popup').css('display', 'none');
});

//gnb 스티키메뉴
$(document).ready(function () {
	let gndFiexd = $('.gnb_area').offset();
	$(window).scroll(function () {
		if ($(document).scrollTop() > gndFiexd.top) {
			$('.gnb_area').addClass('fixed');
			$('.logo1').addClass('fixed');
		} else {
			$('.gnb_area').removeClass('fixed');
			$('.logo1').removeClass('fixed');
		}
	});
});
//반응형 gnb 햄버거메뉴
$('.top_nav > .fa-bars').on('click', function () {
	$('.sm_ham_btn').addClass('left');
	$('.back').addClass('in');
});
$('.sm_ham_top .fa-xmark').on('click', function () {
	$('.sm_ham_btn').removeClass('left');
	$('.back').removeClass('in');
});

const smDep2 = $('.sm_ham_btn .dep2');
smDep2.hide();
$('.sm_ham_btn .dep1').on('click', function (e) {
	e.preventDefault();
	let tg = $(this);
	tg.find('.dep2').slideToggle(500);
});

//nav
$(() => {
	let maxH;
	let bg = $('.gnb_area .w100');
	const dep1 = $('.gnb_area .dep1');
	const dep2 = $('.gnb_area .dep2');
	dep2.each((i, e) => {
		maxH = Math.max($(e).outerHeight());
	});
	dep1.on({
		mouseenter: function () {
			dep2.stop().delay(200).fadeIn(0);
			bg.stop().animate({ height: maxH + 100 }, 300);
			$('.gnb_area').css('border-bottom', '1px solid transparent');
			bg.addClass('on');
		},
		mouseleave: function () {
			dep2.stop().fadeOut(0);
			bg.stop().animate({ height: 0 }, 0);
			$('.gnb_area').css('border-bottom', '1px solid #e8e8e8');
		},
	});

	//햄버거메뉴 열기 / 닫기
	const ham = $('.hamberger');
	const btnX = $('.btn_x');
	ham.on('click', function () {
		$('.ham_nav').addClass('btn');
	});
	btnX.on('click', function () {
		$('.ham_nav').removeClass('btn');
	});
});
//배너 스와이퍼
$(() => {
	let swiper = new Swiper('.mySwiper', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
			clickable: true,
			formatFractionCurrent: function (number) {
				return ('0' + number).slice(-2);
			},
			formatFractionTotal: function (number) {
				return ('0' + number).slice(-2);
			},
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span>' + ' ㅡ ' + '<span class="' + totalClass + '"></span>';
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});
	let Myswiper = new Swiper('.MySwiper', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});

	//스와이퍼 슬라이드 재생멈춤버튼

	$('.popupzone .swiper-pause').on('click', function () {
		$('.popupzone .swiper-pause').addClass('btnon');
		$('.popupzone .swiper-play').addClass('btnon');
		swiper.autoplay.stop();
	});
	$('.popupzone .swiper-play').on('click', function () {
		$('.popupzone .swiper-play').removeClass('btnon');
		$('.popupzone .swiper-pause').removeClass('btnon');
		swiper.autoplay.start();
	});
	//배너 스와이프
	$('.bottom .swiper-pause').on('click', function () {
		$('.bottom .swiper-pause').addClass('btnon');
		$('.bottom .swiper-play').addClass('btnon');
		Myswiper.autoplay.stop();
	});
	$('.bottom .swiper-play').on('click', function () {
		$('.bottom .swiper-play').removeClass('btnon');
		$('.bottom .swiper-pause').removeClass('btnon');
		Myswiper.autoplay.start();
	});
});

//스크롤 애니메이션

const counters = $('.scroll_on');
const exposurePercentage = 50;
let loop = true;
const win = $(window);
// 윈도우의 스크롤 모니터링
win.on('scroll', function () {
	const winST = win.scrollTop();
	counters.each(function () {
		const el = $(this);
		const rectT = el.offset().top - 1000;
		if (rectT < winST) {
			el.addClass('type_bottom');
			loop = false;
		}
	});
});

$(document).ready(function () {
	$('.site > a').on('click', function (event) {
		event.preventDefault();
		$('.site > ul').stop().slideToggle();
		$('.site').stop().toggleClass('up');
		// 아이콘 상태 토글
		if ($('.fa-chevron-up').is(':visible')) {
			$('.fa-chevron-up').hide();
			$('.fa-chevron-down').show();
		} else {
			$('.fa-chevron-up').show();
			$('.fa-chevron-down').hide();
		}
	});
	$(document).on('click', function (event) {
		if (!$(event.target).closest('.site').length) {
			$('.site > ul').stop().slideUp();
			$('.fa-chevron-up').show();
			$('.fa-chevron-down').hide();
		}
	});
});
