// Validación del formulario

document.querySelector("form").addEventListener("submit", (e) => {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        e.preventDefault();
        alert("Por favor, completa todos los campos.");
    }
});

// Cambio de tema light o dark

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector("#theme-toggle");

    if (!toggleButton) {
        console.error("El botón de cambio de tema no se encontró.");
        return;
    }

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
