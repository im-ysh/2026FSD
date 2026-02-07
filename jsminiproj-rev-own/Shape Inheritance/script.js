const circleBtn = document.getElementById("circle");
const squareBtn = document.getElementById("square");

const output1btn = document.getElementById("output1");
const output2btn = document.getElementById("output2");

const shape = {
    describe() {
        return "i am a shape";
    }
};

const circle = Object.create(shape);
circle.area = function() {
    return Math.PI * this.radius * this.radius;
};

const square = Object.create(shape);
square.area = function() {
    return this.side * this.side;
}

circleBtn.addEventListener("click", function() {
    const c1 = Object.create(circle);
    c1.radius = 4;
    output1btn.textContent = `Circle area is ${c1.area().toFixed(2)} and  ${c1.describe()}`;
});


squareBtn.addEventListener("click", function() {
    const s1 = Object.create(square);
    s1.side = 5;
    output2btn.textContent = `Square area is ${s1.area()} and  ${s1.describe()}`;
});


