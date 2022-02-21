var d = document.getElementById('dibujo');
var lienzo = d.getContext('2d');


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

dibujarLinea(0,0,300,300, "red");
dibujarLinea(0,300,300,0, "red");