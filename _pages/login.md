---
layout: default
title: "Login Page"
permalink: /login
---
<style>
    .login-main-container{
        margin-top: 30px;
        padding-left: 0;
        padding-right: 0;
    }
    body {
        background: linear-gradient(to right, #e3fdfd, #cbf1f5);
        font-family: 'Arial', sans-serif;
    }
    .login-container {
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
    .login-title {
        font-size: 1.8rem;
        font-weight: bold;
        color: #006d77;
        margin-bottom: 1rem;
    }
    .login-form {
        display: flex;
        flex-direction: column;
    }
    .login-form label {
        text-align: left;
        font-weight: 600;
        color: #444;
        margin-bottom: 0.4rem;
        margin-top: 8px;
    }
    .login-form input {
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 1rem;
        outline: none;
        transition: border 0.3s;
    }
    .login-form input:focus {
        border-color: #0096c7;
        box-shadow: 0 0 5px rgba(0, 150, 199, 0.3);
    }
    .login-btn {
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
    .login-btn:hover {
        background: #0077b6;
    }
    .login-section {
        margin-top: 2rem;
    }
</style>

<div class="flex flex-col items-center justify-center min-h-screen py-10 px-4 login-main-container">
    
    <div class="login-container">
        <h2 class="login-title">Log in as Guest</h2>
        <form class="login-form">
            <label>Username</label>
            <input id="guest-username" type="text" placeholder="Your username is your registered email">
            <label>Password</label>
            <input id="guest-password" type="password" placeholder="Enter your password">
            <button type="button" class="login-btn login-btn-guest">Log in</button>
        </form>
    </div>

    <div class="login-container login-section">
        <h2 class="login-title">Log in as Mental Health Professional</h2>
        <form class="login-form">
            <label>Username</label>
            <input id="professional-username" type="text" placeholder="Your username is your registered email">
            <label>Password</label>
            <input id="professional-password" type="password" placeholder="Enter your password">
            <button type="button" class="login-btn login-btn-professional">Log in</button>
        </form>
    </div>

    <div class="login-container login-section">
        <h2 class="login-title">Log in as Admin</h2>
        <form class="login-form">
            <label>Username</label>
            <input id="admin-username" type="text" placeholder="Your username is your registered email">
            <label>Password</label>
            <input id="admin-password" type="password" placeholder="Enter your password">
            <button type="button" class="login-btn login-btn-admin">Log in</button>
        </form>
    </div>

</div>

<script>
    // This function is triggered when the user clicks the "Log in" button
    function loginUser(userType) {
        const username = document.querySelector(`#${userType}-username`).value;
        const password = document.querySelector(`#${userType}-password`).value;

        // Create a user object
        const user = {
            username: username,
            userType: userType
        };

        // Store the user data in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));

        // Log the user in (redirect or show a welcome message)
        alert(`Welcome, ${username} as ${userType}`);
        // Redirect or handle post-login behavior here
    }

    // Attach event listeners to login buttons for each type
    document.querySelector('.login-btn-guest').addEventListener('click', () => loginUser('guest'));
    document.querySelector('.login-btn-professional').addEventListener('click', () => loginUser('professional'));
    document.querySelector('.login-btn-admin').addEventListener('click', () => loginUser('admin'));
</script>

<script src="assets/js/login.js"></script>
