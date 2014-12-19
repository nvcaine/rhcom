var sliderData = [
	{
		alt: "Web",
		image: appURL + "assets/images/web.png",
		heading: "Web Applications",
		text: "Websites and HTML/JS apps that run in the browser.",
		label: "See more"
	}, {
		alt: "Software",
		image: appURL + "assets/images/soft.png",
		heading: "Software Development",
		text: "When the line between classic Software Development and Web Apps is fading&hellip;",
		label: "See more"
	}, {
		alt: "Games",
		image: appURL + "assets/images/games.png",
		heading: "Games",
		text: "While being fun to make and to play, games are their own niche.",
		label: "See more"
	}
];

$( function() {
	$("#myCarousel").html(sliderTemplate({slides: sliderData}));
	$(".carousel-inner .item").first().addClass("active");
})