/*---------underline-----------*/
$("#underl").click(function(){
	$("#textzone").css("text-decoration","underline");
});

$("#underl").hover(function(){
	$("#des").html("This option will make your text underlined");
});
/*--------------------*/

/*---------italic-----------*/
$("#italic").click(function(){
	$("#textzone").css("font-style","italic");
});

$("#italic").hover(function(){
	$("#des").html("This option will make your text italic");
});
/*--------------------*/

/*---------bold-----------*/
$("#bold").click(function(){
	$("#textzone").css("font-weight","bold");
});

$("#bold").hover(function(){
	$("#des").html("This option will make your text bold");
});
/*--------------------*/

/*------reset-------*/
$("#reset").click(function(){
	$("#textzone").css("font-weight","initial");
	$("#textzone").css("font-style","normal");
	$("#textzone").css("text-decoration","none");
});

$("#reset").hover(function(){
	$("#des").html("This option will make you back to the default option");
});
/*--------------------*/

/* size Jquerry changement par rapport a JS (ancien version js) */
$("#size").change(function(){
    var x=document.f.txtn.value;
    $("#textzone").css('font-size',x+"px");
});

$("#size").hover(function(){
	$("#des").html("This option will let you change the size of your text");
});

/*--------------------*/
/*-------Style--------*/
$("#style").change(function(){
    var ch=document.f.txts.value;
    $("#textzone").css('font-family',ch);
});

$("#style").hover(function(){
	$("#des").html("This option will let you change the style of your text");
});
/*--------------------*/

