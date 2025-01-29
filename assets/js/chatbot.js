const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatWindow = document.getElementById('chat-window');

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  // Show user's message
  addMessageToChat('User', userMessage, 'user');

  // Call Flask backend API
  const response = await fetch('http://127.0.0.1:5000/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ input: userMessage, context: 'The context of the conversation.' })
  });

  const data = await response.json();
  const aiMessage = data?.generated_text || "Sorry, there was an error processing your request.";

  // Show AI response
  addMessageToChat('AI', aiMessage, 'ai');
  userInput.value = '';
});

function addMessageToChat(sender, message, className) {
  const msgElement = document.createElement('div');
  msgElement.className = `message ${className}`;
  msgElement.textContent = `${sender}: ${message}`;
  chatWindow.appendChild(msgElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
