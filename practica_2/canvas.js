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

lienzo.fillStyle = "blue";
lienzo.strokeStyle = "black";
lienzo.lineWidth = 5;
lienzo.beginPath();
lienzo.moveTo(150,10);
lienzo.lineTo(10,290);
lienzo.lineTo(290,290);
lienzo.lineTo(150,10);
lienzo.stroke();
lienzo.fill();
lienzo.closePath();


//Arcos
// triangulo relleno
lienzo.fillStyle = "red";
lienzo.strokeStyle = "black";
lienzo.lineWidth = 5;
lienzo.beginPath();
lienzo.arc(100, 100, 60, 0, 3*Math.PI/2);
lienzo.lineTo(100,100);
lienzo.lineTo(160,100);
lienzo.stroke();
lienzo.fill();
lienzo.closePath();
