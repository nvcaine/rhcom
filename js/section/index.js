var sliderData = [
	{
		alt: 'Web',
		image: appURL + 'assets/images/web.png',
		heading: 'Web Applications',
		text: 'Websites and HTML/JS apps that run in the browser.',
		label: 'See more',
		color: 'rgba(241, 103, 69, 0.75)'//'#F16745'
	}, {
		alt: 'Software',
		image: appURL + 'assets/images/soft.png',
		heading: 'Software Development',
		text: 'When the line between classic Software Development and Web Apps is fading&hellip;',
		label: 'See more',
		color: 'rgba(123, 200, 164, 0.75)'//'#7BC8A4',
	}, {
		alt: 'Games',
		image: appURL + 'assets/images/games.png',
		heading: 'Games',
		text: 'While being fun to make and to play, games are their own niche.',
		label: 'See more',
		color: 'rgba(76, 195, 217, 0.75)' //'rgba()'//'#4CC3D9'
	}
];

var features = [
	{
		imgURL: 'https://developers.google.com/tv/web/images/hybrid_web_app_main_ui.png',
		title: 'Anca\'s website v2',
		paragraphs: [
			{text: 'Quisque neque tellus, convallis et tempus et, vulputate at nisi. Donec risus purus, egestas et mauris et, efficitur luctus dolor. Maecenas aliquet lorem risus, nec rutrum metus efficitur varius.'},
			{text: 'Praesent a lorem magna. Duis quam ante, elementum non ipsum in, dignissim luctus ante. Duis tristique facilisis lectus eget hendrerit.'},
		]
	}
];

$( function() {

	$('#myCarousel').html(sliderTemplate({slides: sliderData}));

	$('.carousel-inner .item').first().addClass('active');

	$('#feature').append(featureItemTemplate({features: features}));
});