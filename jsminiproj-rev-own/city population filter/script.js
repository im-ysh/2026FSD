const cities = {
    delhi : 3200000000,
    mumbai : 245000000,
    banglore : 30000000,
    jaipur : 234000000,
    indore : 56000000,
    city : 32000000
};

const limitLabel = document.getElementById("limitPopulation");
const filterButton = document.getElementById("filterbntn");
const resultdisplay = document.getElementById("result");

filterButton.addEventListener("click" , function() {
    // .value is what they typed
    const limitval = Number(limitLabel.value);
    let output = "";
    for(let city in cities) {
        if(cities.city > limitval) {
            output += city + " ( " + cities[city] + ")\n";
        }
    }
    resultdisplay.innerHTML = output || "No city Found";
})

