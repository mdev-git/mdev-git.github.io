$(document).ready(function() {

	$('.burger-menu').on('click', function() {
	  $(this).toggleClass("burger-menu--opened");
	  $(this).toggleClass("burger-menu--closed");
	  $('.menu-inner').toggleClass('menu-down');
	  $('.form-header').removeClass('form-down');
	});

	$('.callback-wrapper img').on('click', function(){	
		$(this).addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('animated tada');	
		});		
		$('.form-header').toggleClass('form-down');
		$('.burger-menu').removeClass("burger-menu--opened");
	  	$('.burger-menu').addClass("burger-menu--closed");
		$('.menu-inner').removeClass('menu-down');
	});

	$('.menu-inner a.choice-link').on('click', function(e) {
		e.preventDefault();
		var choice = $('#choice').offset().top;
		$('.burger-menu').removeClass("burger-menu--opened");
	  	$('.burger-menu').addClass("burger-menu--closed");
		$('.menu-inner').removeClass('menu-down');
		setTimeout(function(){
			$('body','html').animate({scrollTop: choice}, 500);
		}, 500);
	});

});