function mostrarSurpresa() {
    const surpresaTexto = document.getElementById("surpresaTexto");
    surpresaTexto.innerHTML = `
        Você quer namorar comigo? ❤️
        <div>
            <button onclick="iniciarCronometro()">Sim</button>
            <button onclick="mostrarRespostaAmigavel()">Não</button>
        </div>
    `;
    surpresaTexto.style.display = "block";
}

function iniciarCronometro() {
    const surpresaTexto = document.getElementById("surpresaTexto");
    surpresaTexto.innerHTML = `
        Estamos juntos desde:
        <p id="cronometro">00:00:00</p>
    `;

    let segundos = 0;
    setInterval(() => {
        segundos++;
        const horas = String(Math.floor(segundos / 3600)).padStart(2, '0');
        const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
        const seg = String(segundos % 60).padStart(2, '0');
        document.getElementById("cronometro").textContent = `${horas}:${minutos}:${seg}`;
    }, 1000);
}

function mostrarRespostaAmigavel() {
    document.getElementById("surpresaTexto").textContent = 
    "Tudo bem, eu ainda te considero uma pessoa muito especial! 😊";
}

// Animação de texto digitado
window.addEventListener("load", () => {
    const texto = "Desde que você entrou na minha vida, tudo ganhou mais cor e significado. Cada momento ao seu lado é um presente, e cada sorriso seu ilumina meu mundo.";
    const elementoTexto = document.getElementById("textoDeclaracao");
    let index = 0;

    function digitarTexto() {
        if (index < texto.length) {
            elementoTexto.textContent += texto.charAt(index);
            index++;
            setTimeout(digitarTexto, 30);
        } else {
            elementoTexto.style.borderRight = "none";
        }
    }

    digitarTexto();
});
