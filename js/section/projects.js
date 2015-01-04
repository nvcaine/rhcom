var projects = [
	{
		title: 'Simple Client Demo',
		description: 'Client application demo, build using my custom light-weight PHP framework.',
		image: 'http://romualdhalasz.com/new/img/prj/code2.png',
		type: 'WEB',
	},{
		title: 'JSON Server Demo',
		description: 'A lighter version of the framework can be used to implement server applications.',
		image: 'http://romualdhalasz.com/new/img/prj/code.png',
		type: 'WEB',
	},{
		title: 'Anca Cernoschi Photography',
		description: 'Photography portfolio.',
		image: 'http://romualdhalasz.com/new/img/prj/anca.jpg',
		type: 'WEB',
	},{
		title: 'Anca Cernoschi Photography 2',
		description: 'Updated version of previous website.',
		image: 'http://romualdhalasz.com/new/img/prj/anca2.png',
		type: 'WEB',
	},{
		title: 'Lion Wing Tsun Club',
		description: 'A project aimed at redesigning a Martial Arts Club\'s webpage.',
		image: 'http://romualdhalasz.com/new/img/prj/logowt.png',
		type: 'WEB',
	}, {
		title: 'Conway\'s Game of Life',
		description: 'A Flex implementation of the popular game.',
		image: 'http://romualdhalasz.com/new/img/prj/conway.png',
		type: 'GAME',
	}, {
		title: 'Mastermind',
		description: 'A puzzle game, implemented in Flex.',
		image: 'http://romualdhalasz.com/new/img/prj/mind.png',
		type: 'GAME',
	}, {
		title: 'Lazy Monkeys App',
		description: 'A Flash app, designed to be a website widget.',
		image: 'http://romualdhalasz.com/new/img/prj/maps2.jpg',
		type: 'SOFT',
	}, {
		title: 'Lazy Monkeys App v2',
		description: 'Reimplementation of the map app.',
		image: 'http://romualdhalasz.com/new/img/prj/maps2.jpg',
		type: 'SOFT',
	}, {
		title: 'Anca Cernoschi Photography Flash',
		description: 'Flash portfolio application.',
		image: 'http://romualdhalasz.com/new/img/prj/anca3.jpg',
		type: 'SOFT',
	}
];


$( function() {

	var items = {web: [], soft: [], game: []};
	
	$.each(projects, function(index, item) {
		items[item.type.toLowerCase()].push(item);
	});

	$('#web-container').html(projectsTemplate({items: items.web}));
	$('#soft-container').html(projectsTemplate({items: items.soft}));
	$('#game-container').html(projectsTemplate({items: items.game}));
});