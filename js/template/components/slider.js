var slider =

"<ol class=\"carousel-indicators slider-indicators\">" +
	"<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active slider-thumb\"></li>" +
	"<li data-target=\"#myCarousel\" data-slide-to=\"1\" class=\"slider-thumb\"></li>" +
	"<li data-target=\"#myCarousel\" data-slide-to=\"2\" class=\"slider-thumb\"></li>" +
"</ol>" +

"<div class=\"carousel-inner\" role=\"listbox\">" +

	"<div class=\"item active\">" +
		"<div class=\"carousel-caption\">" +
			"<div class=\"container\">" +
				"<div class=\"row\">" +
					"<div class=\"col-sm-4 col-sm-offset-1\">" +
						"<img src=\"https://developers.google.com/tv/web/images/hybrid_web_app_main_ui.png\" alt=\"\" class=\"slider-img\">" +
					"</div>" +
					"<div class=\"col-sm-6 col-sm-offset-1\">" +
						"<h1>Web Applications</h1>" +
						"<p>" +
							"Websites and HTML/JS apps that run in the browser." +
						"</p>" +
						"<p>" +
							"<a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">See more</a>" +
						"</p>" +
					"</div>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>" +

	"<div class=\"item\">" +
		"<div class=\"carousel-caption\">" +
			"<div class=\"container\">" +
				"<div class=\"row\">" +
					"<div class=\"col-sm-4 col-sm-offset-1\">" +
						"<img src=\"https://developers.google.com/tv/web/images/hybrid_web_app_main_ui.png\" alt=\"\" class=\"slider-img\">" +
					"</div>" +
					"<div class=\"col-sm-6 col-sm-offset-1\">" +
						"<h1>Software Development</h1>" +
						"<p>" +
							"When the line between classic Software Development and Web Apps is fading..." +
						"</p>" +
						"<p>" +
							"<a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">See more</a>" +
						"</p>" +
					"</div>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>" +

	"<div class=\"item\">" +
		"<div class=\"carousel-caption\">" +
			"<div class=\"container\">" +
				"<div class=\"row\">" +
					"<div class=\"col-sm-4 col-sm-offset-1\">" +
						"<img src=\"https://developers.google.com/tv/web/images/hybrid_web_app_main_ui.png\" alt=\"\" class=\"slider-img\">" +
					"</div>" +
					"<div class=\"col-sm-6 col-sm-offset-1\">" +
						"<h1>Games</h1>" +
						"<p>" +
							"While being fun to make and to play, games are their own niche." +
						"</p>" +
						"<p>" +
							"<a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">See more</a>" +
						"</p>" +
					"</div>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>" +
"</div>"/* +

"<a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">" +
	"<span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>" +
	"<span class=\"sr-only\">Previous</span>" +
"</a>" +

"<a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">" +
	"<span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>" +
	"<span class=\"sr-only\">Next</span>" +
"</a>"*/;

var sliderTemplate = Handlebars.compile(slider);