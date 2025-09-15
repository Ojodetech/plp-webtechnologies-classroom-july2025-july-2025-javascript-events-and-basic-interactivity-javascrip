// Greeting Button Feature
document.getElementById('greetBtn').addEventListener('click', function () {
    document.getElementById('greeting').textContent = "Hello there! Thanks for visiting.";
});

// Change Text Color Feature
document.getElementById('colorBtn').addEventListener('click', function () {
    const text = document.getElementById('colorText');
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    text.style.color = colors[Math.floor(Math.random() * colors.length)];
});

// Custom Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent actual form submission
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');

    if (name === '' || email === '' || message === '') {
        feedback.textContent = "All fields are required.";
        feedback.style.color = "red";
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "red";
        return;
    }

    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";

    // Optionally reset form fields
    document.getElementById('contactForm').reset();
});
