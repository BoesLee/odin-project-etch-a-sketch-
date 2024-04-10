const gridSize = 16; 
const sketchGrid = document.getElementById("sketchGrid");

let blockSize = (99.9 / gridSize); // not 100% for overflow reasons
let ratio = window.innerWidth / window.innerHeight

function addSquare() {
    let square = document.createElement("div");
    square.style.width = `${blockSize /ratio}vw`;
    square.style.height = `${blockSize}vh`;
    square.classList = "square border";
    sketchGrid.appendChild(square);
}

function addRow() {
    let row = document.createElement("div");
    row.style.flexBasis = "100%";
    sketchGrid.appendChild(row);
}

for( let i = 0; i < gridSize; i++) {
    for( let ii = 0; ii < gridSize; ii++) {
        addSquare();
    }
    addRow();
}

let elementsArray = document.querySelectorAll(".square");
// console.log(elementsArray)
elementsArray.forEach((element) => element.addEventListener(
    "mouseover",
    (event) => {
        event.target.style.backgroundColor = "black";
    }
  ));