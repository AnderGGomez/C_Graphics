var d = document.getElementById('dibujo');
var lienzo = d.getContext('2d');

/**Anderson Gomez Gomez. */

/* inicializamos el trazo o lienzo */

function dibujarLinea (xInicial, yInicial, xFinal, yFinal, color){
    lienzo.beginPath();
    /* color de la linea */
    lienzo.strokeStyle = color;

    /* Coordenada inicial para el trazo */
    lienzo.moveTo(xInicial,yInicial);

    /* Coordenada final para el trazo */
    lienzo.lineTo(xFinal, yFinal);

    /* Funcion para dibujar la linea */
    lienzo.stroke();

    /* Cierre del trazo */
    lienzo.closePath();
}


function dibujarRectanguo(x,y,ancho, alto, color){
    lienzo.beginPath();

    lienzo.strokeStyle=color;

    lienzo.moveTo(x,y);

    lienzo.lineTo(x, y+alto);
    lienzo.lineTo(x+ancho, y+alto);
    lienzo.lineTo(x+ancho,y);
    lienzo.lineTo(x,y);
    lienzo.stroke();
    lienzo.closePath();
    
}
//Dibujar cuadrados o rectangulos
dibujarRectanguo(0,0,50,50,"red");


function dibujarTrianguloEquilatero(x,y,largo, color){
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    var altura = Math.sqrt(3)*largo/2;


    lienzo.moveTo(x,y);
    lienzo.lineTo(x+(largo*0.5), y+altura)
    lienzo.lineTo(x+largo,y)
    lienzo.lineTo(x,y);

    lienzo.stroke();
    lienzo.closePath();
}
dibujarTrianguloEquilatero(0,0,50,"blue");

function dibujarTrianguloIsoceles(x,y, largo, alto, color){
    lienzo.beginPath();
    lienzo.strokeStyle=color;

    lienzo.moveTo(x,y);
    lienzo.lineTo(x+(largo*0.5), y+alto)
    lienzo.lineTo(x+largo,y)
    lienzo.lineTo(x,y);

    lienzo.stroke();
    lienzo.closePath();
}

dibujarTrianguloIsoceles(0,0,50,70, "green");

function dibujarTrianguloEscaleno(x_inicial,y_inicial, x_1, x_2, y_1, y_2, color){
    lienzo.beginPath();
    lienzo.strokeStyle=color;

    lienzo.moveTo(x_inicial,y_inicial);
    lienzo.lineTo(x_1, y_1);
    lienzo.lineTo(x_2,y_2)
    lienzo.lineTo(x_inicial,y_inicial);

    lienzo.stroke();
    lienzo.closePath();
}

dibujarTrianguloEscaleno(0,0, 150, 120, 100,  20, "violet");