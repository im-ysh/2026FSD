const normalbtn = document.getElementById("normal");
const lostbtn =  document.getElementById("lost");
const bindbtn = document.getElementById("bind");
const screendisplay = document.getElementById("greetingDisplay");

// data 

const user = {
    name : "vevisy",
    age : 21,
    city : "hyd",
    greet() {
        return `Greetings ! this is ${this.name} aged ${this.age} from ${this.city}`;
    }
};

// let display = " ";
normalbtn.addEventListener("click" , function() {
    screendisplay.textContent = user.greet();
})


lostbtn.addEventListener("click", function() {
    const greetFunc = user.greet;
    screendisplay.textContent = greetFunc();
});

bindbtn.addEventListener("click",function() {
    const greetFunc = user.greet.bind(user);
    screendisplay.textContent = greetFunc();
});