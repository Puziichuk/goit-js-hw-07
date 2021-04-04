const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const elements = ingredients.map(ingredient => {
const navItemEl = document.createElement('li');
navItemEl.textContent=ingredient;
return navItemEl;
    
});
console.log(elements);

const categoriesEL = document.querySelector('#ingredients');
categoriesEL.append(...elements);