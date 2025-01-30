---
layout: default
title: "Profile Page"
permalink: /profile
---

<style>
    .profile-container {
        width: 100%;
        max-width: 600px;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        border: 1px solid #e0e0e0;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    .profile-title {
        font-size: 2rem;
        font-weight: bold;
        color: #006d77;
        margin-bottom: 1rem;
    }
    .profile-info {
        font-size: 1.2rem;
        color: #444;
        margin-bottom: 1.5rem;
    }
    .logout-btn, .back-home-btn {
        background: #0096c7;
        color: white;
        font-weight: bold;
        padding: 12px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s;
        margin-top: 1rem;
    }
    .logout-btn:hover, .back-home-btn:hover {
        background: #0077b6;
    }
    .logout-btn {
        background: #d9534f;
    }
    .logout-btn:hover {
        background: #c9302c;
    }
</style>

<div class="profile-container">
    <h2 class="profile-title">User Profile</h2>

    <div class="profile-info" id="profile-info">
        <!-- User information will be displayed here -->
    </div>

    <button class="logout-btn" onclick="logout()">Log out</button>
    <button class="back-home-btn" onclick="goHome()">Back to Home</button>
</div>

<script>
    // Function to load the user's profile from sessionStorage
    function loadProfile() {
        const user = JSON.parse(sessionStorage.getItem('loggedInUser'));

        if (user) {
            // Display user info
            const profileInfo = document.getElementById('profile-info');
            profileInfo.innerHTML = `
                <p><strong>Username:</strong> ${user.name}</p>
                <p><strong>User Type:</strong> ${user.username}</p>
            `;
        } else {
            // If no user is logged in, show a message
            const profileInfo = document.getElementById('profile-info');
            profileInfo.innerHTML = `<p>No user is logged in. Please log in first.</p>`;
        }
    }

    // Function to handle logout
    function logout() {
        // Remove user data from sessionStorage
        sessionStorage.removeItem('loggedInUser');

        // Redirect to login page or show a message
        alert('You have been logged out.');
        window.location.href = '/login';  // Adjust the URL as needed
    }

    // Function to go back to the home page
    function goHome() {
        window.location.href = '/index';  // Adjust the URL as needed
    }

    // Load profile information on page load
    window.onload = loadProfile;
</script>
