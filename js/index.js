function toggleDarkMode() {
    const body = document.getElementById("body");
    const darkModeButton = document.getElementById("dark-mode-button");
    const buttons = document.querySelectorAll('button');
    const linkedinIcon = document.getElementById("linkedin-icon");
    const githubIcon = document.getElementById("github-icon");

    if (body.classList.contains("bg-dark")) {
        body.classList.remove("bg-dark");
        linkedinIcon.src = "img/linkedin-icon-purple.svg";
        githubIcon.src = "img/github-icon-purple.svg";
        darkModeButton.innerHTML = "Dark mode";

        buttons.forEach(button => {
            button.classList.remove('bg-dark');
            button.classList.add('bg-secondary');
        });

    } else {
        body.classList.add("bg-dark");
        linkedinIcon.src = "img/linkedin-icon-white.svg";
        githubIcon.src = "img/github-icon-white.svg";
        darkModeButton.innerHTML = "Light mode";

        buttons.forEach(button => {
            button.classList.remove('bg-secondary');
            button.classList.add('bg-dark');
        });
    }
}

document.getElementById('dark-mode-button').addEventListener("click", toggleDarkMode);