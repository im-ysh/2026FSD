// score changes -  we use let variable

let score = 0;

// DOM elements are accesed

const scoreELE = document.getElementById("Score");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// increase btn - + 
// decrease btn - -
// reset btn - 0
// score element - shows score


function updatescoreOnUI() {
    scoreELE.textContent = score;
}

increaseBtn.addEventListener("click",function() {
    score++;
    // update score on ui also so
    updatescoreOnUI();
});


decreaseBtn.addEventListener("click",function() {
    score--;
    if(score < 0) {
        score = 0;
    }
    updatescoreOnUI();
});

resetBtn.addEventListener("click", function() {
    score = 0;
    updatescoreOnUI();
});



