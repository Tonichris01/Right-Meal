<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Email setup
    $to = "chineduokatta1000@gmail.com"; // Replace with the recipient email address
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Compose the email body
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Subject: $subject\n";
    $email_body .= "Message:\n$message\n";

    // Send the email
    mail($to, $subject, $email_body, $headers);

    // Response message to be displayed on the thank-you card box
    $response_message = "Thank you for your message! We will get back to you soon.";

    // JSON response to be sent to JavaScript for displaying the card box
    $response = array("message" => $response_message);
    echo json_encode($response);
    exit;
}
?>
