var panels = [
	{selector: 'web', heading: 'Web Applications'},
	{selector: 'soft', heading: 'Software Development'},
	{selector: 'game', heading: 'Games'}
];

$( function() {

	var itemSlug = checkMODParam('item');

	$.get(appURL + 'assets/json/view.json', {}, function(data) {
		$.each(data, function(index, item) {
			if(item.slug == itemSlug)
				$('#view-container').html(viewItemTemplate(item));
		});
	});

	$('#accordion').html(sidebarTemplate({panels: panels}));
});