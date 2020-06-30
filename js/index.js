function toggleDarkMode() {
    const body = document.getElementById("body");
    const darkModeButton = document.getElementById("dark-mode-button");
    const linkedinIcon = document.getElementById("linkedin-icon");
    const githubIcon = document.getElementById("github-icon");

    if (body.classList.contains("bg-dark")) {
        body.classList.remove("bg-dark");
        darkModeButton.classList.remove("bg-dark");
        darkModeButton.classList.add("bg-secondary");
        linkedinIcon.src = "img/linkedin-icon-dark.svg";
        githubIcon.src = "img/github-icon-dark.svg";
    } else {
        body.classList.add("bg-dark");
        darkModeButton.classList.remove("bg-secondary");
        darkModeButton.classList.add("bg-dark");
        linkedinIcon.src = "img/linkedin-icon-white.svg";
        githubIcon.src = "img/github-icon-white.svg";
    }
}

document.getElementById('dark-mode-button').addEventListener("click", toggleDarkMode);