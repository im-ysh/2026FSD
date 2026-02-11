const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const statusdisplay = document.getElementById('status');


function applytheme(theme) {
    if(theme === "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}


darkBtn.addEventListener("click" , function() {
    localStorage.setItem("theme", "dark");
    applytheme("dark");
    statusdisplay.textContent = "dark theme applied and saved to local storage";
});

lightBtn.addEventListener("click" , function() {
    localStorage.setItem("theme","light");
    applytheme("light");
    statusdisplay.textContent = "light theme applied and saved to local storage";
});

const savedTheme = localStorage.getItem("theme");
if(savedTheme) {
    applytheme(savedTheme);
}


