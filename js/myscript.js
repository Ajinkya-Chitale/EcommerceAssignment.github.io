$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	dots:false,
	autoplay:1200,
	autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
		480:{
			items:2
		},
        768:{
            items:3
        },
        992:{
            items:3
        },
		1024:{
			items:4
		}
    }
});
//
//$("#btn1").click(function(){
//	$("#count").html(function(i, val){ return val*1+1 });
//});
//
//$("#btn2").click(function(){
//	$("#count").html(function(i, val){ return val*1+1 });
//});
//
//$("#btn3").click(function(){
//	$("#count").html(function(i, val){ return val*1+1 });
//});
//
//$("#btn4").click(function(){
//	$("#count").html(function(i, val){ return val*1+1 });
//});



$("#btn1").click(function(){
	$("#count").html(function(i, val){ return val*1+450 });
});

$("#btn2").click(function(){
	$("#count").html(function(i, val){ return val*1+500 });
});

$("#btn3").click(function(){
	$("#count").html(function(i, val){ return val*1+900 });
});

$("#btn4").click(function(){
	$("#count").html(function(i, val){ return val*1+800 });
});


function RemoveAll(){
	document.getElementById("count").innerHTML = "" + 0;
}
