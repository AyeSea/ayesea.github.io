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
	menuToggle();
	skillsToggle();
});


