<!DOCTYPE html>
<html>
<head>
	<title>Muhammad Waziruddin Akbar - Biodata</title>
	<link rel="stylesheet" href="style.css">
	<script type="text/javascript" src="asset/js/jquery.min.js">
	</script>
	<?php
		include("asset/js/main.js");
	?>
</head>
<body>
	<div id="blackPage" class="popup">
		<span onclick="closeBlack()"></span>
		<img src="#" width="750px" style="position: absolute;left: 0;right: 0;padding-top:100px;padding-bottom:100px;margin: auto;">
	</div>
	<div id="wrapper">
		<div id="topLayer">
			<div class="topEmblem link" style="padding:26px;" onclick="switchPage('home');">
					<span><b>Muhammad Waziruddin Akbar</b></span>
					<br>
					Tugas 4 <b>Pemrograman Web</b>
			</div>
			<div class="topEmblem">
				<ul>
					<li class="main" id="home" onclick="switchPage('home');">Home</li>
					<li class="other" id="porto" onclick="switchPage('porto');">Portofolio</li>
					<li class="other" id="cv" onclick="switchPage('cv');">CV</li>
				</ul>
			</div>
		</div>
		<div id="content">
			<!-- Switching Page -->
			<!-- Testing -->
		</div>
		<div id="footer">
			&copy; <b>Muhammad Waziruddin Akbar</b> 2018 All Right Reserved
		</div>
	</div>
</body>
</html>