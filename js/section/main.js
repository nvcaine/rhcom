$( function() {

	$('header').prepend(menuTemplate({options: mainMenuOptions}));
	$('footer').html(footerTemplate());

	$('#sidebar').html(sidebarItemTemplate({items: sidebarItems}));

	$(window).scroll( function() {
		if($(window).scrollTop() > 100) {
			$('#menu-nav').addClass('narrow');
		} else {
			$('#menu-nav').removeClass('narrow');
		}
	});
})