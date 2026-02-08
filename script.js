const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const quizContainer = document.getElementById('quiz-container');

let clickCount = 0;

const messages = [
    "¿Estás segura, Brid?",
    "¡Piénsalo bien, amor!",
    "No me digas que no...",
    "Por favoooor",
    "¡Me vas a hacer llorar!",
    "Ya di que sí, Brid"
];

noBtn.addEventListener('click', () => {
    clickCount++;

    // Cambiar texto del botón No
    if (clickCount < messages.length) {
        noBtn.innerText = messages[clickCount];
    } else {
        noBtn.style.display = 'none'; // Desaparece para obligarla a decir sí
    }

    // El botón SÍ crece de forma controlada
    const fontSize = 18 + (clickCount * 12); 
    yesBtn.style.fontSize = `${fontSize}px`;
    yesBtn.style.padding = `${fontSize / 2}px ${fontSize}px`;
});

yesBtn.addEventListener('click', () => {
    // Limpiamos y rearmamos la pantalla final
    quizContainer.innerHTML = `
        <div class="video-wrapper">
            <video id="yupi-video" autoplay loop playsinline>
                <source src="yupi.mp4" type="video/mp4">
            </video>
        </div>
        <h1 class="final-msg">¡SABÍA QUE IBAS A DECIR QUE SÍ, BRID! ❤️</h1>
        <p style="font-weight: bold; color: #555;">¡Nos vemos el 14! Sos la mejor del mundo.</p>
    `;
});