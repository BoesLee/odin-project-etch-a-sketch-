const sketchGrid = document.getElementById("sketchGrid");
const darkeningEffect = Math.round((255/10));

let gridSize = 64; 
let blockSize = (99.9 / gridSize); // not 100% for overflow reasons
let ratio = window.innerWidth / window.innerHeight

function addSquare() {
    let square = document.createElement("div");
    // counts as "...a new grid should be generated in the same total space as before..."? right? right!
    square.style.width = `${blockSize /ratio}vw`;
    square.style.height = `${blockSize}vh`;
    square.style.backgroundColor = "RGB(255, 255, 255)"
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
elementsArray.forEach((element) => element.addEventListener("mouseover",(event) => {
        let color = event.target.style.backgroundColor;
        let rgb = color.match(/\d+/g);
        event.target.style.backgroundColor = `rgb(${rgb[0]-darkeningEffect}, ${rgb[1]-darkeningEffect}, ${rgb[2]-darkeningEffect})`;
    }
  ));