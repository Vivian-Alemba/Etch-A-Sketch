const container = document.getElementById("container");

function makeGrid(rows, cols) {

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (t = 0; t < (rows * cols); t++) {
    let cell = document.createElement("div")
         cell.innerText = (t + 1)
         container.appendChild(cell).className = "grid-item"

         cell.addEventListener('mouseover',e => e.target.classList.add('designColor'))



         
  }; 
};

makeGrid(16, 16)