var menu =

'<nav id="menu-nav" class="navbar navbar-default navbar-fixed-top" role="navigation">' +

	'<div class="container">' +
		'<div class="pull-left">' +
			'<a href="' + appURL + '">' +
				'<span id="main-heading">Romuald Halasz</span>' +
			'</a>' +
		'</div>' +

		'<div class="navbar-header pull-right">' +
			'<button id="menu-button" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav-menu">' +
				'<span class="sr-only">Toggle navigation</span>' +
				'<span class="icon-bar"></span>' +
				'<span class="icon-bar"></span>' +
				'<span class="icon-bar"></span>' +
			'</button>' +
		'</div>' +

		'<div class="clearfix visible-xs"></div>' +

		'<div id="nav-menu" class="navbar-nav navbar-collapse collapse navbar-right">' +
			'<div id="menu-spacer" class="hidden-xs"></div>' +
			'<ul class="nav navbar-nav">' +
				'{{#each options}}' +
				'<li class="menu-item">' +
					'<a href="{{url}}">' +
						'<span class="index">{{index}}.</span>&nbsp;&nbsp;{{label}}' +
					'</a>' +
				'</li>' +
				'{{/each}}' +
			'</ul>' +
		'</div>' + // /.navbar-collapse

		'<div class="clearfix"></div>' +
	'</div>' + // /.container-fluid
'</nav>';

var menuTemplate = Handlebars.compile(menu);