---
layout: default
title: Chatbox
permalink: /forum
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Chatbox</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      display: flex;
      justify-content: center;
      align-items: flex-start; /* Align the chat box to the top */
      height: 100vh;
      margin: 0;
      padding-top: 50px; /* Adds space for the top banner */
    }

    .chat-container {
      width: 400px;
      max-width: 90%;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .chat-header {
      background-color: #2563eb;
      color: white;
      padding: 10px;
      text-align: center;
      font-weight: bold;
    }

    .chat-messages {
      flex: 1;
      padding: 10px;
      overflow-y: auto;
      border-bottom: 1px solid #ddd;
    }

    .message {
      background-color: #e0f2fe;
      color: #333;
      padding: 8px 12px;
      margin: 6px 0;
      border-radius: 6px;
      max-width: 70%;
    }

    .user-message {
      background-color: #d1fae5;
      align-self: flex-end;
    }

    .input-container {
      display: flex;
      padding: 10px;
    }

    .chat-input {
      flex: 1;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .send-button {
      background-color: #34d399;
      color: white;
      border: none;
      padding: 10px;
      margin-left: 8px;
      cursor: pointer;
      border-radius: 4px;
    }

    .send-button:hover {
      background-color: #059669;
    }
  </style>
</head>
<body>
  <div class="chat-container">
    <div class="chat-header">Simple Chatbox</div>
    <div id="chatMessages" class="chat-messages"></div>

    <div class="input-container">
      <input id="chatInput" class="chat-input" type="text" placeholder="Type your message...">
      <button class="send-button" onclick="sendMessage()">Send</button>
    </div>
  </div>

  <script>
    // Fetch messages from the backend
    function displayMessages() {
      fetch('http://localhost:3000/messages')
        .then(response => response.json())
        .then(messages => {
          const chatMessages = document.getElementById('chatMessages');
          chatMessages.innerHTML = '';
          messages.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${msg.user ? 'user-message' : ''}`;
            messageDiv.textContent = msg.text;
            chatMessages.appendChild(messageDiv);
          });
          chatMessages.scrollTop = chatMessages.scrollHeight;
        });
    }

    // Send message to backend
    function sendMessage() {
      const chatInput = document.getElementById('chatInput');
      const messageText = chatInput.value.trim();
      if (messageText) {
        const newMessage = { text: messageText, user: true };

        fetch('http://localhost:3000/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: newMessage })
        })
        .then(response => response.json())
        .then(() => {
          chatInput.value = '';
          displayMessages();
        })
        .catch(error => console.error('Error:', error));
      }
    }

    // Initialize chat display
    displayMessages();
  </script>
</body>
</html>
