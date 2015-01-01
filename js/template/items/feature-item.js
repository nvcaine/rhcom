var featureItem =

'{{#each features}}' +
'<div class="row feature-item">' +
	'<div class="visible-xs col-sm-5">' +
		'<img src="{{imgURL}}" alt="">' +
	'</div>' +

	'<div class="col-sm-7">' +
		'<div class="title">{{title}}</div>' +

		'{{#each paragraphs}}' +
		'<p>' +
			'{{{text}}}' +
		'</p>' +
		'{{/each}}' +

		'<div class="pull-right read-more">' +
			'<a href="#"><span class="index">&raquo;</span> Read More</a>' +
		'</div>' +
	'</div>' +

	'<div class="col-sm-4 col-sm-offset-1 hidden-xs">' +
		'<img src="{{imgURL}}" alt="">' +
	'</div>' +

	'<div class="clearfix"></div>' +
'</div>' +
'{{/each}}';

var featureItemTemplate = Handlebars.compile(featureItem);
