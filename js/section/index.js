var sliderData = [
	{
		alt: 'Web',
		image: appURL + 'assets/images/web.png',
		heading: 'Web Applications',
		text: 'Websites and HTML/JS apps that run in the browser.',
		label: 'See more',
		btn_class: 'warning',
		color: 'rgba(241, 103, 69, 0.75)'//'#F16745'
	}, {
		alt: 'Software',
		image: appURL + 'assets/images/soft.png',
		heading: 'Software Development',
		text: 'When the line between classic Software Development and Web Apps is fading&hellip;',
		label: 'See more',
		btn_class: 'success',
		color: 'rgba(123, 200, 164, 0.75)'//'#7BC8A4',
	}, {
		alt: 'Games',
		image: appURL + 'assets/images/games.png',
		heading: 'Games',
		text: 'While being fun to make and to play, games are their own niche.',
		label: 'See more',
		btn_class: 'primary',
		color: 'rgba(76, 195, 217, 0.75)' //'rgba()'//'#4CC3D9'
	}
];

var features = [
	{
		imgURL: appURL + 'assets/images/anca-logo.jpg',
		title: 'Anca\'s website v2',
		paragraphs: [
			{text: 'A client redesign for an existent application. Since the data is managed by a JSON server, the client can be changed without affecting it.'},
			{text: 'The initial version used media queries for a responsive layout, but the second one uses Bootstrap 3 for layout, and Handlebars for templating.'},
		]
	}
];

$( function() {

	$('#myCarousel').html(sliderTemplate({slides: sliderData}));

	$('#sidebar').html(sidebarItemTemplate({items: sidebarItems}));

	$('.carousel-inner .item').first().addClass('active');

	$('#feature').append(featureItemTemplate({features: features}));
});