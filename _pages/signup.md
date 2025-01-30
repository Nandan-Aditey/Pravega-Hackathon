---
layout: default
title: "Signup Page"
permalink: /signup
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
    .highlight {
        font-family: 'Georgia', serif;
        color: #0096c7;
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
    .error {
        color: red;
        font-size: 0.9rem;
        margin-top: 4px;
    }
</style>

<div class="flex flex-col items-center justify-center min-h-screen py-10 px-4 login-main-container">
    
    <div class="login-container">
        <h2 class="login-title">Sign up as Guest</h2>
        <form class="login-form" onsubmit="return validateGuestSignup(event)">
            <label>Name</label>
            <input type="text" id="guest-name" placeholder="Enter your name">
            <span id="guest-name-error" class="error"></span>
            
            <label>Email</label>
            <input type="email" id="guest-email" placeholder="Enter your email">
            <span id="guest-email-error" class="error"></span>
            
            <label>Password</label>
            <input type="password" id="guest-password" placeholder="Enter your password">
            <span id="guest-password-error" class="error"></span>
            
            <button type="submit" class="login-btn">Sign Up</button>
        </form>
    </div>

    <div class="login-container login-section">
        <h2 class="login-title">Apply as Mental Health Professional for <span class="highlight">veryMindful</span></h2>
        <form class="login-form" onsubmit="return validateProfessionalSignup(event)">
            <label>Name</label>
            <input type="text" id="pro-name" placeholder="Enter your full name">
            <span id="pro-name-error" class="error"></span>

            <label>Address</label>
            <input type="text" placeholder="Enter your address">
            
            <label>Email</label>
            <input type="email" id="pro-email" placeholder="Enter your email">
            <span id="pro-email-error" class="error"></span>
            
            <label>Contact No.</label>
            <input type="text" id="pro-contact" placeholder="Enter your contact number">
            <span id="pro-contact-error" class="error"></span>

            <label>Experience</label>
            <input type="text" placeholder="Enter your years of experience">

            <label>Education</label>
            <input type="file" accept=".pdf">
            
            <label>Achievements (Optional)</label>
            <input type="file" accept=".pdf">
            
            <label>LinkedIn URL (Optional)</label>
            <input type="url" id="pro-linkedin" placeholder="Enter your LinkedIn profile URL">
            
            <label>Personal Website URL (Optional)</label>
            <input type="url" id="pro-website" placeholder="Enter your website URL">
            
            <button type="submit" class="login-btn">Apply</button>
        </form>
    </div>
</div>

<script>
    function validateGuestSignup(event) {
        event.preventDefault();
        let isValid = true;

        const name = document.getElementById("guest-name").value.trim();
        const email = document.getElementById("guest-email").value.trim();
        const password = document.getElementById("guest-password").value;

        document.getElementById("guest-name-error").innerText = name ? "" : "Name is required.";
        document.getElementById("guest-email-error").innerText = email.includes("@") ? "" : "Enter a valid email.";
        document.getElementById("guest-password-error").innerText = password.length >= 8 ? "" : "Password must be at least 8 characters long.";

        isValid = name && email.includes("@") && password.length >= 8;
        return isValid;
    }

    function validateProfessionalSignup(event) {
        event.preventDefault();
        let isValid = true;

        const name = document.getElementById("pro-name").value.trim();
        const email = document.getElementById("pro-email").value.trim();
        const contact = document.getElementById("pro-contact").value.trim();

        document.getElementById("pro-name-error").innerText = name ? "" : "Name is required.";
        document.getElementById("pro-email-error").innerText = email.includes("@") ? "" : "Enter a valid email.";
        document.getElementById("pro-contact-error").innerText = contact.match(/^[0-9]{10}$/) ? "" : "Enter a valid 10-digit contact number.";

        isValid = name && email.includes("@") && contact.match(/^[0-9]{10}$/);
        return isValid;
    }
</script>

<script src="assets/js/signup.js"></script>
