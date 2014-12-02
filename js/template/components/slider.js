var slider =

"<ol class=\"carousel-indicators\">" +
	"<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>" +
	"<li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>" +
	"<li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>" +
"</ol>" +

"<div class=\"carousel-inner\" role=\"listbox\">" +
	"<div class=\"item active\">" +
		"<div class=\"container\">" +
			"<div class=\"carousel-caption\">" +
				"<h1>Web applications</h1>" +
				"<p>" +
					"Websites and HTML apps that run in the browser." +
				"</p>" +
				"<p>" +
					"<a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">See more</a>" +
				"</p>" +
			"</div>" +
		"</div>" +
	"</div>" +

	"<div class=\"item\">" +
		"<div class=\"container\">" +
			"<div class=\"carousel-caption\">" +
				"<h1>Software development</h1>" +
				"<p>" +
					"Websites and HTML apps that run in the browser." +
				"</p>" +
				"<p>" +
					"<a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">See more</a>" +
				"</p>" +
			"</div>" +
		"</div>" +
	"</div>" +

	"<div class=\"item\">" +
		"<div class=\"container\">" +
			"<div class=\"carousel-caption\">" +
				"<h1>Games</h1>" +
				"<p>" +
					"Websites and HTML apps that run in the browser." +
				"</p>" +
				"<p>" +
					"<a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">See more</a>" +
				"</p>" +
			"</div>" +
		"</div>" +
	"</div>" +
"</div>" +

"<a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">" +
	"<span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>" +
	"<span class=\"sr-only\">Previous</span>" +
"</a>" +

"<a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">" +
	"<span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>" +
	"<span class=\"sr-only\">Next</span>" +
"</a>";

var sliderTemplate = Handlebars.compile(slider);