const categoriesEL = document.querySelectorAll('li.item');
// console.log(`В списке ${categoriesEL.length} категории`);


const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    // console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
});


const ul = Array.from(document.querySelector('#categories').children);
for (let elem of ul) {
    let category = elem.firstElementChild.textContent;   
    let quantityElem = elem.lastElementChild.children.length;
    // console.log(`Категория: ${category}`);
    // console.log(`Количество элементов: ${quantityElem}`);
};






