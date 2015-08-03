//
// ## Import external modules
// --------------------------------

// @ codekit-append '/vendor/bootstrap.js'


//
// ## Site-Specific Scripts
// --------------------------------

//
// ## Site-Wide

//
// Navigation: Highlight Current Page Links

var url = location.href.toLowerCase();
console.log('URL=' + url);
$('#navbar').find('a').each(function () {
	var link = this;
	var str = link.href.toLowerCase();
	console.log('link=' + str);
	if (url.indexOf(str) > -1) {
		$(this).closest("li").addClass('active');
		console.log('And the winner is: ' + str);
	}
});


