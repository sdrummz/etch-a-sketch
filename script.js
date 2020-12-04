'use strict';

const gridContainer = document.querySelector('.grid-container');
const slider = document.querySelector('.slider')
let size = document.querySelector('.slider').value;
let boxColor = 'black';

// function to create the grid
function createGrid(size) {
    gridContainer.style.setProperty('--grid-rows', size);
    gridContainer.style.setProperty('--grid-cols', size);
    for (let i = 0; i < (size * size); i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = switchColor();
        })
        gridContainer.appendChild(div).className = 'boxes';
    }

}

// color switching function and buttons
let boxes = document.getElementsByClassName('boxes');
function switchColor() {
    if (boxColor === 'black' || boxColor === 'white') {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener('mouseover', function() {
                this.style.backgroundColor = boxColor;
            })
        }
    } else if (boxColor === 'random-color') {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener('mouseover', function() {
                this.style.backgroundColor = randomColor();
            })
        }
    }
}

let black = document.querySelector('.black');
black.addEventListener('click', function() {
    boxColor = 'black';
    switchColor();
})

let eraser = document.querySelector('.eraser');
eraser.addEventListener('click', function() {
    boxColor = 'white';
    switchColor();
})

let random = document.querySelector('.random');
random.addEventListener('click', function() {
    boxColor = 'random-color';
    switchColor();
})

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}



// changing grid size
slider.addEventListener('input', function() {
    size = slider.value;
    gridContainer.innerHTML = "";
    createGrid(size);

})

// reset grid
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function() {
    gridContainer.innerHTML = "";
    createGrid(size);
})


// initialize
createGrid(size);