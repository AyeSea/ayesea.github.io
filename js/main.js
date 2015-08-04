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

	    $('#mobile-menu-group').slideUp("slow");

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


var skillsToggle = function() {
	$('.skills-heading').click(function() {
		$(this).next('.panel-body').slideToggle("slow");
	});
};


$(document).ready(function() {
	slideToAnchor();
	menuToggle();
	skillsToggle();
});