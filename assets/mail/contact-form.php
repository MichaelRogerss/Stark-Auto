<?php
$firstName = $_POST['firstName'];
$conEmail = $_POST['conEmail'];
$conPhone = $_POST['conPhone'];
$conSubject = $_POST['conSubject'];
$conMessage = $_POST['conMessage'];

ini_set('display_errors', 1);
error_reporting(E_ALL);


/**
 * Set the recipient email address.
 * 
 * FIXME: Update this to your desired email address.
 */
$recipient = "thisisthemeshala@gmail.com";


// Set the email subject.
$sender = $conSubject;


//Email Header
$head = "You have a new message from your Fixton website Contact Form\n=============================";


// Build the email content.
$form_content = "$head\n\n";

$form_content .= "Full Name: $firstName\n";

$form_content .= "Email: $conEmail\n";

$form_content .= "Phone: $conPhone\n";

$form_content .= "Subject: $conSubject\n";

$form_content .= "Message: \n$conMessage\n";


// Build the email headers.
$headers = "From: $firstName < $conEmail >\r\n" .
  "Reply-To:" . $conEmail;

if (mail($recipient, $sender, $form_content, $headers)) {
  echo "Y";
} else {
  echo "N";
}
