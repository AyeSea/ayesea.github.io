var $root = $('html, body');

var slideToAnchor = function() {
	$('a').click(function() {
	    var href = $(this).attr('href');
	    $root.animate({
	        scrollTop: $(href).offset().top
	    }, 700, function () {
	        window.location.hash = href;
	    });
	    return false;
	});
};

var menuToggle = function() {
	$('.menu-icon').click(function() {
		$('#mobile-menu-group').slideToggle(700);
	});
};

var skillsToggle = function() {
	$('.skills-heading').click(function() {
		$(this).next('.panel-body').slideToggle(700);
	});
};


$(document).ready(function() {
	slideToAnchor();
	menuToggle();
	skillsToggle();
});