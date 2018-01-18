$(document).ready(function(){
			
	$(document).on('click', '.planets__point', function() {
		var $set = $('.planets__point');
		
		if ($(this).hasClass('focus') == false) {
			$('.planets__point').removeClass('focus');
			$(this).addClass('focus');
			$('.planets').removeClass('slide-odd');
			$('.planets').removeClass('slide-even');
			
			var n = $('.planets__point').index(this) + 1; 
			if ( n & 1 ) {
				$('.planets').addClass('slide-odd');
			} else {
				$('.planets').addClass('slide-even');
			}
		} else {
			$('.planets__point').removeClass('focus');
			$('.planets').removeClass('slide-odd');
			$('.planets').removeClass('slide-even');
		}
	});
	$(document).on('click', function(event) {
		if( $(event.target).closest(".planets__point").length ) 
			return;
		$(".planets__point").removeClass('focus');
		$('.planets').removeClass('slide-odd');
		$('.planets').removeClass('slide-even');
		event.stopPropagation();
	});
	
	
	if ($(document).scrollTop() > 5) {
		$(".header").addClass(' header--slide');
	}
	
	
	if ($(window).width() > 1280) {
		$('.header').removeClass('active');
	}

	
	$(document).on('click', '.mobile-menu-btn', function(e) {
		e.preventDefault();
		if ($(window).width() <= 1280) {
			if ($('.header').hasClass('active') == true) {
				$('.header').removeClass('active');
			} else {
				$('.header').addClass(' active');
			}
		}
	});
	$(document).on('click', function(event) {
		if( $(event.target).closest(".menu, .mobile-menu-btn").length ) 
			return;
		$(".header").removeClass('active');
		event.stopPropagation();
	});
});

$(window).on('resize', function () {
	if ($(window).width() > 1280) {
		$('.header').removeClass('active');
	}
});

$(window).on('scroll', function () {
	if ($(document).scrollTop() > 5) {
		$(".header").addClass(' header--slide');
	} else {
		$(".header").removeClass(' header--slide');
	}
});
