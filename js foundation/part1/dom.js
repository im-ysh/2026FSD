// example 3 

document
    .getElementById("changeOrder")
    .addEventListener("click",function() {
        let orderchange = document.getElementById("coffeeType")
        orderchange.textContent = "Espresso";
    })

    // 4
document
    .getElementById("addNewItem")
    .addEventListener("click" , function() {
        let additem = document.createElement("li");
        additem.textContent = "ginger ale";
        let createadditems = document.getElementById("shoppingList")
        createadditems.appendChild(additem);
    });

    // 5
document
.getElementById("removeLastTask")
.addEventListener("click" , function() {
    let removeele = document.getElementById("taskList");
    removeele.lastElementChild.remove();  
})

// 6
document
.getElementById("clickMeButton")
.addEventListener("click",function() {
    alert("yoloooooo");
});

// // 7
// document
// .getElementById("teaList")
// .addEventListener("click",function() {

// });

// // 8
// document
// .getElementById("submit");
// .addEventListener("click",function(event) {

// });

// 9
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("domStatus").textContent = "DOM content loaded";
});


// 10
document
.getElementById("toggleHighlight")
.addEventListener("click" , function() {
let toggleele = document.getElementById("descriptionText");
toggleele.classList.toggle("highlight");
});
