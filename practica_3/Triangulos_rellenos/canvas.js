var d = document.getElementById('dibujo');
var lienzo = d.getContext('2d');

/**Anderson Gomez Gomez. */

/* inicializamos el trazo o lienzo */
function dibujarTrianguloEquilatero(x,y,lado, color){
    lienzo.beginPath();
    lienzo.fillStyle = color;
    lienzo.strokeStyle="black";
    var altura = Math.sqrt(3)*lado/2;
    lienzo.moveTo(x,y);
    lienzo.lineTo(x+(lado*0.5), y+altura)
    lienzo.lineTo(x+lado,y)
    lienzo.lineTo(x,y);
    lienzo.stroke();
    lienzo.fill();
    lienzo.closePath();
}
dibujarTrianguloEquilatero(0,0,50,"blue");

function dibujarTrianguloIsoceles(x,y, largo, alto, color){
    lienzo.beginPath();
    lienzo.fillStyle= color;
    lienzo.strokeStyle="black";
    lienzo.moveTo(x,y);
    lienzo.lineTo(x+(largo*0.5), y+alto)
    lienzo.lineTo(x+largo,y)
    lienzo.lineTo(x,y);
    lienzo.stroke();
    lienzo.fill();
    lienzo.closePath();
}

dibujarTrianguloIsoceles(50,0,50,70, "green");

function dibujarTrianguloEscaleno(x_inicial,y_inicial, x_1, x_2, y_1, y_2, color){
    lienzo.beginPath();
    lienzo.fillStyle= color;
    lienzo.strokeStyle=color;
    lienzo.moveTo(x_inicial,y_inicial);
    lienzo.lineTo(x_1, y_1);
    lienzo.lineTo(x_2,y_2)
    lienzo.lineTo(x_inicial,y_inicial);

    lienzo.stroke();
    lienzo.fill();
    lienzo.closePath();
}

dibujarTrianguloEscaleno(0,150, 140, 90, 120,  80, "violet");





//https://artradarjournal.com/paintings/canvas/how-to-use-multiple-canvas-in-html5/
