const container = document.getElementById("container");

function makeGrid(rows, cols) {

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div")
         cell.innerText = (c + 1)
         container.appendChild(cell).className = "grid-item"

         cell.addEventListener('mouseover',e => e.target.classList.add('designColor'))



         let currentColor = 'black'

const colors = { black: 'black' }

e => e.target.classList.add(colors[currentColor])
  }; 
};

makeGrid(16, 16)