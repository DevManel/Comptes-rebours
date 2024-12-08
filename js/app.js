const number = parseInt(prompt("Entrez un nombre de départ: "));
const countdownElement = document.getElementById("countdown");
console.log(number);

// Fonction pour mettre à jour le compte à rebours
function updateCountdown(i) {
    countdownElement.textContent = i; // Met à jour le contenu de la div
}

// Démarre le décompte
for (let i = number; i >= 0; i--) {
    setTimeout(() => {
        updateCountdown(i);
    }, (number - i) * 1000); // Délai en millisecondes
}