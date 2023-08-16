const container = document.querySelector("#container");

function createGrid(x) {
  let grid;
  for (let rows = 1; rows <= x; rows++) {
    for (let cols = 1; cols <= x; cols++) {
      grid = document.createElement("div");
      container.appendChild(grid);
      grid.classList.add("grid");
    }
  }
  function setPixel() {
    console.log(this);
    this.style.backgroundColor = "black";
    //* this.setAttribute("style", "background-color:black;");
  }
  const squares = document.querySelectorAll(".grid");
  squares.forEach((square) => {
    // * ADD A WIDTH AND HEIGHT TO EACH GRID
    let dimensions = 700 / x;
    square.style.width = `${dimensions}px`;
    square.style.height = `${dimensions}px`;
    square.addEventListener("mouseover", setPixel);
  });
}

createGrid(16);
