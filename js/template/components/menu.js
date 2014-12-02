var menu =

"<nav id=\"menu-nav\" class=\"navbar navbar-default dark-grey navbar-fixed-top\" role=\"navigation\">" +

	"<div class=\"container\">" +
		"<span id=\"main-heading\" style=\"font-family:'Arvil-sans'; line-height: 100px;\">" +
			"Romuald Halasz" +
		"</span>" +

		"<div class=\"navbar-header pull-right\">" +
			"<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#nav-menu\">" +
				"<span class=\"sr-only\">Toggle navigation</span>" +
				"<span class=\"icon-bar\"></span>" +
				"<span class=\"icon-bar\"></span>" +
				"<span class=\"icon-bar\"></span>" +
			"</button>" +
		"</div>" +

		"<div id=\"nav-menu\" class=\"collapse navbar-nav navbar-collapse navbar-right\">" +
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