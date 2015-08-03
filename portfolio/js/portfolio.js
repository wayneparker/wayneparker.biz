//
// ## Portfolio

$(document).ready(function() {

	$('.fancybox').fancybox();

	$('.fancybox-thumbs').fancybox({
		helpers : {
			thumbs: {
				width: 100,
				height: 75
			}
		}
	});

	$('.fancybox-vert').fancybox({
		helpers : {
			thumbs: {
				width: 75,
				height: 100
			}
		}
	});

	$(".selltoexcel").fancybox({
		type: 'iframe',
		width: 1024,
		height: 660,
		fitToView: false,
		autoSize: false,
		closeClick: false
	});

	$(".sea-award").fancybox({
		type: 'swf',
		width: 720,
		height: 480,
		fitToView: false,
		autoSize: false,
		closeClick: false,
		helpers : {
			thumbs: {
				width: 100,
				height: 75
			}
		}
	});

	$(".marquee").fancybox({
		type: 'swf',
		width: 630,
		height: 230,
		fitToView: false,
		autoSize: false,
		closeClick: false
	});
});
