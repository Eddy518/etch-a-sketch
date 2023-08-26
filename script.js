const container = document.querySelector("#grid-container");
const resetBtn = document.querySelector("#reset-btn");
const colorPicker = document.querySelector("#color-picker");
const multiColorButton = document.querySelector("#multi-color-btn");
const fillRandomColorBtn = document.querySelector("#fill-random-color-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const outlineBtn = document.querySelector("#outline-boxes-btn");
const rainbowModeBtn = document.querySelector("#rainbow-colors-btn");
const defaultColorBtn = document.querySelector("#default-color-btn");
const clearBtn = document.querySelector("#clear-btn");
const gridSlider = document.querySelector("#grid-slider");
const gridSizeDisplay = document.querySelector("#grid-size-value");
gridSizeDisplay.textContent = gridSlider.value; // *DISPLAYS THE CURRENT VALUE

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
  this.classList.add("pixel");
}
function setDefaultColor() {
  const oldGrid = document.querySelectorAll("#grid");
  oldGrid.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "black";
    });
  });
}
function setRainbowMode() {
  const colorsArray = [
    "#ff0000",
    "#ffa500",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "4b0082",
    "#ee82ee",
  ];
  console.log(colorsArray[~~(Math.random() * colorsArray.length)]);
  const oldGrid = document.querySelectorAll("#grid");
  oldGrid.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.classList.remove("pixel"); // * REMOVES DEFAULT BLACK BACKGROUND COLOR
      grid.style.backgroundColor =
        colorsArray[~~(Math.random() * colorsArray.length)]; // * GENERATE A RANDOM COLOR
    });
  });
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
  console.log(e);
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
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const oldGrid = document.querySelectorAll("#grid");
  oldGrid.forEach((grid) => {
    grid.style.backgroundColor = "#" + randomColor;
  });
}

function getSize(e) {
  console.log(e);
  gridSizeDisplay.textContent = e.target.value;
  setTimeout(() => {
    const oldGrid = document.querySelectorAll("#grid");
    oldGrid.forEach((grid) => {
      grid.remove(); // * REMOVE THE OLD GRID BEFORE CREATING A NEW GRID
    });
    createGrid(e.target.value);
  }, 100); // * CREATE THE GRID AFTER 300MS
}
function resetGrid() {
  const oldGrid = document.querySelectorAll("#grid");
  oldGrid.forEach((grid) => {
    grid.remove();
  });
  createGrid(16);
}
function clearGrid() {
  const squares = document.querySelectorAll("#grid");
  squares.forEach((square) => {
    square.classList.remove("pixel");
    square.style.backgroundColor = "";
  });
}
resetBtn.addEventListener("click", resetGrid);
clearBtn.addEventListener("click", clearGrid);
fillRandomColorBtn.addEventListener("click", setRandomFillColor);
gridSlider.addEventListener("input", getSize);
multiColorButton.addEventListener("click", setRandomColor);
eraserBtn.addEventListener("click", setEraser);
outlineBtn.addEventListener("click", setOutline);
rainbowModeBtn.addEventListener("click", setRainbowMode);
defaultColorBtn.addEventListener("click", setDefaultColor);

createGrid(16);
colorPicker.addEventListener("change", setColor);
colorPicker.addEventListener("input", setColor);
colorPicker.addEventListener("click", setColor); // * APPLIES THE DEFAULT COLOR ON THE COLORPICKER TO THE GRID

// TODO ADD CODE TO RESET COLOR TO BLACK AFTER RANDOM COLOR MODE
// TODO FIX RETURN COLOR AFTER USING ERASER
// TODO FIX ERASER TO ERASE FILL COLOR WHEN USING FILL MODE
// TODO REMOVE PREVIOUS COLOR FROM PREVIOUS BUTTON WHEN NEW COLOR FROM NEW BUTTON IS ACTIVATED
//! ERASER
