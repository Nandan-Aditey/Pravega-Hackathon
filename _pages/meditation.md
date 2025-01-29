---
layout: default
title: "Meditation"
permalink: /meditation
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meditation - Mental Health Support</title>
    <link rel="stylesheet" href="styles.css"> <!-- Include your CSS styles here -->
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #3B82F6;
            color: white;
            padding: 20px;
            text-align: center;
        }

        .content {
            padding: 20px;
            text-align: center;
        }

        .relaxing-music {
            margin-top: 20px;
        }

        .meditation-tips {
            margin-top: 40px;
        }

        .timer {
            margin-top: 30px;
        }

        .btn {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        .btn:hover {
            background-color: #45a049;
        }

        audio {
            width: 100%;
            margin-top: 10px;
        }

        .play-pause-btn {
            background-color: #3B82F6;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 10px;
        }

        .play-pause-btn:hover {
            background-color: #1d4ed8;
        }
    </style>
</head>
<body>

<header>
    <h1>Meditation - Relax and Recenter</h1>
</header>

<div class="content">

    <!-- Relaxing Music Section -->
    <div class="relaxing-music">
        <h2>Relaxing Music</h2>
        <p>Let the soothing music guide your meditation session:</p>
        
        <audio id="relaxingAudio" loop>
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>
        
        <button id="playPauseButton" class="play-pause-btn" onclick="togglePlayPause()">Play Music</button>
    </div>

    <!-- Meditation Tips Section -->
    <div class="meditation-tips">
        <h2>Meditation Tips</h2>
        <p>Here are a few tips to get started with your meditation session:</p>
        <ul>
            <li>Find a quiet place where you can sit comfortably.</li>
            <li>Focus on your breath. Inhale deeply through your nose, and exhale slowly through your mouth.</li>
            <li>When your mind wanders, gently bring your focus back to your breath.</li>
            <li>Start with just 5 minutes, and gradually increase the duration as you get more comfortable.</li>
        </ul>
    </div>

    <!-- Meditation Timer Section -->
    <div class="timer">
        <h2>Meditation Timer</h2>
        <p>Set a timer for your meditation session:</p>
        
        <input type="number" id="timerInput" placeholder="Enter minutes" min="1">
        <button class="btn" onclick="startTimer()">Start Meditation Timer</button>
        
        <div id="timerDisplay" style="margin-top: 20px; font-size: 24px;">00:00</div>
    </div>

</div>

<script>
    // Play/Pause button functionality for relaxing music
    function togglePlayPause() {
        var audio = document.getElementById("relaxingAudio");
        var button = document.getElementById("playPauseButton");
        
        if (audio.paused) {
            audio.play();
            button.textContent = "Pause Music";
        } else {
            audio.pause();
            button.textContent = "Play Music";
        }
    }

    // Meditation timer functionality
    function startTimer() {
        let minutes = document.getElementById('timerInput').value;
        if (minutes < 1) {
            alert("Please enter a valid number of minutes.");
            return;
        }

        let seconds = minutes * 60;
        let timerDisplay = document.getElementById('timerDisplay');
        let interval = setInterval(function () {
            let minutesLeft = Math.floor(seconds / 60);
            let secondsLeft = seconds % 60;
            timerDisplay.innerHTML = `${formatTime(minutesLeft)}:${formatTime(secondsLeft)}`;
            seconds--;

            if (seconds < 0) {
                clearInterval(interval);
                alert("Your meditation session is complete. Well done!");
            }
        }, 1000);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
</script>

</body>
</html>
