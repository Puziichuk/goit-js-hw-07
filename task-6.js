{/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */}

const input = document.querySelector('#validation-input');


input.addEventListener('input',showCount);


function showCount(){
    if (input.value.length === 6){
    input.classList.remove('invalid');
    input.classList.add('valid');
    } else{
    input.classList.remove('valid');
    input.classList.add('invalid');
}
};

