var menuToggle = function() {
	$('.menu-icon').click(function() {
		//$('#mobile-menu-group').slideToggle('fast');
		$('#mobile-menu-group').slideToggle();
	});
};

$(document).ready(function() {
	menuToggle();
});