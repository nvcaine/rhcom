var works =

"{{#each items}}" +
"<div class=\"col-sm-3 col-xs-6\" style=\"text-align: center;\">" +
	"<img src=\"{{img}}\" style=\"width:100%; max-height: 100px;\">" +
	"{{label}}" +
"</div>" +
"{{/each}}";

var worksTemplate = Handlebars.compile(works);