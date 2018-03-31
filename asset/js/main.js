<script type="text/javascript">
var dataPage;
$(document).ready(function(){
	switchPage("home");
	$('#blackPage').hide();
});
function closeBlack(){
	$("#blackPage").fadeOut();
	$('body').css("overflow","auto");
}

function switchPage(inputData){
	dataPage=inputData;
	$.ajax({
		type:'POST',
		url:'switch.php',
		data:'page='+inputData,
		success:function(data){
			changeStatePage(inputData);
			// console.log(data);
			$('#content').html(data);
		}
	});
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
</script>