const inputPlace = document.querySelector('#validation-input');
const validationCheck = () => {
    if (inputPlace.value.length === Number(inputPlace.dataset.length)) {
        inputPlace.classList.add("valid");
        inputPlace.classList.remove("invalid");
    } else {
        inputPlace.classList.add("invalid");
        inputPlace.classList.remove("valid");
    }
}

inputPlace.addEventListener('blur', validationCheck)












