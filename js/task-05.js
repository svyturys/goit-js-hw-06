const inputValue = document.querySelector('#name-input');
const spanForTask = document.querySelector('#name-output');
const inputChange = (evt) => {
    spanForTask.textContent = evt.currentTarget.value;
    if (spanForTask.textContent === '') {
        spanForTask.textContent = 'Anonymous';
    }
}

inputValue.addEventListener('input', inputChange)



