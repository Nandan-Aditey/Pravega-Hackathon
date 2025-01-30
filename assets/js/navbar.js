document.addEventListener("DOMContentLoaded", function () {
    function updateNavbar() {
        const navbar = document.querySelector(".navbar-nav");
        const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

        if (navbar) {
            const existingProfileLink = document.querySelector(".my-profile-nav");
            if (existingProfileLink) {
                existingProfileLink.remove();
            }

            if (loggedInUser) {
                const profileItem = document.createElement("li");
                profileItem.className = "nav-item my-profile-nav";
                profileItem.innerHTML = '<a class="nav-link" href="profile.html">My Profile</a>';
                navbar.appendChild(profileItem);
            }
        }
    }

    updateNavbar();
    window.addEventListener("load", updateNavbar);
});
