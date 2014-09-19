var sidebarItem =

"{{#each items}}" +
"<div class=\"media\">" +
	"<a href=\"{{url}}\" class=\"pull-left\">" +
		"<img src=\"{{image}}\" class=\"media-object\" width=\"40\">" +
	"</a>" +
	"<div class=\"media-body\">" +
		"<h4 class=\"media-heading\">{{title}}</h4>" +
		"<p>{{description}}</p>" +
	"</div>" +

	"<div class=\"pull-right\">" +
		"<a href=\"#\">&raquo; Read More</a>" +
	"</div>" +
"</div>" +
"{{/each}}";

var sidebarItemTemplate = Handlebars.compile(sidebarItem);