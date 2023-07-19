<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Construct email message
$to = 'chineduokatta1000@gmail.com';
$subject = 'New Contact Form Submission: ' . $subject;
$message = "Name: $name\nEmail: $email\nPhone: $phone\n\n$message";

// Set additional headers
$headers = "From: $name <$email>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";

// Send email
$mailSent = mail($to, $subject, $message, $headers);

// Check if email was sent successfully
if ($mailSent) {
    // Email sent successfully, redirect or display success message
    echo "Thank you for your message. We will get back to you soon!";
} else {
    // Email sending failed, redirect or display error message
    echo "Sorry, an error occurred while sending your message. Please try again later.";
}
?>
