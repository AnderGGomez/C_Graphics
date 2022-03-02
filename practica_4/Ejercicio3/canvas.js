/*Realizar las siguientes figuras aplicando gradiente lineal de color y sombreado.
- Curva de Bezier, gradiente de dos colores y sombreado en la esquina superior izquierda

Nota: Los colores y sombreados los eligen ustedes, cabe recalcar que el sombreado debe notarse. */

var doc = document.getElementById('dibujo');
var lienzo = doc.getContext('2d');



function makegradiente(color1, color2, min, max) {
    grad = lienzo.createLinearGradient(0, 0, 300, 300);
    grad.addColorStop(min, color1);
    grad.addColorStop(max, color2);
    return grad;
}

function circunferencia(x,y, radio, inicioArc, finArc, gradiente){
    lienzo.fillStyle=gradiente;
    lienzo.beginPath();
    lienzo.arc(x,y,radio,inicioArc, finArc);
    lienzo.stroke();
    lienzo.fill();
    lienzo.closePath();
}


function petalo (x,y, radio,radianInicio, radiaFinal, ancho, largo, ancho1, largo1){
    //lienzo.beginPath();
    //lienzo.fillStyle=gradiente;
    lienzo.moveTo(x+radio*Math.cos(radianInicio), y+radio*Math.sin(radianInicio));
    lienzo.bezierCurveTo(x-ancho,y-largo,x+ancho1,y+largo1,x+radio*Math.cos(radiaFinal), y+radio*Math.sin(radiaFinal));
    //lienzo.stroke();
    //lienzo.fill();
    //lienzo.closePath();
}

function makePetalos (gradientePetalo, x, y, radio){
    lienzo.beginPath();
    lienzo.fillStyle=gradientePetalo;

    //up
    petalo(x, y, radio, 7*Math.PI/6, 11*Math.PI/6, 15, 100, 15, -100);

    //down
    petalo(x, y, radio, 5*Math.PI/6, Math.PI/6, 15, -100, 15, 100)

    //rigth
    petalo(x, y, radio, 5*Math.PI/3, Math.PI/3,-100, 15, 100, 15);

    //letf
    petalo(x, y, radio, 4*Math.PI/3, 2*Math.PI/3,100, 15, -100, 15);

    lienzo.stroke();
    lienzo.fill();
    lienzo.closePath();
}

function sombraInferiorDerecha(gradientePetalo, gradienteCircunferencia, x, y, radio) {
    lienzo.beginPath();
    lienzo.shadowOffsetX = +10;
    lienzo.shadowOffsetY = -10;
    lienzo.shadowColor = "red";
    lienzo.shadowBlur = 1;

    makePetalos(gradientePetalo, x, y, radio);

    circunferencia(x, y, radio, 0, 2 * Math.PI, gradienteCircunferencia);

    lienzo.closePath();
}


gradientePetalo         = makegradiente("#233CFB", "orange", 0.35, 0.6 );

gradienteCircunferencia = makegradiente("yellow", "#FB7523", 0.4, 0.6);

sombraInferiorDerecha(gradientePetalo, gradienteCircunferencia, 150, 150, 30);



