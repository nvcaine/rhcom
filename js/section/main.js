$( function() {
	//$("header").html(headerTemplate());
	//$("header").append();
	$("header").html(headerTemplate()).prepend(menuTemplate({options: mainMenuOptions}));
	//$("#main-menu").append(menuTemplate({options: mainMenuOptions}));
	$("footer").html(footerTemplate());

	$("#sidebar").html(sidebarItemTemplate({items: sidebarItems}))
})