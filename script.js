'use strict';

const gridContainer = document.querySelector('.grid-container');
const slider = document.querySelector('.slider')
let sliderValue = document.querySelector('.slider').value;

const defaultGridSize = sliderValue;
let gridSize = defaultGridSize;

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

slider.addEventListener('input', function() {
    sliderValue = slider.value;
    gridContainer.innerHTML = "";
    createGrid(sliderValue);

})

console.log(gridSize)
createGrid(gridSize);