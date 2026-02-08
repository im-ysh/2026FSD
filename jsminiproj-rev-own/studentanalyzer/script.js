const avgbtn = document.getElementById("avg");
const topbtn = document.getElementById("top");
const passbtn = document.getElementById("passed");
const display = document.getElementById("display");

const students = [
    { name : "vaishu" ,  score : 95},
    {name : "lilly" , score : 80},
    {name : "whale" , score : 78},
    {name : "sweety" , score : 20},
    {name : "sandy" , score : 45}
];


avgbtn.addEventListener("click" , function() {
    const total = students.reduce((sumofstudents , students) => {
        return sumofstudents + students.score;
    },0);
    const avg = total / students.length;

    display.textContent = `average score of the calss : ${avg}`;
});


topbtn.addEventListener("click" , function() {
    const total = students.map(students => students.score);
    const max = Math.max(...total);
    display.textContent = `top scorer of the class : ${max} by the student: ${students.find(students => students.score === max).name}`;
});


passbtn.addEventListener("click" , function() {
    const pass = students.filter(students => students.score >= 50);
    const passedstu = pass.map(students => students.name)
    display.textContent = `passed students : ${passedstu} by the scores : ${pass.map(students => students.score)}`;
});