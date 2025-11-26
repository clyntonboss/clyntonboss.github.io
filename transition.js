document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');

    function setIcon(theme) {
        if (theme === "dark") {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        } else {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }

    const savedTheme = localStorage.getItem("theme") || "light";

    // Apenas ajusta o ícone — sem mexer no tema (pois isso causaria piscada!)
    setIcon(savedTheme);

    toggleButton.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const newTheme = current === "light" ? "dark" : "light";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        setIcon(newTheme);
    });
});
