var sidebar =

'{{#each panels}}' +
'<div class="panel panel-default">' +
	'<div id="{{selector}}-heading" class="panel-heading" role="tab">' +
		'<h4 class="panel-title">' +
			'<a data-toggle="collapse" data-parent="#accordion" href="#{{selector}}-panel" aria-expanded="true" aria-controls="{{selector}}-panel">' +
				'{{heading}}' +
			'</a>' +
		'</h4>' +
	'</div>' +

	'<div id="{{selector}}-panel" class="panel-collapse collapse" role="tabpanel" aria-labelledby="{{selector}}-heading">' +
		'<div id="{{selector}}-items" class="panel-body"></div>' +
	'</div>' +
'</div>' +
'{{/each}}';

var sidebarTemplate = Handlebars.compile(sidebar);