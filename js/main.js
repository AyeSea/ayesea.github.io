var $root = $('html, body');

var slideToAnchor = function() {
	$('a').click(function() {
	    var href = $(this).attr('href');
	    var offsetTop = 90;

	    $('#mobile-menu-group').hide();

	    $root.animate({scrollTop: $(href).offset().top - offsetTop}, 700, function () {
	        window.location.hash = href;
	    });
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
		$(this).next('.panel-body').slideToggle();
	});
};


$(document).ready(function() {
	slideToAnchor();
	menuToggle();
	skillsToggle();
});