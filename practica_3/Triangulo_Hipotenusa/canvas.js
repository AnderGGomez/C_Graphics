var d = document.getElementById('dibujo');
var lienzo = d.getContext('2d');

/**Anderson Gomez Gomez. */

/* inicializamos el trazo o lienzo */
function lineaRecta(xinicio, yinicio, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.moveTo(xinicio,yinicio);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.closePath();
}

function trianguloRectangulo (x, y, alto, ancho, color){
    lineaRecta(x,y,x+ancho,y);
    lienzo.lineWidth=1;
    lienzo.stroke();
    lineaRecta(x+ancho,y,x,y+alto);
    lienzo.lineWidth=5;
    lienzo.stroke();
    lineaRecta(x,y+alto,x,y)
    lienzo.lineWidth=1;
    lienzo.stroke();
    lienzo.fillStyle = "red";
    lienzo.fill();
    
}

trianguloRectangulo(100,100, 100, 100, "red");






//https://artradarjournal.com/paintings/canvas/how-to-use-multiple-canvas-in-html5/
