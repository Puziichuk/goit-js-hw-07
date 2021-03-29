{/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */}

const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', sizeChange);


function sizeChange(event){
    span.style.fontSize = event.currentTarget.value + "px";
};