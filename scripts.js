// Joke function
function showJoke() {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "What do you call fake spaghetti? An impasta!",
        "Why don’t skeletons fight each other? They don’t have the guts."
    ];

    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('joke').innerText = joke;
}

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
