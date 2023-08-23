const container = document.querySelector("#grid-container");
const resetBtn = document.querySelector("#reset-btn");
const newGridButton = document.querySelector("#size-btn");
const colorPicker = document.querySelector("#color-picker");
const multiColorButton = document.querySelector("#multi-color-btn");
const fillRandomColorBtn = document.querySelector("#fill-random-color-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const outlineBtn = document.querySelector("#outline-boxes-btn");

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
    square.addEventListener("mouseover", setPixel); // *DEFAULT SET BGCOLOR TO BLACK
  });
}
function setPixel() {
  // console.log(this);
  this.classList.add("pixel");
}
function setOutline() {
  const oldGrid = document.querySelectorAll("#grid");
  oldGrid.forEach((grid) => {
    grid.classList.toggle("grid-outline");
  });
}
function setEraser() {
  const oldGrid = document.querySelectorAll("#grid");
  oldGrid.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      //console.log(grid);
      grid.classList.remove("pixel");
      grid.style.backgroundColor = "transparent";
    });
  });
}
function setColor(e) {
  const oldGrid = document.querySelectorAll("#grid");
  oldGrid.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = e.target.value;
    });
  });
  // console.log(e);
}
function setRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const oldGrid = document.querySelectorAll("#grid");
  oldGrid.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "#" + randomColor;
    });
  });
}
function setRandomFillColor() {
  //console.log("clicked random colors btn");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const oldGrid = document.querySelectorAll("#grid");
  oldGrid.forEach((grid) => {
    grid.style.backgroundColor = "#" + randomColor;
  });
}

function createNewGrid() {
  // console.log("Create new grid has been called");
  const oldGrid = document.querySelectorAll("#grid");
  oldGrid.forEach((square) => square.remove()); // * REMOVE THE OLD GRID BEFORE CREATING A NEW GRID
  let newSquares = prompt("Enter size of the new grid");
  if (!(newSquares === null)) {
    Number(newSquares);
    if (newSquares < 100) {
      createGrid(newSquares);
    } else if (newSquares > 100) {
      console.log(`type of newSquares is ${typeof newSquares}`);
      console.log(`console.log ${newSquares}`);
      alert("Please select a number of 100 or below");
      newSquares = null; //* RESETS NEWSQUARE VARIABLE
      createNewGrid();
    } else {
      alert("invalid");
      newSquares = null;
      createNewGrid();
    }
  } else {
    createGrid(16); //* RESETS TO DEFAULT IF USER CLICKS CANCEL
  }
}
function clearGrid() {
  //console.log("You clicked clear grid");
  const squares = document.querySelectorAll("#grid");
  squares.forEach((square) => {
    square.classList.remove("pixel");
    square.style.backgroundColor = "";
  });
}
/* function showSelectedButton() {
  multiColorButton.setAttribute(
    "style",
    "backgound:rgb(96, 52, 36);color:burlywood;"
  );
}
*/
resetBtn.addEventListener("click", clearGrid);
fillRandomColorBtn.addEventListener("click", setRandomFillColor);
newGridButton.addEventListener("click", createNewGrid);
multiColorButton.addEventListener("click", setRandomColor);
eraserBtn.addEventListener("click", setEraser);
outlineBtn.addEventListener("click", setOutline);
/* * multiColorButton.addEventListener("click", showSelectedButton);*/

createGrid(16);
colorPicker.addEventListener("change", setColor);
colorPicker.addEventListener("input", setColor);
// TODO ADD CODE TO RESET COLOR TO BLACK AFTER RANDOM COLOR MODE
// TODO FIX RETURN COLOR AFTER USING ERASER
