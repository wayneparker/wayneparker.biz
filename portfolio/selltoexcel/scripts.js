// 6110 Sell to Excel 1H14


$(document).ready(function(){


	// Frame 01: Logo

	$("#stage").queue(function(next){
		$("#att_logo")
			.delay(1000)
			.fadeIn(1000)
			.delay(1000)
			.animate({top:'+=100px', left:'+=100px', width:'0', height:'0'}, 500, 'easeInBack', function(){next();});
	});


	// Frame 02: Splash

	$("#stage").queue(function(next){
		$("#att_logo")
			.css({display:'none'});
		$("#title")
			.animate({top:'0'}, 50, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#splash")
			.css({'opacity':'0.0', display:'block'})
			.animate({top:'275px', 'opacity':'1.0'}, 500, 'easeOutBack')
			.delay(1500)
			.animate({left:'-=1024px'}, 500, 'easeInBack', function(){next();});
	});


	// Frame 03: Header & Quote #1

	$("#stage").queue(function(next){
		$("#title")
			.animate({fontSize:'25px','top':'14px'}, 100, 'easeInOutCubic');
		$("#info")
			.delay(100)
			.animate({left:'0px'}, 50, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#frame03 .attr")
			.css({'opacity':'0.0'});
		$("#frame03")
			.css({left:'1024px', 'opacity':'0.0', display:'block'})
			.animate({left:'0','opacity':'1.0'}, 500, 'easeOutBack', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#frame03 .attr")
			.delay(100)
			.animate({'opacity':'1.0'}, 500, 'linear', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#frame03")
			.delay(5000)
			.animate({left:'-1024px','opacity':'0.0'}, 500, 'easeInBack', function(){next();});
	});


	// Frame 04: "You Have the POWER"

	$("#stage").queue(function(next){
		$("#frame04 p")
			.css({'opacity':'0.0'});
		$("#frame04")
			.css({display:'block'});
		$("#frame04 p")
			.animate({width:'750px','opacity':'1.0', 'font-size':'72px'}, 500, 'easeOutBack', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#frame04")
			.delay(2000)
			.animate({left:'-1024px','opacity':'0.0'}, 500, 'easeInBack', function(){next();});
	});


	// Frame 05: "PCG goes to New York City"

	$("#stage").queue(function(next){
		$("#frame05")
			.css({display:'block'});
		$("#frame05 .green")
			.css({display:'block'})
			.animate({left:'0px'}, 500, 'easeOutCubic')
			.animate({height:'340px','margin-top':'-170px'}, 500, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#text05a")
			.css({display:'block'})
			.animate({left:'70px','opacity':'1.0'}, 500, 'easeOutBack', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#text05b")
			.animate({left:'475px','opacity':'1.0'}, 500, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#text05c")
			.animate({left:'475px','opacity':'1.0'}, 500, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#text05d")
			.animate({left:'475px','opacity':'1.0'}, 500, 'easeOutCubic', function(){next();});
	});


	// Frame 06: Photo 01

	$("#stage").queue(function(next){
		$("#frame06")
			.css({display:'block'})
			.delay(3000)
			.animate({left:'0px'}, 500, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#frame05")
			.css({display:'none'});
		$("#frame06")
			.delay(1000)
			.animate({left:'-1024px'}, 500, 'easeInCubic', function(){next();});
	});


	// Frame 07: Quote #2

	$("#stage").queue(function(next){
		$("#frame06")
			.css({display:'none'});
		$("#frame07 .attr")
			.css({'opacity':'0.0'});
		$("#frame07")
			.css({left:'1024px', 'opacity':'0.0', display:'block'})
			.animate({left:'0','opacity':'1.0'}, 500, 'easeOutBack', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#frame07 .attr")
			.delay(1000)
			.animate({'opacity':'1.0'}, 500, 'linear', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#frame07")
			.delay(2000)
			.animate({left:'0px','opacity':'0.0'}, 500, 'easeInBack', function(){next();});
	});


	// Frame 08: Photo 02

	$("#stage").queue(function(next){
		$("#frame08")
			.css({display:'block'})
			.animate({left:'0px'}, 500, 'easeOutCubic', function(){next();});
	});


	// Frame 09: Photo 03 (vertical)

	$("#stage").queue(function(next){
		$("#frame07")
			.css({display:'none'});
		$("#frame09")
			.css({'opacity':'1.0',display:'block'})
			.delay(2000)
			.animate({top:'-876px'}, 1500, 'easeOutCubic', function(){next();});
	});


	// Frame 10: Photo 04

	$("#stage").queue(function(next){
		$("#frame08")
			.css({display:'none'});
		$("#frame10")
			.css({display:'block'})
			.delay(1000)
			.animate({left:'0px'}, 1000, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#frame09")
			.css({display:'none'});
		$("#frame10")
			.delay(2000)
			.animate({'opacity':'0.0'}, 500, 'linear', function(){next();});
	});


	// Frame 11: Hotel Logo

	$("#stage").queue(function(next){
		$("#frame10")
			.css({display:'none'});
		$("#frame11")
			.css({'opacity':'0.0',display:'block'})
			.animate({top:'40px','opacity':'1.0'}, 500, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#frame11 p")
			.delay(1000)
			.css({'opacity':'0.0',display:'block'})
			.animate({'opacity':'1.0'}, 500, 'linear', function(){next();});
	});


	// Frame 12: Hotel Photo 01

	$("#stage").queue(function(next){
		$("#frame11")
			.delay(3000)
			.animate({top:'660px','opacity':'0.0'}, 500, 'easeInCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#frame11")
			.css({display:'none'});
		$("#frame12")
			.css({display:'block'})
			.animate({left:'0px'}, 500, 'easeOutCubic')
			.delay(2000)
			.animate({left:'-1024px'}, 500, 'easeInCubic', function(){next();});
	});


	// Frame 13: Hotel Text 01

	$("#stage").queue(function(next){
		$("#frame12")
			.css({display:'none'});
		$("#frame13")
			.css({left:'1024px', 'opacity':'0.0', display:'block'})
			.animate({left:'0','opacity':'1.0'}, 500, 'easeOutBack')
			.delay(4000)
			.animate({'opacity':'0.0'}, 500, 'linear', function(){next();});
	});


	// Frame 14: Hotel Photo 02 (vertical)

	$("#stage").queue(function(next){
		$("#frame14")
			.css({'opacity':'1.0',display:'block'})
			.animate({top:'-364px'}, 1600, 'easeOutCubic', function(){next();});
	});


	// Frame 15: Hotel Photo 03

	$("#stage").queue(function(next){
		$("#frame13")
			.css({display:'none'});
		$("#frame15")
			.delay(1000)
			.css({display:'block'})
			.animate({left:'0px'}, 500, 'easeOutCubic', function(){next();});
	});


	// Frame 16: Hotel Photo 04

	$("#stage").queue(function(next){
		$("#frame14")
			.css({display:'none'});
		$("#frame16")
			.delay(2000)
			.css({display:'block'})
			.animate({left:'0px'}, 500, 'easeOutCubic', function(){next();});
	});


	// Frame 17: Hotel Photo 05

	$("#stage").queue(function(next){
		$("#frame15")
			.css({display:'none'});
		$("#frame17")
			.delay(2000)
			.css({display:'block'})
			.animate({left:'0px'}, 500, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#backdrop_green")
			.css({display:'block'});
		$("#frame16")
			.css({display:'none'});
		$("#frame17")
			.delay(2000)
			.animate({left:'-1024px'}, 500, 'easeInCubic', function(){next();});
	});


	// Frame 18: See the Sights

	$("#stage").queue(function(next){
		$("#frame17")
			.css({display:'none'});
		$("#frame18")
			.css({display:'block'})
			.animate({left:'0px'}, 500, 'easeOutCubic')
			.delay(2000)
			.animate({'opacity':'0.0'}, 500, 'linear', function(){next();});
	});


	// Frame 19: Sights photos 1–3

	$("#stage").queue(function(next){
		$("#frame18")
			.css({display:'none'});
		$("#frame19")
			.css({display:'block'});
		$("#sights01")
			.css({display:'block'})
			.animate({top:'160px'}, 500, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#sights01")
			.css({display:'block'})
			.animate({top:'160px',left:'385px'}, 500, 'easeOutCubic');
		$("#sights02")
			.css({display:'block'})
			.delay(100)
			.animate({top:'320px',left:'75px'}, 500, 'easeOutCubic');
		$("#sights03")
			.css({display:'block'})
			.delay(200)
			.animate({top:'380px',left:'720px'}, 500, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#caption01")
			.css({display:'block'})
			.animate({top:'490px',left:'460px'}, 500, 'easeOutCubic');
		$("#caption02")
			.css({display:'block'})
			.delay(100)
			.animate({top:'280px',left:'75px'}, 500, 'easeOutCubic');
		$("#caption03")
			.css({display:'block'})
			.delay(200)
			.animate({top:'340px',left:'780px'}, 500, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#frame19")
			.delay(3000)
			.animate({'opacity':'0.0'}, 500, 'linear', function(){next();});
	});


	// Frame 20: Enjoy all there is to do in the Big Apple

	$("#stage").queue(function(next){
		$("#backdrop_green")
			.css({display:'block'});
		$("#frame20")
			.css({display:'block'})
			.animate({left:'0px'}, 500, 'easeOutCubic')
			.delay(1000)
			.animate({'opacity':'0.0'}, 500, 'linear', function(){next();});
	});


	// Frame 22: Sights photos 4-7

	$("#stage").queue(function(next){
		$("#frame20")
			.css({display:'none'});
		$("#frame22")
			.css({display:'block'});
		$("#sights04")
			.css({display:'block'})
			.animate({top:'200px'}, 500, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#sights04")
			.css({display:'block'})
			.animate({top:'130px',left:'324px'}, 500, 'easeOutCubic');
		$("#sights05")
			.css({display:'block'})
			.delay(100)
			.animate({top:'320px',left:'75px'}, 500, 'easeOutCubic');
		$("#sights06")
			.css({display:'block'})
			.delay(100)
			.animate({top:'320px',left:'620px'}, 500, 'easeOutCubic');
		$("#sights07")
			.css({display:'block'})
			.delay(300)
			.animate({top:'420px',left:'347px'}, 500, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#caption04")
			.css({display:'block'})
			.animate({top:'130px',left:'50px'}, 500, 'easeOutCubic');
		$("#caption05")
			.css({display:'block'})
			.delay(100)
			.animate({top:'300px',left:'50px'}, 500, 'easeOutCubic');
		$("#caption06")
			.css({display:'block'})
			.delay(100)
			.animate({top:'300px',left:'745px'}, 500, 'easeOutCubic');
		$("#caption07")
			.css({display:'block'})
			.delay(200)
			.animate({top:'600px',left:'700px'}, 500, 'easeOutCubic', function(){next();});
	});


	// Frame 24: The Big Finish

	$("#stage").queue(function(next){
		$("#frame24")
			.delay(4000)
			.css({'opacity':'0.0',display:'block'})
			.animate({'opacity':'1.0'}, 500, 'easeInCubic')
			.animate({'background-position-y':'0px'}, 1000, 'easeOutCubic', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#stinger")
			.css({'font-size':'1px', display:'block'})
			.animate({'font-size':'80px'}, 500, 'easeInBack')
			.delay(1000)
			.animate({left:'-1024px'}, 500, 'easeInBack', function(){next();});
	});

	$("#stage").queue(function(next){
		$("#calltoaction")
			.css({ display:'block'})
			.animate({left:'80px'}, 500, 'easeInBack', function(){next();});
	});


	// Th-th-that's all, folks!

	$("#stage").queue(function(next){

	});


});

