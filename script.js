// Alternar entre jogos
function showGame(gameId) {
    document.querySelectorAll('.game').forEach(g => g.style.display = 'none');
    document.getElementById(gameId).style.display = 'block';
}

// Jogo 1
let score = 0;
function addPoint() {
    score++;
    document.getElementById("score1").innerText = score;
}

// Jogo 2
let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkNumber() {
    let guess = document.getElementById("guess").value;
    let result = document.getElementById("result");

    if (guess == randomNumber) {
        result.innerText = "🎉 Acertou!";
        randomNumber = Math.floor(Math.random() * 10) + 1;
    } else {
        result.innerText = "❌ Errou, tente novamente!";
    }
}