<?php
	$to      = 'damien.guedes.r@gmail.com';
	$name    = $_POST['name'];
	$subject = $_POST['subjet'];
	$message = $_POST['message'];
	$from    = $_POST['email'];
	$headers = 'From:'.$from ."\r\n" .
	    'X-Mailer: PHP/' . phpversion();
	$message = $from . '<br/>' . $name . '<br/>' . $message;
	//echo $message;
	if (mail($to, $subject, $message, $headers)) {
		echo("<p>Email successfully sent!</p>");
  	} else {
   		echo("<p>Email delivery failed…</p>");
  	}
?>