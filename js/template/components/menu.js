var menu =

"<nav id=\"menu-nav\" class=\"navbar navbar-default\" role=\"navigation\">" +

	"<div class=\"container\">" +
		"<div class=\"pull-left\">" +
			"<span id=\"main-heading\" style=\"font-family:'Arvil-sans';line-height: 100px;\">" +
				"Romuald Halasz" +
			"</span>" +
		"</div>" +

		"<div class=\"navbar-header pull-right\">" +
			"<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#nav-menu\">" +
				"<span class=\"sr-only\">Toggle navigation</span>" +
				"<span class=\"icon-bar\"></span>" +
				"<span class=\"icon-bar\"></span>" +
				"<span class=\"icon-bar\"></span>" +
			"</button>" +
		"</div>" +

		"<div class=\"clearfix visible-xs\"></div>" +

		"<div id=\"nav-menu\" class=\"navbar-nav navbar-collapse collapse navbar-right\">" +
			"<div style=\"height: 25px;\" class=\"hidden-xs\"></div>" +
			"<ul class=\"nav navbar-nav\">" +
				"{{#each options}}" +
				"<li class=\"menu-item\">" +
					"<a href=\"{{url}}\">" +
						"<span class=\"index\">{{index}}.</span>&nbsp;&nbsp;{{label}}" +
					"</a>" +
				"</li>" +
				"{{/each}}" +
			"</ul>" +
		"</div>" + // /.navbar-collapse

		"<div class=\"clearfix\"></div>" +
	"</div>" + // /.container-fluid
"</nav>";

var menuTemplate = Handlebars.compile(menu);