// let colors = 
//     [
//     'rgb(244, 208, 63)', //amarillo --> index/posicion 0
//     'rgb(88, 214, 141)', //verde --> index/ posicion 1
//     'rgb(250, 219, 216)', //rosa --> index 2
//     'rgb(174, 214, 241)', //azul --> index 3
//     'rgb(187, 143, 206)', //lila --> index 4
//     'rgb(247, 249, 249)'] //gris --> index 5


var square = document.querySelectorAll('.square')
var textColorRGB = document.querySelector('#colorDisplay');
var pickedColor //= pickColor() 
var h1 = document.querySelector('h1');
var btnReset = document.getElementById('reset');
var btnEasy = document.getElementById('easy');
var btnHard = document.getElementById('hard');
var numberOfSquares = 6; //INICIA EN 6 SQUARES


function generateRandomColors(numberOfSquares) {
//                            ^cantidad de squares 
    for (let j = 0; j < numberOfSquares; j++) {
        console.log (square[j].style.background = randomColor());
    }
}
generateRandomColors(numberOfSquares) //ejecucion al iniciar la pagina en 6 squares con colores random


//evento click para cada square, donde se compara
for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click', function () {
        var clickedColor = square[i].style.background

        if (clickedColor !== textColorRGB.innerHTML) {
            square[i].style.background = '#232323';
            message.innerHTML = 'Intentalo Nuevamente';

        } else {
            message.innerText = '¡Correcto!';
            h1.style.background = textColorRGB.innerHTML;
            changeColors(textColorRGB.innerHTML);
            btnReset.innerHTML = 'Play Again!'
        }
    })
}


// pinta todos los squares del color ganador
function changeColors() {
    for (let h = 0; h < square.length; h++) {
        square[h].style.background = textColorRGB.innerHTML;
    }
}


//asignacion de color aleatorio d array 
function pickColor() {
    var indexRandomColor = square[(Math.floor(Math.random() * numberOfSquares))].style.background;
    return indexRandomColor
}
textColorRGB.innerHTML = pickColor(); //imprime rgb en encabezado


function randomColor(params) {
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
}

/**    FX BOTON RESET          */
btnReset.addEventListener('click', function () {
    generateRandomColors(numberOfSquares)
    textColorRGB.innerHTML = pickColor();
    h1.style.background = '#232323';
    btnReset.innerHTML = 'Nuevos Colores';
    message.innerHTML = '';
})

/**    FX BOTON EASY      */
btnEasy.addEventListener('click', function () {
    for (let t = 3; t < square.length; t++) {
        square[t].style.visibility = 'hidden';
    }
    h1.style.background = '#232323';
    numberOfSquares = 3;
    btnEasy.classList.add('selected');
    btnHard.classList.remove('selected');
    generateRandomColors(numberOfSquares);
    textColorRGB.innerHTML = pickColor();
    console.log('____________')

})

/**    FX BOTON HARD      */
btnHard.addEventListener('click', function () {
    for (let m = 0; m < square.length ; m++) {
        square[m].style.visibility = 'visible';
    }
    h1.style.background = '#232323'; //refresca background 
    btnHard.classList.add('selected');
    btnEasy.classList.remove('selected');
    numberOfSquares = 6;
    generateRandomColors(numberOfSquares); //generacion de 6 randoms color
    textColorRGB.innerHTML = pickColor();

})

//__________________________
