$(document).ready( function() {
	$('.works__btns button, .works__btns a').on('focus', function(e) {
		$(this).parents('works-item').addClass('.works-item--active');
	});

	$('.works__btns button, .works__btns a').on('blur', function(e) {
		$(this).parents('works-item').removeClass('.works-item--active');
	});
});

