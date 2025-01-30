document.addEventListener("DOMContentLoaded", function () {
    const guestSignupForm = document.querySelector("form.login-form");

    if (guestSignupForm) {
        guestSignupForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            
            const name = document.getElementById("guest-name").value.trim();
            const email = document.getElementById("guest-email").value.trim();
            const password = document.getElementById("guest-password").value;

            // Validate input fields
            let isValid = true;
            if (!name) {
                document.getElementById("guest-name-error").innerText = "Name is required.";
                isValid = false;
            } else {
                document.getElementById("guest-name-error").innerText = "";
            }
            if (!email.includes("@")) {
                document.getElementById("guest-email-error").innerText = "Enter a valid email.";
                isValid = false;
            } else {
                document.getElementById("guest-email-error").innerText = "";
            }
            if (password.length < 8) {
                document.getElementById("guest-password-error").innerText = "Password must be at least 8 characters.";
                isValid = false;
            } else {
                document.getElementById("guest-password-error").innerText = "";
            }
            if (!isValid) return;

            try {
                // Fetch existing guest profiles
                const response = await fetch("guest_profiles.json");
                let profiles = await response.json();

                // Check if the user already exists
                const userExists = profiles.some(profile => profile.username === email);
                if (userExists) {
                    alert("This email is already registered. Please log in.");
                    return;
                }

                // Add new user
                const newUser = { name: name, username: email, password: password };
                profiles.push(newUser);

                // Send updated profile data to PHP script
                const updateResponse = await fetch("update_guest_profiles.php", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(profiles),
                });

                const result = await updateResponse.json();
                if (result.status === "success") {
                    // Redirect to index.html
                    window.location.href = "index.html";
                } else {
                    alert("Error saving profile. Please try again.");
                }
            } catch (error) {
                console.error("Error updating profiles:", error);
                alert("An error occurred. Please try again.");
            }
        });
    }
});
