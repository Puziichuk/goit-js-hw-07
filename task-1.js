const categoriesEL = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEL.length} категории`);

categoriesEL.forEach(element => {
    const title = element.querySelector('h2');
    const itemsLength = element.querySelectorAll('li');
    console.log(`Категория: ${title.textContent}`);
    console.log(`Количество элементов: ${itemsLength.length}`);
});


// const ul = Array.from(document.querySelector('#categories').children);
// for (let elem of ul) {
//     let category = elem.firstElementChild.textContent;   
//     let quantityElem = elem.lastElementChild.children.length;
//     // console.log(`Категория: ${category}`);
//     // console.log(`Количество элементов: ${quantityElem}`);
// };

// const items = document.querySelectorAll('.item');
// Array.prototype.map.call(items, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
// });


