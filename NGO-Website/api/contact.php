<?php

// Enable error logging
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/contact_errors.log');

header('Content-Type: application/text; charset=utf-8');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitize input
    $name = isset($_POST["name"]) ? trim(htmlspecialchars($_POST["name"])) : '';
    $email = isset($_POST["email"]) ? trim(htmlspecialchars($_POST["email"])) : '';
    $message = isset($_POST["message"]) ? trim(htmlspecialchars($_POST["message"])) : '';

    // Validate inputs
    if (empty($name) || empty($email) || empty($message)) {
        echo "error";
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "error";
        exit;
    }

    // Recipient email
    $to = "aiopindia123@gmail.com";
    $subject = "New Contact Form Submission from AIOOP Website";

    // Create email body
    $body = "Name: " . $name . "\r\n";
    $body .= "Email: " . $email . "\r\n";
    $body .= "Date: " . date('Y-m-d H:i:s') . "\r\n";
    $body .= "----------------------------------------\r\n";
    $body .= "Message:\r\n";
    $body .= $message . "\r\n";
    $body .= "----------------------------------------\r\n\r\n";
    $body .= "This is an automated message from the AIOOP website contact form.";

    // Set proper email headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    // Attempt to send email
    $emailSent = false;
    try {
        if (mail($to, $subject, $body, $headers)) {
            $emailSent = true;
        }
    } catch (Exception $e) {
        error_log("Mail error: " . $e->getMessage());
    }

    if ($emailSent) {
        echo "success";
    } else {
        // Log detailed error for debugging
        error_log("Mail function failed for: " . $email);
        echo "error";
    }
} else {
    // Only POST requests are allowed
    echo "error";
}
?>