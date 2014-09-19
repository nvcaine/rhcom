var menu =

"<nav id=\"menu-nav\" class=\"navbar navbar-default\" role=\"navigation\">" +
	"<div class=\"container\">" +

		//Brand and toggle get grouped for better mobile display
		"<div class=\"navbar-header\">" +
			"<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#nav-menu\">" +
				"<span class=\"sr-only\">Toggle navigation</span>" +
				"<span class=\"icon-bar\"></span>" +
				"<span class=\"icon-bar\"></span>" +
				"<span class=\"icon-bar\"></span>" +
			"</button>" +
		"</div>" +

		//Collect the nav links, forms, and other content for toggling
		"<div class=\"collapse navbar-collapse\" id=\"nav-menu\">" +
			"<ul class=\"nav navbar-nav\">" +
				"{{#each options}}" +
				"<li>" +
					"<a href=\"" + appURL + "{{url}}\">{{label}}</a>" +
				"</li>" +
				"{{/each}}" +
			"</ul>" +
		"</div>" + // /.navbar-collapse
	"</div>" + // /.container-fluid
"</nav>";

var menuTemplate = Handlebars.compile(menu);