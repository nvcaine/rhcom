$( function() {

	var items = {web: [], soft: [], game: []};

	$.get(appURL + 'assets/json/projects.json', {}, function(data) {
		$.each(data, function(index, item) {
			items[item.type.toLowerCase()].push(item);
		});

		$('#web-container').html(projectsTemplate({items: items.web}));
		$('#soft-container').html(projectsTemplate({items: items.soft}));
		$('#game-container').html(projectsTemplate({items: items.game}));
	});
});