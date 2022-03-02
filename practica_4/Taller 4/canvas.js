/*Realizar las siguientes figuras aplicando gradiente lineal de color y sombreado.
- Cuadrado, gradiente de 4 colores y sombreado en la esquina inferior derecha
- Circulo, gradiente de 5 colores y sombreado en la esquina inferior izquierda
- Curva de Bezier, gradiente de dos colores y sombreado en la esquina superior izquierda
- Investigar como implementar una curva cuadrática, gradiente de 6 colores y sombreado en la esquina superior derecha.

Nota: Los colores y sombreados los eligen ustedes, cabe recalcar que el sombreado debe notarse. */

var doc = document.getElementById('dibujo');
var lienzo = doc.getContext('2d');



function makegradiente4(color1, color2, color3, color4) {
    grad = lienzo.createLinearGradient(10, 10, 300, 300);
    grad.addColorStop(0, color1);
    grad.addColorStop(0.25, color2);
    grad.addColorStop(0.50, color3);
    grad.addColorStop(0.75, color4);
    return grad;
}

function makegradiente5(color1, color2, color3, color4, color5) {
    grad = lienzo.createLinearGradient(80, 80, 300, 300);
    grad.addColorStop(0, color1);
    grad.addColorStop(0.2, color2);
    grad.addColorStop(0.40, color3);
    grad.addColorStop(0.6, color4);
    grad.addColorStop(0.80, color5);
    return grad;
}



function cuadrado(x, y, lado, gradiente) {
    lienzo.beginPath();
    lienzo.fillStyle = gradiente;
    lienzo.fillRect(x, y, lado, lado);
    lienzo.closePath();
}

function circunferencia(x, y, radio, startAngule, finishAngule, gradiente) {
    lienzo.beginPath();
    lienzo.fillStyle = gradiente;
    lienzo.arc(x, y, radio, startAngule, finishAngule);
    lienzo.fill();
    lienzo.stroke();
    lienzo.closePath();
}

function sombraInferiorDerecha(gradiente) {
    lienzo.beginPath();
    lienzo.shadowOffsetX = +30;
    lienzo.shadowOffsetY = +30;
    lienzo.shadowColor = "red";
    lienzo.shadowBlur = 15;
    cuadrado(10, 10, 100, gradiente);
    lienzo.closePath();
}


gradiente = makegradiente4("green", "red", "blue", "purple");
gradiente5 = makegradiente5("green", "red", "blue", "purple", "yellow")
    //sombraInferiorDerecha(gradiente);

circunferencia(150, 150, 150, 0, 2 * Math.PI, gradiente5);