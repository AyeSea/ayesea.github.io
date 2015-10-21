var $root = $('html, body');

var hideSkills = function() {
	$('.skills-heading').next('.panel-body').slideUp("slow");
};

var slideToAnchor = function() {
	$('.section-link').click(function(event) {
			event.preventDefault();
	    var href = $(this).attr('href');
	    var offsetTop = 80;

	    $('.section-link').removeClass("active-section-link");
	    $(this).addClass("active-section-link");

	    hideSkills();

	    $('#mobile-menu-group').hide("slow");

	    $root.animate({scrollTop: $(href).offset().top - offsetTop}, "slow");
	     window.location.hash = href;
	    return false;
	});
};

var menuToggle = function() {
	$('.menu-icon').click(function() {
		$('#mobile-menu-group').slideToggle();
	});

};

var menuHide = function() {
	//mobile menu should slideUp when screen width is >= 768px
}


var skillsToggle = function() {
	$('.skills-heading').click(function() {
		$(this).next('.panel-body').slideToggle("slow");
	});
};

/* Carousel Functions */
var navigateToSlide = function() {
	$('.slider-button').click(function() {
			var newButton = $(this);
			var currentSlide = $(".slide-active");			
			var currentButton = $(".slider-button-active");
	
			//Each slide has a specific class denoting its position in the slider.
			//Find the index value of the slider button that was pressed and add 1
			//to determine the number of the button and slide.
			//Add this value to the ".slide" string to determine the matching slide class.
			var matchingSlideClass = ".slide" + String( $(".slider-button").index(newButton) + 1 );


			//Determine slide to go to
			var newSlide = $(".slide").filter(matchingSlideClass);

			//Fade current slide out and new side in. Add/remove active-slide class.
			currentSlide.fadeOut(500, function() {
				currentSlide.removeClass('slide-active');
				newSlide.fadeIn(500).addClass('slide-active');
			});

			//Remove the slider-button-active class from the current button and
			//move it to the new one.
			currentButton.removeClass("slider-button-active");
			newButton.addClass("slider-button-active");
	});

};


/* Functions to Run on Document Load */
$(document).ready(function() {
	slideToAnchor();
	menuToggle();
	skillsToggle();
	navigateToSlide();
});