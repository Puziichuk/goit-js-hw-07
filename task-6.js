{/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */}


const input = document.querySelector('#validation-input');


input.addEventListener('input', showCount);


function showCount(){
    if (input.value.length === 6){
        this.classList.remove('invalid');
      this.classList.add('valid');
    } else{
         this.classList.remove('valid');
      this.classList.add('invalid');
   }
   };

