Handlebars.registerHelper('each-clear', function(context, options) {

	if(context.length == 0)
		return;

	var result = options.fn(context[0], {data: context[0]});;

	for(var i = 1; i < context.length; i++) {

		if(i % 2 == 0)
			result += '<div class="clearfix visible-xs"></div>';

		if(i % 3 == 0)
			result += '<div class="clearfix visible-sm"></div>';

		if(i % 4 == 0)
			result += '<div class="clearfix visible-md"></div>';

		result += options.fn(context[i], {data: context[i]});
	}

	return result;
});