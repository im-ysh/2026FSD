const optionBtn = document.getElementById("typeofTea");
const incbtn = document.getElementById("inc");
const decbtn = document.getElementById("dec");
const displayBtn = document.getElementById("displaybtn");
const quantityDisplay = document.getElementById("qty");
const totalpricedisplay = document.getElementById("totalPrice");

let quantity = 0;
// this is like data we gotta store in the form of key value pair so we can easily access 
const priceofTea  = {
    "green tea" : 10,
    "oolong tea" : 20,
    "black tea" : 15,
    "choco tea" : 25,
}

incbtn.addEventListener("click" , function() {
    quantity++;
    quantityDisplay.textContent = quantity;
})

decbtn.addEventListener("click" , function() {
    quantity--;
    if(quantity <0) {
        return;
    }
    quantityDisplay.textContent = quantity;
})


function calculateTotalPrice(q,p) {
    const totvalue = q*p;
    return totvalue;
}

displayBtn.addEventListener("click" , function() {
    const selectedTea = optionBtn.value;  //what tea?
    const price = priceofTea[selectedTea]; //price of tea?
    const totalPrice = calculateTotalPrice(quantity,price);
    totalpricedisplay.textContent = totalPrice;
});
