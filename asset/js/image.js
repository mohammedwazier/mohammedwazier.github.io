			<script type="text/javascript">
				$('.popupVal').click(function(){
					$('body').css("overflow","hidden");
					var valueImage=$(this).find("img").attr('src');
					console.log($(this).find("img").attr('src'));
					$("#blackPage").find("img").attr("src",valueImage);
					$("#blackPage").fadeIn(100);
				});
			</script>