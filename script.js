document.addEventListener("DOMContentLoaded", function() {
    const bienvenida = document.getElementById("bienvenida");
    const mensajes = [
        "Bienvenido",
        "Welcome",
        "Bienvenue",
        "Willkommen",
        "Benvenuto",
        "Bem-vindo",
    ];
    let index = 0;
    let charIndex = 0;
    let currentMessage = "";
    let isDeleting = false;

    function typeWriter() {
        if (!isDeleting) {
            currentMessage = mensajes[index].substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === mensajes[index].length +1) {
                isDeleting = true;
                setTimeout(typeWriter, 2000); // Espera 2 segundos antes de empezar a borrar
                return;
            }
        } else {
            currentMessage = mensajes[index].substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % mensajes.length;
            }
        }

        bienvenida.textContent = currentMessage;
        setTimeout(typeWriter, isDeleting ? 100 : 200);
    }
    typeWriter();
});
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
const text = "Hi, I'm Julián Serio";
window.onload = typeWriter;
