var slider =

'<ol class="carousel-indicators slider-indicators">' +
	'<li data-target="#myCarousel" data-slide-to="0" class="active slider-thumb"></li>' +
	'<li data-target="#myCarousel" data-slide-to="1" class="slider-thumb"></li>' +
	'<li data-target="#myCarousel" data-slide-to="2" class="slider-thumb"></li>' +
'</ol>' +

'<div class="carousel-inner" role="listbox">' +

	'{{#each slides}}' +
	'<div class="item">' +
		'<div class="carousel-caption">' +
			'<div class="container">' +
				'<div class="row">' +
					'<div class="col-md-4 col-md-offset-1 col-sm-5 image-container">' +
						'<img src="{{image}}" alt="{{alt}}" class="slider-img">' +
					'</div>' +
					'<div class="col-sm-6 col-sm-offset-1">' +
						'<br class="hidden-xs">' +
						'<h1>{{heading}}</h1>' +
						'<p>' +
							'{{{text}}}' +
						'</p>' +
						'<p>' +
							'<a class="btn btn-lg btn-primary" href="#" role="button">{{label}}</a>' +
						'</p>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>' +
	'{{/each}}' +

'</div>'/* +

'<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">' +
	'<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>' +
	'<span class="sr-only">Previous</span>' +
'</a>' +

'<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">' +
	'<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>' +
	'<span class="sr-only">Next</span>' +
'</a>'*/;

var sliderTemplate = Handlebars.compile(slider);