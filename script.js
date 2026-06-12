console.log("script.js loaded");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

const toggleBtn = document.getElementById("darkModeToggle");

if (toggleBtn) {
    toggleBtn.textContent =
        document.body.classList.contains("dark-mode")
        ? "☀ Light Mode"
        : "🌙 Dark Mode";

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const dark = document.body.classList.contains("dark-mode");

        toggleBtn.textContent = dark
            ? "☀ Light Mode"
            : "🌙 Dark Mode";

        localStorage.setItem(
            "darkMode",
            dark ? "enabled" : "disabled"
        );
    });
}