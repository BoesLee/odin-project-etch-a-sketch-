const sketchGrid = document.getElementById("sketchGrid");
const sizeButton = document.getElementById("sizeButton");
const darkeningEffect = Math.round((255/10));

let gridSize = 16;
buildGrid(gridSize);

sizeButton.addEventListener('click', getGridSize)
function getGridSize(){
    sketchGrid.replaceChildren();
    gridSize = prompt("SIZE", 16);
    if( !Number(gridSize) || gridSize > 100 || gridSize < 1) {
        getGridSize();
    }
    buildGrid(gridSize);
}

function getScreenOrientation() {
    return screen
      .orientation
      .type
      .startsWith("portrait") ? "portrait" : "landscape";
  }
  console.log(getScreenOrientation())

function addSquare() {
    let blockSize = (87.6/ gridSize); // not 100% for overflow reasons
    let square = document.createElement("div");
    let ratio;
    // counts as "...a new grid should be generated in the same total space as before..."? right? right!
    if (getScreenOrientation() == "portrait") {
        ratio = (screen.width / screen.height)
        console.log(ratio)
        square.style.height = `${(blockSize * ratio) * 0.855}vh`;
        square.style.aspectRatio = 1 / 1;
    }
    else {
        ratio = (screen.height / screen.width)
        console.log(ratio)
        square.style.width = `${(blockSize * ratio) * 0.855}vw`;
        square.style.aspectRatio = 1 / 1;
    }
    square.style.backgroundColor = "RGB(255, 255, 255)"
    square.classList = "square border";
    sketchGrid.appendChild(square);
}

function addRow() {
    let row = document.createElement("div");
    row.style.flexBasis = "100%";
    sketchGrid.appendChild(row);
}

function buildGrid() {
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
}


