var dataPage=null;
$(document).ready(function(){
	if(!dataPage){
		switchPage("home");
	}else{
		switchPage(dataPage);
	}
	$('#blackPage').hide();

});
function closeBlack(){
	$("#blackPage").fadeOut();
	$('body').css("overflow","auto");
}

function switchPage(inputData){
	dataPage=inputData;
	changeStatePage(inputData);
	if(inputData=="home"){
		$.ajax({
			url:'asset/page/home.html',
			success:function(data){
				$('#content').html(data);
			}
		});
	}else if(inputData=="porto"){
		$.ajax({
			url:'asset/page/porto.html',
			success:function(data){
				$('#content').html(data);
			}
		});
	}else if(inputData=="cv"){
		$.ajax({
			url:'asset/page/cv.html',
			success:function(data){
				$('#content').html(data);
			}
		});
	}
}
function changeStatePage(input){
	if(input=="home"){
		$("#home").removeClass("main").removeClass("other").addClass("main");
		$("#porto").removeClass("main").removeClass("other").addClass("other");
		$("#cv").removeClass("main").removeClass("other").addClass("other");
	}else if(input=="porto"){
		$("#home").removeClass("main").removeClass("other").addClass("other");
		$("#porto").removeClass("main").removeClass("other").addClass("main");
		$("#cv").removeClass("main").removeClass("other").addClass("other");
	}else if(input=="cv"){
		$("#home").removeClass("main").removeClass("other").addClass("other");
		$("#porto").removeClass("main").removeClass("other").addClass("other");
		$("#cv").removeClass("main").removeClass("other").addClass("main");
	}
}