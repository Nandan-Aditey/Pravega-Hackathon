---
layout: default
title: CBT Daily Journal
permalink: /cbt
---

<div class="journal-container">
  <h1>CBT Daily Journal</h1>
  
  <div class="journal-section">
    <label for="emotion">How are you feeling today? 💭</label>
    <select id="emotion" class="journal-input">
      <option value="happy">Happy</option>
      <option value="sad">Sad</option>
      <option value="anxious">Anxious</option>
      <option value="neutral">Neutral</option>
      <option value="angry">Angry</option>
    </select>
  </div>

  <div class="journal-section">
    <label for="thoughts">What thoughts are on your mind? 🤔</label>
    <textarea id="thoughts" class="journal-input" placeholder="Share your thoughts..."></textarea>
  </div>

  <div class="journal-section">
    <label for="action">What action can you take today to feel better? 🚶‍♀️</label>
    <input type="text" id="action" class="journal-input" placeholder="e.g., Go for a walk">
  </div>

  <button onclick="saveJournal()" class="save-btn">Save Your Journal</button>

  <div id="saved-message" class="saved-message"></div>
</div>

<style>
  .journal-container {
    background-color: #f0f8ff;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 600px;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h1 {
    color: #ff6347;
    font-family: 'Arial', sans-serif;
  }

  .journal-section {
    margin-bottom: 15px;
  }

  .journal-input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  .save-btn {
    background-color: #ff6347;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
  }

  .save-btn:hover {
    background-color: #ff4500;
  }

  .saved-message {
    margin-top: 15px;
    color: green;
    font-size: 16px;
    font-weight: bold;
  }
</style>

<script>
  // Function to save the journal data to localStorage
  function saveJournal() {
    // Get the values from the input fields
    const emotion = document.getElementById("emotion").value;
    const thoughts = document.getElementById("thoughts").value;
    const action = document.getElementById("action").value;

    // Create an object to store the journal data
    const journalEntry = {
      emotion: emotion,
      thoughts: thoughts,
      action: action,
      date: new Date().toLocaleString()
    };

    // Save the journal entry to localStorage
    localStorage.setItem('journalEntry', JSON.stringify(journalEntry));

    // Display a message to the user
    const savedMessage = document.getElementById("saved-message");
    savedMessage.textContent = "Your journal entry has been saved! 💾";

    // Clear input fields after saving
    document.getElementById("emotion").value = "neutral";
    document.getElementById("thoughts").value = "";
    document.getElementById("action").value = "";
  }

  // Function to load saved journal entry if any
  window.onload = function() {
    const savedJournal = localStorage.getItem('journalEntry');
    if (savedJournal) {
      const journal = JSON.parse(savedJournal);
      document.getElementById("saved-message").textContent = `Last saved on ${journal.date}`;
    }
  };
</script>
