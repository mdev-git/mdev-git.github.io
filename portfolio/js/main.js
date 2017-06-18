$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['main', 'skills', 'development', 'portfolio', 'feedback'],
		navigation: false,
		navigationPosition: 'left',
		navigationTooltips: ['Главная', 'Навыки', 'Разработка', 'Портфолио', 'Обратная связь'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: true,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});
$(document).on('scroll mousemove wheel mousewheel', function(event){
	$(function(){
		if ($('body').is('.fp-viewing-skills')) {
			$('.burger-menu .bar').css('background-color', 'black');
			$('.logo svg path').css('fill', '#000').css('stroke-opacity','0');
			$('.logo span.line-1').css('background', '#fff');
			$('.logo span.line-2').css('background', '#fff');
			$('.logo span.line-3').css('background', '#fff');
			$('.logo span.line-4').css('background', '#fff');
		}
		else{
			$('.burger-menu .bar').css('background-color', 'white');
			$('.logo svg path').css('fill', '#fff').css('stroke-opacity','0');
			$('.logo span.line-1').css('background', '#000');
			$('.logo span.line-2').css('background', '#000');
			$('.logo span.line-3').css('background', '#000');
			$('.logo span.line-4').css('background', '#000');
		}
	});
});
$('.burger-menu').on('click', function() {
  $(this).toggleClass("burger-menu--opened");
  $(this).toggleClass("burger-menu--closed");
});
$(document).ready(function(){
	$('#fullpage').fadeOut();
	$('.glitch').fadeOut();
	$('.preload-viewbox').fadeOut();
	$('.glitch-span').fadeOut();
	setTimeout(function(){
		$('.preload-viewbox').fadeIn(1000);		
	},500);
	setTimeout(function(){
		$('.glitch').fadeIn();
		$('.glitch-span').fadeIn(500);	
	}, 4400);
	setTimeout(function(){
		$('.preload-viewbox').addClass('animated zoomOut').fadeOut(1000);
		$('#preloader').fadeOut(200);
		$('#fullpage').fadeIn(1);
	}, 7000);
});
$('.logo').hover(
function(){
	$('span.line-1').addClass('l-1');
	$('span.line-2').addClass('l-2');
	$('span.line-3').addClass('l-3');
	$('span.line-4').addClass('l-4');
},
function(){
	$('span.line-1').removeClass('l-1');
	$('span.line-2').removeClass('l-2');
	$('span.line-3').removeClass('l-3');
	$('span.line-4').removeClass('l-4');
});


