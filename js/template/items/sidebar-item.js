var sidebarItem =

"{{#each items}}" +
"<div class=\"media sidebar-item\">" +
	"<a href=\"{{url}}\" class=\"pull-left\">" +
		"<img src=\"{{image}}\" class=\"media-object\" width=\"100\">" +
	"</a>" +

	"<div class=\"media-body\">" +
		"<div class=\"media-heading title\">{{title}}</div>" +
		"<p>{{description}}</p>" +
	"</div>" +

	"<div class=\"read-more pull-right\">" +
		"<a href=\"#\"><span class=\"index\">&raquo;</span> Read More</a>" +
	"</div>" +
"</div>" +
"{{/each}}";

var sidebarItemTemplate = Handlebars.compile(sidebarItem);