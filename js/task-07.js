const inputFontSizeValue = document.querySelector("#font-size-control");
const spanToDo = document.querySelector("#text");
const fontSizeChanger = () => {
    spanToDo.style.fontSize = `${inputFontSizeValue.value}px`
}
inputFontSizeValue.addEventListener('input', fontSizeChanger)





