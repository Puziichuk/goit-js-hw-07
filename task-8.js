{/* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */}


const createBtn = document.querySelector("[data-action='render']");
const destroyBtn = document.querySelector("[data-action='destroy']");
const boxes = document.getElementById('boxes');
createBtn.addEventListener('click', getAmount);
destroyBtn.addEventListener('click', destroyBoxes);

function getAmount() {
    const amount = document.querySelector("#controls input").value;
    createBoxes(amount);
  }

  function createBoxes(amount) {
      const basicSize = 30;
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < amount; i++) {
        const size = basicSize + i * 10;
        const div = document.createElement("div");
        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        fragment.appendChild(div);
      }
      boxes.appendChild(fragment);
    }

function destroyBoxes() {
    boxes.innerHTML = "";
};

function random() {
      return Math.floor(Math.random() * 256);
    }

