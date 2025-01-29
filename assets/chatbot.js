document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');
  
    chatForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const userMessage = userInput.value.trim();
      if (!userMessage) return;
  
      addMessageToChat('User', userMessage, 'user');
      userInput.value = '';
  
      try {
        const response = await fetch("https://api.huggingface.co/v1/chat", {
          method: "POST",
          headers: {
            "Authorization": "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",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: "Qwen/Qwen2.5-Coder-32B-Instruct",
            messages: [{ role: "user", content: userMessage }]
          })
        });
  
        const data = await response.json();
        const aiMessage = data?.choices?.[0]?.message?.content || "I'm here for you.";
        addMessageToChat('AI', aiMessage, 'ai');
      } catch (error) {
        addMessageToChat('AI', "Sorry, there was an error processing your request.", 'ai');
      }
    });
  
    function addMessageToChat(sender, message, className) {
      const msgElement = document.createElement('div');
      msgElement.className = `message ${className}`;
      msgElement.textContent = `${sender}: ${message}`;
      chatWindow.appendChild(msgElement);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  });
  