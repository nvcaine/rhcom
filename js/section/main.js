$( function() {

	$('header').prepend(menuTemplate({options: mainMenuOptions}));
	$('footer').html(footerTemplate());

	$(window).scroll( function() {
		if($(window).scrollTop() > 100) {
			$('#menu-nav').addClass('narrow');
		} else {
			$('#menu-nav').removeClass('narrow');
		}
	});
});