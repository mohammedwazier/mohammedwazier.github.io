<?php
// print_r($_POST);
if(isset($_POST['page'])){
	switch ($_POST['page']) {
		case 'home':include"asset/page/home.php";break;
		case 'porto':include"asset/page/porto.php";break;
		case 'cv':include"asset/page/cv.php";break;
		// Defaults
		default:include"asset/page/home.php";break;
	}
}

?>