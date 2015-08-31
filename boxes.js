console.log("hello world");
var pup = 1;
$(function() {
//  $("body").css("backgroundColor", "pink");

// $( "#secretBox" ).css("backgroundColor", "white");
// $( "#secretBox" ).append("h1").html("Secret Box!").css("color", "black");

// $( "#row1 div" ).removeClass("boxType1").addClass("boxType3");
// $( "#row1 div" ).removeClass("boxType2").addClass("boxType3");
// $("#row4 div:last-child").remove();
// $(".boxType1").css("backgroundColor", "white");

// $("#row2 div:lt(2)").removeClass();
//$("#container div").not(".row").not("#secretBox").width(2);
// $("#container").click(function(e) {
// 	console.log("x: " + e.pageX + " y: " + e.pageY);
// 	});
// });



$( ".boxType1" ).append("p").html("<a href=\"http://www.galvanize.it\">Go to Galvanize</a>").css;
$(".boxType1").click(function(e) {
	e.preventDefault();
	alert("YOU WILL NEVER LEAVE");
	});

/*
$(".boxType2").click(function(e) {
	if (pup%2===1){
 		$(this).css("background-image", "url('http://www.kimberlenes-labradoodles.co.uk/upload/images/webpage/puppies/puppies-large.jpg')");
		pup+=1;
	 	}
 	else if (pup%2===0){
 		$(this).css('background-color', 'green').css('background-image', ''); 
 		pup+=1;
 		}
	})

$(".boxType3").click(function(e) {
	if (pup%2===1){
 		$(this).css("background-image", "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaPB77XOTm42d7D_NHCrMqucQ_E8XC-n203AfRrWMiOSPfLr7wbg')");
		pup+=1;
 		}
 	else if (pup%2===0){
 		$(this).css('background-color', 'blue').css('background-image', ''); 
 		pup+=1;
 		}
	})
*/
$(".box").click(function(e){
	var el = $(this);
	if (el.children().length >= 1){
		el.html('');
	} else {
		el.html('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaPB77XOTm42d7D_NHCrMqucQ_E8XC-n203AfRrWMiOSPfLr7wbg"></img>');
		el.children().height(150);
	}
	})


	$('#container').click(function(e){
		if(e.target.id === 'container') {
			$(this).css('backgroundColor', 'lightgreen');
		}
		else {
			$(this).css('backgroundColor', 'black');
			e.target.style.backgroundColor='white';
		}

	});
})
