var sidebarItem =

'<div class="row">' +
'{{#each items}}' +
'<div class="media sidebar-item col-sm-4">' +
	//'<div>' +
	'<a href="{{url}}">' +
		'<img src="{{image}}" class="media-object">' +
	'</a>' +
	//'</div>' +

	'<div class="media-body">' +
		'<div class="media-heading title">{{title}}</div>' +
		'<p>{{description}}</p>' +
	'</div>' +

	'<div class="read-more">' +
		'<a href="{{url}}"><span class="index">&raquo;</span> Read More</a>' +
	'</div>' +
'</div>' +
'{{/each}}' +
'</div>';

var sidebarItemTemplate = Handlebars.compile(sidebarItem);