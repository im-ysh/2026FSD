const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const submitBtn = document.getElementById('submit');


function validateform(name , email , age) {

    if(!name) {
        throw new Error("Name is required");
    }

    if(!email.includes("@")) {
        throw new Error("Email must contain @");
    }

    if(age <= 0 || isNaN(age)) {
        throw new Error("Age must be a positive number")
    }

    return `details are valid !`

}

submitBtn.addEventListener("click", function() {
    try {
        const result = validateform(nameInput.value, emailInput.value, ageInput.value);
         alert(result);
    } catch(error) {
        alert(error.message);
    }
})