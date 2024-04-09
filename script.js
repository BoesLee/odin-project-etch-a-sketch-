const gridSize = 16;
let blockSize = (100 / gridSize) -0.1;
let ratio = window.innerWidth / window.innerHeight

function addRow() {
    let row = document.createElement("div");
    row.classList = "border";
    row.style.width = `${blockSize /ratio}vw`;
    row.style.height = `${blockSize}vh`;
    document.getElementById("grid").appendChild(row);
}

function addColumn() {
    let column = document.createElement("div");
    document.getElementById("grid").appendChild(column);
    column.style.flexBasis = "100%";
    grid.insertAdjacentElement("beforeend", column);
}

for( let i = 0; i < gridSize; i++) {
    for( let ii = 0; ii < gridSize; ii++) {
        addRow();
    }
    addColumn();
}
