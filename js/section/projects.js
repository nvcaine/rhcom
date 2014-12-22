var projects = [
	{
		title: "Pellentesque eu facilisis",
		description: "Etiam lobortis quam turpis, vitae ultrices nulla luctus eu. Praesent est metus, ultrices vitae dignissim quis, sagittis vitae augue.",
		image: "http://romualdhalasz.com/new/img/prj/code2.png"
	},{
		title: "Sed faucibus tempor",
		description: "Nullam semper sodales sapien ut rhoncus. ",
		image: "http://romualdhalasz.com/new/img/prj/code2.png"
	},{
		title: "Etiam lobortis",
		description: "Vivamus eu mattis purus. Nam fringilla est enim, eget lobortis erat porttitor sit amet.",
		image: "http://romualdhalasz.com/new/img/prj/code2.png"
	}, {
		title: "Integer sed magna",
		description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras fringilla congue ipsum.",
		image: "http://romualdhalasz.com/new/img/prj/code2.png"
	}, {
		title: "Morbi et ante",
		description: "Nullam eu pellentesque mauris. Nullam a auctor quam, eu mollis felis.",
		image: "http://romualdhalasz.com/new/img/prj/code2.png"
	}, {
		title: "Morbi et ante",
		description: "Nullam eu pellentesque mauris. Nullam a auctor quam, eu mollis felis.",
		image: "http://romualdhalasz.com/new/img/prj/code2.png"
	}
];

$( function() {

	$("#projects-container").html(projectsTemplate({items: projects}));
});