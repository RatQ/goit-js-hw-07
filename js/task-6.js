function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsContainer = document.querySelector("#controls");
const containerBox = document.querySelector("#boxes");
const inputNumber = controlsContainer.querySelector("input");
const createBtn = controlsContainer.querySelector("[data-create]");
const destroyBtn = controlsContainer.querySelector("[data-destroy]");

createBtn.addEventListener("click", () => {
    const sum = Number(inputNumber.value);

    if (sum < 1 || sum > 100) {
        alert("Enter a number from 1 to 100!");
        return;
    }

    createBox(sum);
    inputNumber.value = "";  
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBox(sum) {
    const newBoxes = [];
    for (let i = 0; i < sum; i++) {
        const box = document.createElement("div");
        const sizeBox = 30 + i * 10;
        box.style.width = `${sizeBox}px`;
        box.style.height = `${sizeBox}px`;
        box.style.backgroundColor = getRandomHexColor();
        newBoxes.push(box);
    }

    containerBox.innerHTML = "";
    containerBox.append(...newBoxes);
}

    function destroyBoxes() {
        containerBox.innerHTML = "";
}