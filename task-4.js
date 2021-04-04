{/* <div id="counter">
        <button type="button" data-action="decrement">-1</button>
        <span id="value">0</span>
        <button type="button" data-action="increment">+1</button>
      </div> */}


const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");


let counterValue = 0;
 const increment = () =>{
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
 };

 const decrement = () => {
    counterValue -= 1;
  
    document.getElementById('value').textContent = counterValue;
  };

incrementBtn.addEventListener('click', increment);

decrementBtn.addEventListener('click', decrement);