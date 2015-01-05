function checkGETParam(name) {

	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');

	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	var results = regex.exec(location.search);

	return results == null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function checkMODParam(name) {

	var segments = location.href.split('/');

	for(var i = segments.length - 1; i >= 0; i--)
		if(segments[i].length > 0)
			return segments[i];

	return '';
}