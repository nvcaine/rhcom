var menu =

"<nav id=\"menu-nav\" class=\"navbar navbar-default\" role=\"navigation\">" +

	"<div class=\"container\">" +
		"<div class=\"navbar-header\">" +
			"<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#nav-menu\">" +
				"<span class=\"sr-only\">Toggle navigation</span>" +
				"<span class=\"icon-bar\"></span>" +
				"<span class=\"icon-bar\"></span>" +
				"<span class=\"icon-bar\"></span>" +
			"</button>" +
		"</div>" +

		"<div class=\"collapse navbar-collapse\" id=\"nav-menu\">" +
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
	"</div>" + // /.container-fluid
"</nav>";

var menuTemplate = Handlebars.compile(menu);