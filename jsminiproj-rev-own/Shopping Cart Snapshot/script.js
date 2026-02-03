let cart = [];
let snapshot = [];


const addItemBtn = document.getElementById("addItems");
const takeSnapshotBtn = document.getElementById("saveSnap");
const modifyCartBtn = document.getElementById("modifyCart");
const cartEle = document.getElementById("Cart");
const snapele = document.getElementById("Snapshot");
const displaycart = document.getElementById("displaycart");
const displaySnapshot = document.getElementById("displaysnap");

function updateCartonUI() {
    cartEle.textContent = cart.join(",");
}

function updatesnapshot() {
    snapele.textContent = snapshot.join(",");
}


addItemBtn.addEventListener("click",function() {
    const newItem = "New Item " + (cart.length+1);
    cart.push(newItem);
    updateCartonUI();
})

takeSnapshotBtn.addEventListener("click", function() {
    snapshot = [...cart];
    alert("snapshort is taken:" + snapshot)
});

modifyCartBtn.addEventListener("click", function() {
    cart.push("Modified Item")
    updateCartonUI();
});

displaycart.addEventListener("click", function() {
    alert("cart items: " + cart);
})

displaySnapshot.addEventListener("click", function() {
    alert("snapshot items: " + snapshot);
})
