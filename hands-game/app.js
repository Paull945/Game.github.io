let playerScore = 0; // for keeping score for player
let comScore = 0; // for computer score
const rounds2Play = 10; // The number of rounds to play.

const playerScore_span = document.getElementById("player-score");
const comScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

// function which returns random choice for the computer choices
function getComputerChoice() {
    let Choice = ['r', 'p', 's'];
    let randomNum = Math.floor(Math.random() * 3);
    return Choice[randomNum];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(playerSelection, comSelection) {;
    const smallPlayerWord = "player".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    const playerSelection_div = document.getElementById(playerSelection);

    playerScore++;
    playerScore_span.innerHTML = playerScore;
    result_div.innerHTML = `${convertToWord(playerSelection)} ${smallPlayerWord} beats ${convertToWord(comSelection)} ${smallComputerWord}. You win! `;
    playerSelection_div.classList.add("green-glow");
    setTimeout(() => { playerSelection_div.classList.remove('green-glow') }, 300);
}

function lose(playerSelection, comSelection) {

    const smallPlayerWord = "player".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    const playerSelection_div = document.getElementById(playerSelection);

    comScore++;
    comScore_span.innerHTML = comScore;
    result_div.innerHTML = `${convertToWord(playerSelection)} ${smallPlayerWord} loses to ${convertToWord(comSelection)} ${smallComputerWord}. You win! `;
    playerSelection_div.classList.add("red-glow");
    setTimeout(() => { playerSelection_div.classList.remove('red-glow') }, 300);
}

function draw(playerSelection, comSelection) {

    const smallPlayerWord = "player".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    const playerSelection_div = document.getElementById(playerSelection);

    result_div.innerHTML = `${convertToWord(playerSelection)} ${smallPlayerWord} equals ${convertToWord(comSelection)} ${smallComputerWord}. It's Tie! `;
    playerSelection_div.classList.add("gray-glow");
    setTimeout(() => { playerSelection_div.classList.remove('gray-glow') }, 300);
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));

}

main()

function game(playerSelection) {

    comSelection = getComputerChoice();
    switch (playerSelection + comSelection) {
        case "rs":
        case "pr":
        case "sp":
            win(playerSelection, comSelection);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerSelection, comSelection);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerSelection, comSelection);
            break;
    }
}

function endGame() {
    for (let i = 0; i <= rounds2Play; i++) {
        if (playerSelection <= rounds2Play) {
            return result_div;
        } else if (comSelection >= rounds2Play) {
            return result_div
        }
    }
}