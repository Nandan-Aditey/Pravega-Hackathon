document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');
  
    chatForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const userMessage = userInput.value.trim();
      if (!userMessage) return;
  
      // Show user's message in the chat window
      addMessageToChat('User', userMessage, 'user');
  
      try {
        // Send user message to backend
        const response = await fetch('/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userMessage })
        });
  
        const data = await response.json();
        const aiMessage = data.response || "Sorry, I didn't get that.";
  
        // Show AI response in the chat window
        addMessageToChat('AI', aiMessage, 'ai');
      } catch (error) {
        console.error('Error:', error);
        addMessageToChat('AI', "Sorry, there was an error processing your request.", 'ai');
      }
  
      // Clear input field
      userInput.value = '';
    });
  
    // Add message to the chat window
    function addMessageToChat(sender, message, className) {
      const msgElement = document.createElement('div');
      msgElement.className = `message ${className}`;
      msgElement.textContent = `${sender}: ${message}`;
      chatWindow.appendChild(msgElement);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  });
  