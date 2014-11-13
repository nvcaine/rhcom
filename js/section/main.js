$( function() {

	$("header").html(headerTemplate()).prepend(menuTemplate({options: mainMenuOptions}));
	$("footer").html(footerTemplate());

	$("#sidebar").html(sidebarItemTemplate({items: sidebarItems}))
})