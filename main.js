
let alphaLetters = "abcdefghijklmnopqrstuvwxyz";

let alphaLettersArray = Array.from(alphaLetters);

let lettersContainer = document.querySelector(".letters");

alphaLettersArray.forEach(letter => {

    let letterSpan = document.createElement("span");

    let letterSpanText = document.createTextNode(letter);

    letterSpan.appendChild(letterSpanText);

    letterSpan.className = "letter-box";

    lettersContainer.appendChild(letterSpan);
})

let words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "R", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mohamed Ali"],
    countries: ["Syria", "Yemen", "Egypt", "Qatar", "England", "Russia"]
}

let allKeys = Object.keys(words);

let randomNum = Math.floor(Math.random() * allKeys.length);

let randomKey = allKeys[randomNum];

let randomKeyValue = words[randomKey];

let randomNumSecond = Math.floor(Math.random() * randomKeyValue.length);

let finishValue = randomKeyValue[randomNumSecond];

document.querySelector(".category span").textContent = randomKey;

let guessContainer = document.querySelector(".guess");

let finishValueArray = Array.from(finishValue);

finishValueArray.forEach(letter => {

    let mainSpan = document.createElement("span");

    if (letter == " ") {

        mainSpan.className = "spaced";
    }

    guessContainer.appendChild(mainSpan);
})

let allGuessSpans = document.querySelectorAll(".guess span");

let wrongAttempts = 0;

let theDraw = document.querySelector(".hangman");

document.addEventListener("click", e => {

    let theStatus = false;

    if (e.target.className == "letter-box") {

        e.target.classList.add("clicked");

        let theTargetLetter = e.target.textContent.toLowerCase();

        let theChosenWord = Array.from(finishValue.toLowerCase());

        theChosenWord.forEach((letter, index) => {

            if (theTargetLetter == letter) {

                theStatus = true;

                allGuessSpans.forEach((span, spanIndex) => {

                    if (index == spanIndex) {

                        span.textContent = theTargetLetter;
                    }
                })

            }
        });

        if (theStatus !== true) {

            wrongAttempts++;

            theDraw.classList.add(`wrong-${wrongAttempts}`);

            if (wrongAttempts == 8) {

                endGame();

                lettersContainer.classList.add("done");
            }
        }
    }
})

function endGame() {

    let mainDiv = document.createElement("div"),

        mainDivText = document.createTextNode(`Game Over The Word Was ${finishValue}`);

    mainDiv.appendChild(mainDivText);

    mainDiv.className = "popup";

    document.body.appendChild(mainDiv);
}