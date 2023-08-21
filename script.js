const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
const newGridButton = document.querySelector("#size");

function createGrid(size) {
  let grid;
  for (let rows = 1; rows <= size; rows++) {
    for (let cols = 1; cols <= size; cols++) {
      grid = document.createElement("div");
      container.appendChild(grid);
      grid.classList.add("grid");
      grid.setAttribute("id", "grid");
    }
  }
  const squares = document.querySelectorAll("#grid");
  squares.forEach((square) => {
    // * ADD A WIDTH AND HEIGHT TO EACH GRID
    let dimensions = 500 / size;
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
  // console.log("Create new grid has been called");
  const oldGrid = document.querySelectorAll("#grid");
  oldGrid.forEach((square) => square.remove()); // * REMOVE THE OLD GRID BEFORE CREATING A NEW GRID
  let newSquares = +prompt("Enter size of the new grid");
  if (newSquares < 100) {
    createGrid(newSquares);
  } else if (newSquares > 100) {
    // console.log(`type of newSquares is ${typeof newSquares}`);
    //console.log(`console.log ${newSquares}`);
    alert("Please select a number of 100 or below");
    newSquares = null; //* RESETS NEWSQUARE VARIABLE
    createNewGrid();
  } else {
    alert("invalid");
    newSquares = null;
    createNewGrid();
  }
}
function clearGrid() {
  //console.log("You clicked clear grid");
  const squares = document.querySelectorAll("#grid");
  squares.forEach((square) => {
    square.classList.remove("pixel");
  });
}
resetButton.addEventListener("click", clearGrid);
newGridButton.addEventListener("click", createNewGrid);
createGrid(16);
