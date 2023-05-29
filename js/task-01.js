const quantityOfCategories = document.querySelectorAll('.item');
console.log("Number of categories:", quantityOfCategories.length);

const titleAndQuantity = document.querySelectorAll('.item');
titleAndQuantity.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.querySelector('ul').children.length);
})
