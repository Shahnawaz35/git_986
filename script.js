document.getElementById('viewProfile').addEventListener('click', function() {
    const email = "user@example.com"; // Replace with actual email from user profile
    alert(`Email: ${email}`);
});

document.getElementById('searchChats').addEventListener('input', function() {
    const searchTerm = this.value;
    const chatHistory = document.getElementById('chatHistory');
    // Simulate fetching chat history based on search term
    const history = [
        "Chat 1: Hello",
        "Chat 2: How can I help you?",
        "Chat 3: Power grid status is normal."
    ];
    const filteredHistory = history.filter(chat => chat.includes(searchTerm));
    chatHistory.innerHTML = filteredHistory.map(chat => `<div>${chat}</div>`).join('');
});

document.getElementById('enterMessage').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const message = this.value;
        const answerArea = document.getElementById('answerArea');
        // Simulate a response from the chatbot
        answerArea.innerHTML = `You said: ${message}`;
        this.value = '';
    }
});