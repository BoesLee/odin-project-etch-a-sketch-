const sketchGrid = document.getElementById("sketchGrid");
const sizeButton = document.getElementById("sizeButton");
const colorSwitch = document.getElementById("colorSwitch");
const darkeningEffect = Math.round((255/10));

let gridSize = 64;

function getGridSize(){
    sketchGrid.replaceChildren();
    gridSize = prompt("Choose any number between 1 and 100", 64);
    if( !Number(gridSize) || gridSize > 100 || gridSize < 1) {
        getGridSize();
    }
    buildGrid(gridSize);
}

function addSquare() {
    let blockSize = (86/ gridSize); // not 100% for "overflow" reasons
    let square = document.createElement("div");
    let ratio;
    // counts as "...a new grid should be generated in the same total space as before..."? right? right!
    // part of an example from https://w3c.github.io/screen-orientation/, with minor change after the '?'
    function getScreenOrientation() {
        return screen.orientation.type.startsWith("portrait") ? "portrait" : "landscape";
      }
    if (getScreenOrientation() == "portrait") {
        ratio = (screen.width / screen.height)
        square.style.height = `${(blockSize * ratio) * 0.86}vh`;
        square.style.aspectRatio = 1 / 1;
    }
    else {
        ratio = (screen.height / screen.width)
        square.style.width = `${(blockSize * ratio) * 0.86}vw`;
        square.style.aspectRatio = 1 / 1;
    }
    square.style.backgroundColor = "RGB(255, 255, 255)"
    square.classList = "square gridBorder";
    sketchGrid.appendChild(square);
}

function addRow() {
    let row = document.createElement("div");
    row.style.flexBasis = "100%";
    sketchGrid.appendChild(row);
}

function drawColor() {
    let elementsArray = document.querySelectorAll(".square");
    elementsArray.forEach((element) => element.addEventListener("mouseover",(event) => {
        if (colorSwitch.checked) {
            function randomNumber() {
                const min = 0;
                const max = 255;
                // A Proper Random Function, according to https://www.w3schools.com/JS/js_random.asp.
                let randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
                return randomNumber
            }
            let color = event.target.style.backgroundColor;
            let rgb = color.match(/\d+/g);
            event.target.style.backgroundColor = `rgb(${rgb[0] = randomNumber()}, ${rgb[1] = randomNumber()}, ${rgb[2] = randomNumber()})`;
        } 
        else {
            let color = event.target.style.backgroundColor;
            let rgb = color.match(/\d+/g);
            event.target.style.backgroundColor = `rgb(${rgb[0] - darkeningEffect}, ${rgb[1] - darkeningEffect}, ${rgb[2] - darkeningEffect})`;
        }
    }));
}

function buildGrid() {
    for( let i = 0; i < gridSize; i++) {
        for( let ii = 0; ii < gridSize; ii++) {
            addSquare();
        }
        addRow();
    }
    drawColor()
}

function main() {
    buildGrid(gridSize);
    colorSwitch.addEventListener('change', drawColor)
    sizeButton.addEventListener('click', getGridSize)
}
main()