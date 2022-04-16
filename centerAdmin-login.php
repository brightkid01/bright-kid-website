<?php
ob_start();
session_start();
if(!empty($_SESSION['userid'])){
	//$_SESSION['msg'] = 'You are already logged in';
	header("location:add_student.php");
	exit;
} 

//$flash_msg = $_SESSION['flash_msg'];

$tablename="";
include('admin/databaseFM.php');

if (isset($_POST["submit"])) 
{
	//echo 'dfsfdsfdsf';
	$password  = $con->real_escape_string( trim($_POST['password']) );
	
	$username  = $con->real_escape_string( trim($_POST['name']) );
	//echo username.'<br>'.$password;
	
	//$redirect = $_POST['redirect'];
	if($password &&  $username ){
		//echo 'dfsfdsfdsf';
		if(strstr($password,$year)) { $tablename="login_data".$year;}
		echo "$year";
			elseif(strstr($password,$year_n)) { $tablename="login_data".$year_n;}
		elseif(strstr($password,$year_next)) { $tablename="login_data".$year_next;}
		else {$tablename="login_data";}
		$sql22 = 'SELECT *  FROM '.$tablename.'
		WHERE username="'.$username.'" AND password="'.$password.'" ';
		$result22 = $con->query($sql22);
		
		if ($result22->num_rows > 0) {
		
			$row22 = $result22->fetch_assoc();
			if(strstr($password,$year)) { 
				$_SESSION['userid'] = $row22['username'];
				$_SESSION['userid'].= $year;
			}
			elseif(strstr($password,$year_next)) { 
				$_SESSION['userid'] = $row22['username'];
				$_SESSION['userid'].= $year_next;
			}
				elseif(strstr($password,$year_n)) { 
				$_SESSION['userid'] = $row22['username'];
				$_SESSION['userid'].= $year_n;
			}
			else 
				$_SESSION['userid'] = $row22['username']; 
			if((substr($row22['username'],0,5)=="admin") || (substr($row22['username'],0,4)=="bmtt"))
			  header("location:view_cen_result.php");
			else 
			  header("location:view_all_students.php");
			  
			exit;
			
			}
			
		 else {
			$_SESSION['flash_msg'] = '<div class="alert alert-warning">
									  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
									  User Not Found
									</div>';
			
			
			
			
			
		}
	} else {
		
		 $_SESSION['flash_msg'] = '<div class="alert alert-warning">
								  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
								  Please fill all the fields
								</div>';
		 
		 
		 
	}	
}

//include("header.php");?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Bright Kid Montessori House - Bangalore, Kolkata, Kindergarten, Nursery, Pre-school, Play school,preschool, Day care, International school, Summer Camp 2016, Montessori Teachers Training</title>

<!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <![endif]-->
<meta name="description" content="Bangalore, Kolkata, Kindergarten, Nursery, Pre-school, Play school, preschool, Day care, International school, Summer Camp 2016, Montessori Teachers Training">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
<link rel="stylesheet" href="fmscss/bootstrap.min.css">
<link rel="stylesheet" href="fmscss/fonts.css">
<link rel="stylesheet" href="fmscss/royalslider.css">
<link rel="stylesheet" href="facl_slider/css/settings.css">
<link rel="stylesheet" href="fmscss/main_style.css">
<link rel="stylesheet" id="packed-styles-css" href="fmscss/__packed.css" type="text/css" media="all">
<link rel="stylesheet" id="theme-skin-css" href="fmscss/kinder.css" type="text/css" media="all">
<style id="theme-skin-inline-css" type="text/css"></style>
<link rel="stylesheet" id="responsive-css" href="fmscss/responsive.css" type="text/css" media="all">
<link rel="stylesheet" href="fmscss/monthly.css">
<link rel="apple-touch-icon" sizes="144x144" href="images/favicons/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="114x114" href="images/favicons/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="72x72" href="images/favicons/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="57x57" href="images/favicons/apple-touch-icon-57x57.png">
<link rel="shortcut icon" href="images/favicon.ico" >
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<!--<link rel="stylesheet" href="/resources/demos/style.css">-->
</head>
<?php 
if(isset($center))
echo '<body onUnload="" class="map-fullscreen page-homepage navigation-off-canvas" id="page-top">';
else
echo '<body class="theme_skin_kinder">';

 ?>


<div id="fb-root"></div>
 
<!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

<style>
.authError {
	color:red
}
</style>
<section id="topOfPage" class="topTabsWrap color_section">
<div class="container">
  <div class="row">
    <div class="col-sm-12">
           <h3 class="pageTitle h3">Login</h3>
    </div>
  </div>
</div>
</section>
<section>
  <div class="container">
    <div class="row">
    <div class="panel panel-primary">
    <div class="panel-body">
    <p>&nbsp;</p>
      <div class="col-lg-6 col-lg-offset-3">
        <?php 
		
		if(isset($_SESSION['flash_msg']))
			echo $_SESSION['flash_msg'];
		
		
		$_SESSION['flash_msg'] = NULL;
		
		unset($_SESSION['flash_msg']);
		
		?>
        <form method="post" action="" id="login-form">
          <div class="form-group">
            <label for="name">User Name:</label>
            <input type="text" class="form-control" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password" name="password" required>
          </div>
          <button type="submit" name="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="clearfix"></div>
      <p>&nbsp;</p> <p>&nbsp;</p>
      </div>
      </div>
    </div>
  </div>
</section>
<?php //include("footer.php");?>
<script src="js/vendor/jquery-1.11.3.min.js"></script>
<script src="js/jquery.validate.min.js" type="text/javascript"></script> 
<script>
	
	$("#login-form").validate({
			errorClass: "authError",
			 errorElement: "p",
			rules: {
				
				name: {
					required: true,
					
				},
				password: {
					required: true,
					
				},
				
			},
			messages: {
				name: "User Name is required",
				password: "Password is required",
				address: "Address is required",
				}
		
			
			
		});
	
	</script>
