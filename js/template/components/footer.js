var footer =

'<div class=\'container\'>' +
	'<div class=\'row\'>' +
		'<div class="pull-left social">' +
			'<a href="https://www.facebook.com/romuald.halasz" target="_blank" title="Facebook">' +
				'<img src="' + appURL + 'assets/images/fb.png" alt="">' +
			'</a>' +
			'<a href="https://twitter.com/romihalasz" target="_blank" title="Twitter">' +
				'<img src="' + appURL + 'assets/images/tw.png" alt="">' +
			'</a>' +
			'<a href="http://ro.linkedin.com/pub/romuald-halasz/18/611/754/" target="_blank" title="LinkedIn">' +
				'<img src="' + appURL + 'assets/images/in.png" alt="">' +
			'</a>' +
			'<a href="https://plus.google.com/106906391704470703341" target="_blank" title="Google+">' +
				'<img src="' + appURL + 'assets/images/gp.png" alt="">' +
			'</a>' +
		'</div>' +
		'<div class="pull-right">&copy;Romuald Halasz 2014</div>' +
		'<div class="clear"></div>' +
	'</div>' +
'</div>';

var footerTemplate = Handlebars.compile(footer);