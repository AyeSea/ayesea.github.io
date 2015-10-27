var $root = $('html, body');
var numSlides = $(".slide").length;
var intervalID;

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

//slider buttons
var navigateToSlide = function() {
	$('.slider-button').click(function() {
			//clicking slider buttons stops the carousel loop
			window.clearInterval(intervalID);
			//hide all slides
			$(".slide").hide();
			//hide active slide. bug causes two slides to stack and display
			//when you click right before the setInterval function repeats w/o this line
			$(".slide-active").hide();

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
			slideAnimation(currentSlide, newSlide);

			//Remove the slider-button-active class from the current button and
			//move it to the new one.
			buttonAnimation(currentButton, newButton);

	});

};

var slideAnimation = function (currentSlide, newSlide) {
	currentSlide.fadeOut(500, function() {
		currentSlide.removeClass('slide-active');
		newSlide.fadeIn(500).addClass('slide-active');
	});
}

var buttonAnimation = function(currentButton, newButton) {
	currentButton.removeClass("slider-button-active");
	newButton.addClass("slider-button-active");	
}

//finds current slide, fades it out, and fades in next slide
var showNextSlide = function () {
	var currentSlide = $(".slide-active");
	var currentSlideNum = $(".slide").index(currentSlide) + 1;
	var currentButton = $(".slider-button-active");

	console.log(currentSlideNum);

	var nextButton;

	//determine if we should loop back from last slide to first
	if (currentSlideNum < numSlides) {
		//increment currentSlideNum
		currentSlideNum++;
		nextButton = $(".slider-button-active").next(".slider-button");
	} else {
		//reset currentSlideNum to 1
		currentSlideNum = 1;
		nextButton = $(".slider-button").first();
	}

	//identify next slide
	var nextSlideNum = currentSlideNum;
	var nextSlide = $(".slide" + nextSlideNum.toString());


	setTimeout(function () {
		slideAnimation(currentSlide, nextSlide);
	}, 2000);
	setTimeout(function () {
		buttonAnimation(currentButton, nextButton);
	}, 2000);
}

var autoplaySlides = function () {
	intervalID = window.setInterval(showNextSlide, 2000);
}


/* Functions to Run on Document Load */
$(document).ready(function() {
	slideToAnchor();
	menuToggle();
	skillsToggle();
	navigateToSlide();
	autoplaySlides();
});