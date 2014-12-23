var data = [
	{img: 'http://www.photoanswers.co.uk/media/600x600/14/DSC_0088.jpg', label: 'Image 1'},
	{img: 'http://favim.com/orig/201105/01/Favim.com-30366.jpg', label: 'Image 2'},
	{img: 'http://ero.favim.com/orig/201104/23/Favim.com-22615.jpg', label: 'Image 3'},
	{img: 'http://www.redbloodedthing.com/blog/pics/black-and-white-artistic-nude-in-motion.jpg', label: 'Image 4'},
];

var crumbs = [
	{url: '#', label: 'Crumb 1'},
	{url: '#', label: 'Crumb 2'},
	{url: '#', label: 'Crumb 3'},
];

$( function() {
	$('#works-container').html(worksTemplate({items: data}));
	$('#breadcrumb').html(breadcrumbsTemplate({items: crumbs}));
});