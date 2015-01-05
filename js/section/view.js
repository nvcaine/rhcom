var panels = [
	{selector: 'web', heading: 'Web Applications', items: []},
	{selector: 'soft', heading: 'Software Development', items: []},
	{selector: 'game', heading: 'Games', items: []}
];

$( function() {

	var itemSlug = checkMODParam('item');

	$.get(appURL + 'assets/json/view.json', {}, function(data) {
		$.each(data, function(index, item) {
			if(item.slug == itemSlug)
				$('#view-container').html(viewItemTemplate(item));
		});
	});

	$.get(appURL + 'assets/json/projects.json', {}, function(data) {

		$.each(data, function(index, item) {

			var project = item;

			$.each(panels, function(index, panel) {

				if(project.type.toLowerCase() == panel.selector)
					panel.items.push(project);
			});
		});

		$('#accordion').html(sidebarTemplate({panels: panels}));
		/*$('#web-heading, #soft-heading, #game-heading').on('shown.bs.collapse', function(e) {
			var toggleSigns = $('#accordion').find('.toggle');
			toggleSigns.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')
			$(e.currentTarget).find('.toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
		});*/
	});
});