let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

for(let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selscted");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    })
}

function reset() {
    //Generate all new colors
    colors = generateRandomColors(numSquares);

    //Pick a new random color
    pickedColor = pickColor();

    //Change Color Display to match Picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    messageDisplay.textContent = "";
    //Change colors to squares
    for ( let i = 0; i < squares.length; i ++) {
        if(colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
    }

    h1.style.backgroundColor = "steelblue";
}
// easyBtn.addEventListener("click", function() {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i ++){
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function() {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i ++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }
// })

resetButton.addEventListener("click", function() {
    reset();
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //Grab color of clicked square
        let clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again"
        }

        //Compare color to picked color
    });
}

function changeColors(color) {
    //Loop through all squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //Make an array
    let arr = []
    //Add random number to the array
    for(let i = 0; i < num; i ++) {
        arr.push(randomColor())
    }

    //Aeturn the array
    return arr;
}

function randomColor() {
    //Pick a red 0 - 255
    let r = Math.floor(Math.random() * 256);

    //Pick a green 0 - 255
    let g = Math.floor(Math.random() * 256);

    //Pick a blue 0 - 255
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}