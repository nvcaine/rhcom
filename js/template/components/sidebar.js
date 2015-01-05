var sidebar =

'{{#each panels}}' +
'<div class="view-panel panel panel-default">' +
	'<div id="{{selector}}-heading" class="panel-heading" role="tab">' +
		'<div class="panel-title">' +
			'<a data-toggle="collapse" data-parent="#accordion" href="#{{selector}}-container" aria-expanded="true" aria-controls="{{selector}}-container">' +
				'<div class="pull-left">{{heading}}</div>' +
				'<div class="pull-right"><span class="glyphicon glyphicon-chevron-down toggle"></span></div>' +
				'<div class="clearfix"></div>' +
			'</a>' +
		'</div>' +
	'</div>' +

	'<div id="{{selector}}-container" class="panel-collapse collapse" role="tabpanel" aria-labelledby="{{selector}}-heading">' +
		'<div id="{{selector}}-items" class="panel-body">' +
			'{{#each items}}' +
			'<div class="project-item">' +
				'<div class="title">{{title}}</div>' +
				'<p class="description">{{description}}</p>' +
				'<div class="pull-right read-more">' +
					'<a href="' + appURL + 'view/{{slug}}/">' +
						'<span class="index">&raquo;</span> read more' +
					'</a>' +
				'</div>' +
				'<div class="clearfix"></div>' +
			'</div>' +
			'{{/each}}' +
		'</div>' +
	'</div>' +
'</div>' +
'{{/each}}';

var sidebarTemplate = Handlebars.compile(sidebar);