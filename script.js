const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
const newGridButton = document.querySelector("#size");

function createGrid(x) {
  let grid;
  for (let rows = 1; rows <= x; rows++) {
    for (let cols = 1; cols <= x; cols++) {
      grid = document.createElement("div");
      container.appendChild(grid);
      grid.classList.add("grid");
      grid.setAttribute("id", "grid");
    }
  }
  const squares = document.querySelectorAll("#grid");
  squares.forEach((square) => {
    // * ADD A WIDTH AND HEIGHT TO EACH GRID
    let dimensions = 700 / x;
    square.style.width = `${dimensions}px`;
    square.style.height = `${dimensions}px`;
    square.addEventListener("mouseover", setPixel);
  });
}
function setPixel() {
  // console.log(this);
  this.classList.add("pixel");
}
function createNewGrid() {
  console.log("Create new grid has been called");
  const oldGrid = document.querySelectorAll("#grid");
  oldGrid.forEach((square) => square.remove());
  const newSquares = +prompt("Enter size of the new grid");
  createGrid(newSquares);
}
newGridButton.addEventListener("click", createNewGrid);
createGrid(16);
