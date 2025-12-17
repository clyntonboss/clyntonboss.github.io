// Recuperar tema salvo
const savedTheme = localStorage.getItem("theme");

// Se existir tema salvo, aplica no HTML
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateIcon(savedTheme);
}

document.getElementById("theme-toggle").addEventListener("click", function () {

    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Aplica no HTML
    document.documentElement.setAttribute("data-theme", newTheme);

    // Salva no navegador
    localStorage.setItem("theme", newTheme);

    // Atualiza o ícone
    updateIcon(newTheme);
});

function updateIcon(theme) {
    const icon = document.getElementById("theme-icon");

    if (theme === "dark") {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}
