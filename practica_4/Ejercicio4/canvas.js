/*Realizar las siguientes figuras aplicando gradiente lineal de color y sombreado.
- Cuadrado, gradiente de 4 colores y sombreado en la esquina inferior derecha
- Circulo, gradiente de 5 colores y sombreado en la esquina inferior izquierda
- Curva de Bezier, gradiente de dos colores y sombreado en la esquina superior izquierda
- Investigar como implementar una curva cuadrática, gradiente de 6 colores y sombreado en la esquina superior derecha.

Nota: Los colores y sombreados los eligen ustedes, cabe recalcar que el sombreado debe notarse. */


var doc = document.getElementById('dibujo');
var lienzo = doc.getContext('2d');



//Gradiente de 6 colores.
function makeGradiente (color1, color2, color3, color4, color5, color6){
    grad = lienzo.createLinearGradient(75,75,225,225);
    grad.addColorStop(0.16, color1);
    grad.addColorStop(0.32, color2);
    grad.addColorStop(0.48, color3);
    grad.addColorStop(0.64, color4);
    grad.addColorStop(0.80, color5);
    grad.addColorStop(1, color6);
    return grad;
}

gradiente = makeGradiente("red", "blue", "green", "yellow", "purple", "black");

function triangulo(pos){
    xInicial=pos[0];
    yInicial=pos[1];
    xFinal=pos[2];
    yFinal=pos[3];
    xCurve=pos[4];
    yCurve=pos[5];

    //lienzo.beginPath();
    lienzo.moveTo(xInicial,yInicial);
    lienzo.quadraticCurveTo(xCurve,yCurve,xFinal,yFinal);
    //lienzo.stroke();
    //lienzo.closePath();
}


function estrella (posiciones, gradiente){
    lienzo.beginPath();
    //Sombreado
    lienzo.shadowOffsetX = +10;
    lienzo.shadowOffsetY= -10;
    lienzo.shadowColor = "red";
    lienzo.shadowBlur = 15;


    lienzo.strokeStyle=gradiente;
    lienzo.lineWidth=5;
    for (let i = 0; i < posiciones.length; i++) {
        triangulo(posiciones[i]);
    }
    lienzo.stroke();
    lienzo.closePath();
}


let posiciones = [
    [100,100,200,100, 150, -50],
    [200,100,200,200, 350,150], 
    [200,200,100,200, 150,350],
    [100,200,100,100, -50,150]
]

estrella(posiciones, gradiente);

