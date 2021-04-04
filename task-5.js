{/* <input type="text" placeholder="Ваше имя?" id="name-input" />
      <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */}


const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);
// input.addEventListener('input', _.debounce(onInputChange, 2000));

function onInputChange(event){
 if (input.value.length === 0){
    span.textContent="незнакомец"; 
 } else{
    span.textContent = event.target.value;
}
};




