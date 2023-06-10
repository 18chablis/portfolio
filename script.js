$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: [
      "Freelancer",
      "Full Stack Web Developer",
      "Web Designer",
      "Translator",
      "Graphic Designer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Freelancer",
      "Full Stack Web Developer",
      "Web Designer",
      "Translator",
      "Graphic Designer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Slide UP script

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // toggle menu script
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

// Assuming you have jQuery library included in your project

$(document).ready(function () {
  $("#reused_form").submit(function (e) {
    e.preventDefault();

    // Validate and sanitize form input
    var name = sanitizeInput($('input[name="contact_name"]').val());
    var email = sanitizeInput($('input[name="contact_email"]').val());
    var subject = sanitizeInput($('input[name="subject"]').val());
    var message = sanitizeInput($('textarea[name="contact_message"]').val());

    // Perform additional validation checks
    if (!isValidEmail(email)) {
      // Display an error message for invalid email
      showErrorMessage("Invalid email address");
      return;
    }

    // Format the email body
    var emailBody = "Name: " + name + "\n";
    emailBody += "Email: " + email + "\n";
    emailBody += "Subject: " + subject + "\n";
    emailBody += "Message: " + message + "\n";

    // Send the email using a server-side email service or library
    sendEmail(emailBody);
  });

  // Function to sanitize input
  function sanitizeInput(input) {
    // Remove leading and trailing white spaces
    var sanitizedInput = input.trim();
    // Remove any HTML tags using a regular expression
    sanitizedInput = sanitizedInput.replace(/<[^>]*>/g, "");
    // Return the sanitized input
    return sanitizedInput;
  }

  // Function to validate email address
  function isValidEmail(email) {
    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test the email against the regular expression
    return emailRegex.test(email);
  }

  // Function to display an error message
  function showErrorMessage(elementId, message) {
    var errorSpan = $("#" + elementId);
    errorSpan.text(message);
    errorSpan.css("color", "red");
  }

  // Function to send the email
  function sendEmail(emailBody) {
    // Make an AJAX request to your server with the email data
    $.ajax({
      url: "your-email-sending-endpoint",
      method: "POST",
      data: {
        to: "omoobaoshoffa@gmail.com",
        subject: "New Contact Form Submission",
        body: emailBody,
      },
      success: function (response) {
        console.log("Email sent successfully");
        // Display a success message to the user if needed
      },
      error: function (xhr, status, error) {
        console.error("Error sending email:", error);
        // Display an error message to the user if needed
      },
    });
  }
});
