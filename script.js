// Initialize EmailJS with your public key
emailjs.init("yYCsypCGYNyVXtfw7");

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Send the form using the correct Service ID and Template ID
    emailjs.sendForm("service_ux9he7q", "template_oxe48tm", this)
      .then(function() {
          document.getElementById("status").innerText = "✅ Message sent successfully!";
          document.getElementById("status").style.color = "green";
          document.getElementById("contact-form").reset();
      }, function(error) {
          document.getElementById("status").innerText = "❌ Failed to send message. Please try again.";
          document.getElementById("status").style.color = "red";
          console.error("Error:", error);
      });
});
