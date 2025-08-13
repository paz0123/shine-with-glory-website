emailjs.init("yYCsypCGYNyVXtfw7");

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_4hb9xfh", "template_oxe48tm", this)
      .then(function() {
          document.getElementById("status").innerText = "Message sent successfully!";
      }, function(error) {
          document.getElementById("status").innerText = "Failed to send message. Please try again.";
          console.error("Error:", error);
      });
});