var $root = $('html, body');

var hideSkills = function() {
	$('.skills-heading').next('.panel-body').hide(500);
};

var slideToAnchor = function() {
	$('.section-link').click(function() {
	    var href = $(this).attr('href');
	    var offsetTop = 80;

	    $('.section-link').removeClass("active-section-link");
	    $(this).addClass("active-section-link");

	    hideSkills();

	    $('#mobile-menu-group').hide(700);

	    $root.animate({scrollTop: $(href).offset().top - offsetTop}, 700);
	     window.location.hash = href;
	    return false;
	});
};

var menuToggle = function() {
	$('.menu-icon').click(function() {
		$('#mobile-menu-group').slideToggle(500);
	});
};


var skillsToggle = function() {
	$('.skills-heading').click(function() {
		$(this).next('.panel-body').slideToggle(500);
	});
};


$(document).ready(function() {
	slideToAnchor();
	menuToggle();
	skillsToggle();
});