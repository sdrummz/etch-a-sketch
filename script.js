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
        const div = document.createElement('div');
        div.addEventListener('mouseover', switchColor)
        gridContainer.appendChild(div).className = 'boxes';
    }

}

// color switching function and buttons
const boxes = document.getElementsByClassName('boxes');
function switchColor() {
    if (boxColor === 'black' || boxColor === 'white') {
        this.style.backgroundColor = boxColor;
    } else if (boxColor === 'random-color') {
        this.style.backgroundColor = randomColor();
    } else if (boxColor === 'darken') {
        if (!this.style.backgroundColor.match(/rgba/)) {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        } else if (this.style.backgroundColor.match(/rgba/)) {
            let opacity = parseFloat(this.style.backgroundColor.split(',')[3]);
            if (opacity < 0.9) {
                this.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
                console.log(opacity + 0.1)
            } else if (opacity > 0.9) {
                this.style.backgroundColor = 'rgba(0, 0, 0, 1)';
            }
        }
    } else if (boxColor === 'input-color') {
        this.style.backgroundColor = inputColor.value;
    }
}

const black = document.querySelector('.black');
black.addEventListener('click', function() {
    boxColor = 'black';
})

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', function() {
    boxColor = 'white';
})

const random = document.querySelector('.random');
random.addEventListener('click', function() {
    boxColor = 'random-color';
    
})

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

const darken = document.querySelector('.darken');
darken.addEventListener('click', function() {
    boxColor = 'darken';
})

const inputColor = document.getElementById('input-color');
inputColor.addEventListener('click', function() {
    boxColor = 'input-color';
})



// changing grid size
slider.addEventListener('input', function() {
    size = slider.value;
    gridContainer.innerHTML = "";
    document.querySelector('.slide-value').innerHTML = size;
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