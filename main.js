let errorIcons = document.querySelectorAll(".error-icon");
let errorMessages = document.querySelectorAll(".error-message");
let inputTags = document.querySelectorAll("input");
let inputNames = ["First Name", "Last Name", "email", "Password"];
let submitButton = document.querySelector("button");
let form = document.querySelector("form");

function checkInputs(e){
    e.preventDefault();
    let numErrors = 0;
    for (let input of inputTags){
        let inputValue = input.value;
        let inputName = input.getAttribute("name"); 
        if (inputValue.trim().length == 0){
            toggleError(inputNames.indexOf(inputName));
            numErrors++;
        }
        if (inputName === "email" && inputValue.trim.length > 0){
            if(!inputText.includes("@.") || inputText.length < 3){
                errorIcon.classList.toggle("hide");
                errorMessage.classList.toggle("hide");
                emailInput.classList.toggle("error");
            }
        }
    }
    if(numErrors === 0){
        window.location.reload();
    }
}

function toggleError(index){
    errorIcons[index].classList.toggle("hide");
    errorMessages[index].classList.toggle("hide");
    inputTags[index].classList.toggle("error");
}

form.addEventListener("submit", checkInputs)