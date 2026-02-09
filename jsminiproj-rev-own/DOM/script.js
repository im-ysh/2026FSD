// input
// output


const inputplaceholder = document.getElementById("input");
const outputonUI = document.getElementById("output");
const clearbtn = document.getElementById("clearb");

inputplaceholder.addEventListener("input", function() {
    outputonUI.textContent = inputplaceholder.value;
})


clearbtn.addEventListener("click",function() {
    inputplaceholder.value = "";
    outputonUI.textContent = inputplaceholder.value;
})


