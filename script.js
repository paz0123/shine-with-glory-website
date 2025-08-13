// Initialize EmailJS with your public key
emailjs.init("yYCsypCGYNyVXtfw7");

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Send form using EmailJS
    emailjs.sendForm("service_4hb9xfh", "template_oxe48tm", this)
        .then(function() {
            document.getElementById("status").innerText = "✅ Message sent successfully!";
            document.getElementById("status").style.color = "green";
            document.getElementById("contact-form").reset(); // Clear form after sending
        }, function(error) {
            document.getElementById("status").innerText = "❌ Failed to send message. Please try again.";
            document.getElementById("status").style.color = "red";
            console.error("Error:", error);
        });
});
