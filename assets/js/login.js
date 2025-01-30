document.addEventListener("DOMContentLoaded", function () {
    const loginButtons = document.querySelectorAll(".login-btn");

    loginButtons.forEach((button) => {
        button.addEventListener("click", async function (event) {
            event.preventDefault();

            const loginForm = event.target.closest(".login-form");
            const username = loginForm.querySelector("input[type='text']").value.trim();
            const password = loginForm.querySelector("input[type='password']").value.trim();
            let errorMessageContainer = loginForm.querySelector(".error-message");

            if (errorMessageContainer) {
                errorMessageContainer.remove();
            }

            try {
                const response = await fetch("guest_profiles.json");
                const profiles = await response.json();

                const user = profiles.find(profile => profile.username === username && profile.password === password);

                if (user) {
                    sessionStorage.setItem("loggedInUser", JSON.stringify(user));
                    window.location.href = "index.html";
                } else {
                    errorMessageContainer = document.createElement("p");
                    errorMessageContainer.textContent = "Invalid Credentials";
                    errorMessageContainer.style.color = "red";
                    errorMessageContainer.classList.add("error-message");
                    loginForm.appendChild(errorMessageContainer);
                }
            } catch (error) {
                console.error("Error fetching profiles:", error);
            }
        });
    });
});
