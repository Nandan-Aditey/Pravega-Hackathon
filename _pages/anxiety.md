---
layout: default
title: Anxiety
permalink: /anxiety
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anxiety Support Page</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f3f4f6;
      color: #333;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    h1 {
      color: #2563eb;
      margin-bottom: 10px;
    }

    .exercise-section {
      background: #ffffff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      margin: 20px 0;
      width: 100%;
      max-width: 600px;
    }

    .timer {
      text-align: center;
      font-size: 24px;
      color: #34d399;
      margin-top: 10px;
    }

    button {
      background-color: #34d399;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 15px;
    }

    button:hover {
      background-color: #059669;
    }

    .motivation {
      font-style: italic;
      color: #4b5563;
    }

    .step.active {
      color: #059669;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Anxiety Support Page</h1>

  <!-- Guided Breathing Exercise -->
  <section class="exercise-section">
    <h2>Guided Breathing Exercise</h2>
    <div id="exercise-steps">
      <div class="step">Breathe in deeply for 4 seconds...</div>
      <div class="step">Hold your breath for 7 seconds...</div>
      <div class="step">Exhale slowly for 8 seconds...</div>
    </div>
    <div class="timer" id="timer-display">00:00</div>
    <button onclick="startExercise()">Start Exercise</button>
    <button onclick="stopExercise()">Stop Exercise</button>
  </section>

  <!-- Visualization Module -->
  <section class="exercise-section">
    <h2>Visualization Exercise</h2>
    <p>Close your eyes and listen as we guide you to imagine a peaceful, calm place for two minutes.</p>
    <div class="timer" id="visualization-timer-display">00:00</div>
    <button onclick="startVisualization()">Start Visualization</button>
    <button onclick="stopVisualization()">Stop Visualization</button>
  </section>

  <script>
    let exerciseInterval, visualizationInterval;
    let stepIndex = 0;
    let steps = document.querySelectorAll('.step');
    const timerDisplay = document.getElementById('timer-display');
    const visualizationTimerDisplay = document.getElementById('visualization-timer-display');

    function startExercise() {
      stopExercise();
      stepIndex = 0;
      highlightStep();
      runTimer(120, timerDisplay, stopExercise, 'exercise');
    }

    function stopExercise() {
      clearTimeout(exerciseInterval);
      clearTimeout(exerciseTimer); // Ensure timer stops completely
      timerDisplay.textContent = "00:00";
      steps.forEach(step => step.classList.remove('active'));
    }

    function highlightStep() {
      if (stepIndex >= steps.length) {
        stepIndex = 0;
      }

      steps.forEach((step, index) => {
        step.classList.toggle('active', index === stepIndex);
      });
      stepIndex++;
      exerciseInterval = setTimeout(highlightStep, 4000); // Highlight each step for 4 seconds
    }

    function startVisualization() {
      stopVisualization();
      runTimer(120, visualizationTimerDisplay, stopVisualization, 'visualization');
      speakGuidedVisualization();
    }

    function stopVisualization() {
      clearTimeout(visualizationInterval);
      clearTimeout(visualizationTimer); // Ensure timer stops completely
      speechSynthesis.cancel();
      visualizationTimerDisplay.textContent = "00:00";
    }

    function runTimer(duration, displayElement, stopCallback, type) {
      let timeRemaining = duration;
      const timerKey = type === 'exercise' ? 'exerciseTimer' : 'visualizationTimer';

      function updateTimerDisplay() {
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
        displayElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeRemaining > 0) {
          timeRemaining--;
          window[timerKey] = setTimeout(updateTimerDisplay, 1000);
        } else {
          displayElement.textContent = "Exercise Complete!";
          if (stopCallback) stopCallback();
        }
      }

      updateTimerDisplay();
    }

    function speakGuidedVisualization() {
      const text = `
        Close your eyes. Imagine yourself standing on a beautiful beach. 
        The sand beneath your feet is warm, and you can hear the soothing sound of gentle waves 
        washing onto the shore. Take a deep breath. 
        Feel the sunlight on your skin, warm but comforting. 
        As you breathe out, let go of any tension in your body. 
        Stay in this peaceful scene, calm and safe.
      `;

      if ('speechSynthesis' in window) {
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'en-US';
        msg.rate = 0.9;  // Slightly slower for calming effect
        msg.pitch = 1;   // Neutral pitch
        speechSynthesis.speak(msg);
      } else {
        alert("Your browser does not support speech synthesis.");
      }
    }
  </script>

<!-- Grounding Exercise -->
<section class="exercise-section">
  <h2>Grounding Exercise (5-4-3-2-1 Technique)</h2>
  <p>Take a moment to notice:</p>
  <ul>
    <li>5 things you can see</li>
    <li>4 things you can touch</li>
    <li>3 things you can hear</li>
    <li>2 things you can smell</li>
    <li>1 thing you can taste</li>
  </ul>
  <button onclick="alert('Great job staying grounded!')">I'm Done</button>
</section>

<section class="motivation-section">
  <h2>Motivational Thoughts</h2>
  <p class="motivation">"This moment will pass. Breathe and trust that better days are ahead."</p>
  <p class="motivation">"Small steps lead to big changes. You're doing great by just being here."</p>
  <p class="motivation">"Anxiety doesn't define you. Strength grows with every breath you take."</p>
</section>

</body>
</html>
