document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const queryType = document.querySelector('input[name="queryType"]:checked').value;
        const message = document.getElementById('message').value;
        const consent = document.getElementById('consent').checked;
        
        if (consent) {
            alert(`Message sent!\n\Thanks for completing the form. We will be in touch soon.`);
            document.getElementById("contactForm").reset();
        } 
        else {
            alert('Please consent to being contacted by the team.');
        }
    });
});
