var projects =

'{{#each-clear items}}' +
'<div class="col-xs-6 col-sm-4 col-md-3 project-item">' +
	'<div class="image">' +
		'<img src="{{image}}">' +
	'</div>' +

	'<div class="info">' +
		'<div class="title">{{title}}</div>' +

		'<p class="description">{{description}}</p>' +

		'<div class="pull-right read-more">' +
			'<a href="#"><span class="index">&raquo;</span> read more</a>' +
		'</div>' +

		'<div class="clear"></div>' +
	'</div>' +
'</div>' +
'{{/each-clear}}';

var projectsTemplate = Handlebars.compile(projects);