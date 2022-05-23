let colors = 
    [
    'rgb(244, 208, 63)', //amarillo --> index/posicion 0
    'rgb(88, 214, 141)', //verde --> index/ posicion 1
    'rgb(250, 219, 216)', //rosa --> index 2
    'rgb(174, 214, 241)', //azul --> index 3
    'rgb(187, 143, 206)', //lila --> index 4
    'rgb(247, 249, 249)']; //gris --> index 5


var square = document.querySelectorAll('.square');
var textColorRGB = document.getElementById('colorDisplay');
var pickedColor = pickColor()//colors [0]; //'rgb(244, 208, 63)'  Más adelante, la Variable tendrá un color aleatorio (seleccionado del Arreglo)
var h1 = document.querySelector('h1');
console.log('pickedColor ' + pickedColor)


for (var iterador = 0; iterador < square.length ; iterador++) { //recorre array square y asigna un color
        square[iterador].style.backgroundColor = colors[iterador];
 }

textColorRGB.textContent = pickedColor//randomColor(); // textColor es igual al RGB randomizado probar con innerHTML
// pickedColor = textColorRGB.textContent;
console.log(pickedColor)
console.log(textColorRGB.textContent)


 // pinta todos los squares del color ganador
function changeColors(unColor) {
    for (var iterador = 0; iterador < square.length ; iterador++ ) {
        square[iterador].style.backgroundColor = unColor; //textColorRGB.
    }  
}

//asignacion de color aleatorio del array colors
function pickColor(params) {

    var indexRandomColor
    indexRandomColor = Math.floor(Math.random() * square.length) 

    pickedColor = colors[indexRandomColor]; 
    return pickedColor //colors[index]

    // return  colors[indexRandomColor]

    // console.log(colors[indexRandomColor])
    // indexRandomColor
    // console.log(indexRandomColor)
    // console.log(square[indexRandomColor])
    // console.log('resultado ' + indexRandomColor)
}


function randomColor(params) {
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    // console.log('esto es un color rgb random ' + 'rgb('+red+', '+green+', '+blue+')')
    return 'rgb('+red+', '+green+', '+blue+')'
}


var newArrayColors = []
// colors = []
function generateRandomColors(numeroArraySquare6) {
    
    for (var iterador = 0 ; iterador < square.length ; iterador++) {
        newArrayColors.push(randomColor())   
    }
    //console.log(newArrayColors)
    return newArrayColors
}
generateRandomColors()

console.log('L73 ' + newArrayColors)




var square0 = square[0].addEventListener('click', function () {
    var clickedColor = colors[0];

    if ( pickedColor !== clickedColor ) {
        square[0].style.backgroundColor = '#232323';
        message.textContent = 'Intentalo Nuevamente';
    
    } else { 
        message.innerText = '¡Correcto!';
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor);
        // console.log('esto esta imprimiendo  ' +  pickedColor);  
    }
})

var square1 = square[1].addEventListener('click', function () {
    var clickedColor = colors[1];

    if ( pickedColor !== clickedColor ) {
        square[1].style.backgroundColor = '#232323';
        message.textContent = 'Intentalo Nuevamente';
    
    } else { 
        message.innerText = '¡Correcto!';
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor);
        // console.log('esto esta imprimiendo  ' +  pickedColor);  
    }
})

var square2 = square[2].addEventListener('click', function () {
    var clickedColor = colors[2];

    if ( pickedColor !== clickedColor ) {
        square[2].style.backgroundColor = '#232323';
        message.textContent = 'Intentalo Nuevamente';
    
    } else { 
        message.innerText = '¡Correcto!';
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor);
        // console.log('esto esta imprimiendo  ' +  pickedColor);  
    }
})



