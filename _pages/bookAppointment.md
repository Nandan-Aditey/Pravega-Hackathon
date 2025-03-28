---
layout: default
title: "Book Appointment"
permalink: /bookAppointment
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Appointment | veryMindful</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background: #f0f0f0; /* Light grey background */
            margin: 0;
            padding-bottom: 60px; /* Prevent footer overlap */
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            background: white;
            color: black;
        }
        .header nav a {
            color: black;
            text-decoration: none;
            margin: 0 10px;
        }
        .header nav a:hover {
            text-decoration: underline;
        }
        .container-fluid {
            display: flex;
            padding: 20px;
        }
        .left-section {
            width: 60%;
            padding: 20px;
            overflow-y: auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }
        .right-section {
            width: 35%;
            padding: 20px;
            background: #f7f7f7;
            margin-left: 20px;
            height: auto;
            max-height: calc(100vh - 120px);
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        .footer {
            text-align: center;
            padding: 15px;
            background: white;
            color: black;
            width: 100%;
            margin-top: 20px; /* Space above the footer */
        }
        .professional-card {
            display: flex;
            align-items: center;
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 15px;
            background: #ffffff;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }
        .professional-card img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-right: 15px;
            cursor: pointer;
        }
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            justify-content: center;
            align-items: center;
        }
        .modal img {
            max-width: 80%;
            max-height: 80%;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <!--<div class="header">
        <h1>veryMindful</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="stories.html">Stories</a>
        </nav>
    </div>-->
    
    <div class="container-fluid">
        <div class="left-section">
            <h2>Meet Registered Professionals</h2>
            <p>You can directly book an appointment with a professional of your choice.</p>
            <div id="professionals"></div>
        </div>
        
        <div class="right-section" id="rightSection">
            <h2>Book an Appointment</h2>
            <form id="appointmentForm">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" id="name" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" id="address" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="mobile" class="form-label">Mobile Number</label>
                    <input type="tel" id="mobile" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="problems" class="form-label">Current Feelings</label>
                    <textarea id="problems" class="form-control" required></textarea>
                </div>
                <div class="mb-3">
                    <label for="date" class="form-label">Preferred Date</label>
                    <input type="date" id="date" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="time_slot" class="form-label">Preferred Time Slot</label>
                    <input type="time_slot" id="time_slot" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-success w-100">Submit</button>
            </form>
        </div>
    </div>
    
    
    <div class="modal" id="imageModal">
        <img id="modalImage" src="" alt="Profile Image">
    </div>
    
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            fetch("profiles.json")
                .then(response => response.json())
                .then(data => {
                    const professionalsDiv = document.getElementById("professionals");
                    data.forEach(prof => {
                        professionalsDiv.innerHTML += `
                            <div class="professional-card">
                                <img src="profile images/${prof.image}" alt="${prof.name}" onclick="showImageModal(this.src)">
                                <div>
                                    <h4>${prof.name}</h4>
                                    <p>${prof.residence}</p>
                                    <p>${prof.experience} years of experience</p>
                                </div>
                            </div>
                        `;
                    });
                });
        });

        function showImageModal(src) {
            document.getElementById("modalImage").src = src;
            document.getElementById("imageModal").style.display = "flex";
        }

        document.getElementById("imageModal").addEventListener("click", function() {
            this.style.display = "none";
        });
        document.getElementById("appointmentForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent actual form submission
        
        // Select the right section
        var rightSection = document.getElementById("rightSection");
        
        // Apply styles for centering content
        rightSection.style.display = "flex";
        rightSection.style.flexDirection = "column";
        rightSection.style.justifyContent = "center";
        rightSection.style.alignItems = "center";
        rightSection.style.height = "100%";
        rightSection.style.textAlign = "center";
        rightSection.style.fontFamily = "Arial, sans-serif";
        
        // Update the content with styled text
        rightSection.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 50px; color: green; margin-bottom: 10px;">✔</div>
                <p style="font-size: 24px; font-weight: bold; font-family: 'Poppins', sans-serif;">Thank you for your submission</p>
                <p style="font-size: 18px; font-family: 'Dancing Script', cursive;">We will get back to you within the next hour.</p>
            </div>
        `;
    });

    </script>
</body>
</html>
