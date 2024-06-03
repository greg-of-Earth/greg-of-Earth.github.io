<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $firstName = htmlspecialchars($_POST['fname']);
    $lastName = htmlspecialchars($_POST['lname']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "greg87calderon@gmail.com"; 
    
    $subject = "New Contact Form Submission";
    
   
    $body = "You have received a new message from the contact form on your Github website.\n\n";
    $body .= "First Name: $firstName\n";
    $body .= "Last Name: $lastName\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";
    
  
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message. It has been sent.";
    } else {
        echo "There was a problem sending your message. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>
