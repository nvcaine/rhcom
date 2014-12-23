var breadcrumbs =

'{{#each items}}' +
'<li>' +
	'<a href="{{url}}">{{label}}</a>' +
'</li>' +
'{{/each}}';

var breadcrumbsTemplate = Handlebars.compile(breadcrumbs);