const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const elements = ingredients.map(option => {
const navItemEl = document.createElement('li');
navItemEl.textContent=option;
return navItemEl;
    
});
// console.log(elements);

const categoriesEL = document.querySelector('#ingredients');
categoriesEL.append(...elements);