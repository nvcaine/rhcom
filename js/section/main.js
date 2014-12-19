$( function() {

	$("header").prepend(menuTemplate({options: mainMenuOptions}));
	$("footer").html(footerTemplate());

	$("#sidebar").html(sidebarItemTemplate({items: sidebarItems}))
})