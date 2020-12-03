'use strict';

const gridContainer = document.querySelector('.grid-container');
let gridSize = 25;

// function to create the grid
function createGrid(gridSize) {
    gridContainer.style.setProperty('--grid-rows', gridSize)
    gridContainer.style.setProperty('--grid-cols', gridSize)
    for (let i = 0; i < (gridSize * gridSize); i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'black';
        })
        gridContainer.appendChild(div).className = 'grid-divs';
    }

}



createGrid(gridSize);