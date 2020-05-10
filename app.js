$(window).scroll(function() {
	const scrollPos = $(this).scrollTop()
	$('.hero-back').css({
		'background-size': 100 + scrollPos + '%'
	})
})
