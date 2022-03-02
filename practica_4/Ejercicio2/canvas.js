/*Realizar las siguientes figuras aplicando gradiente lineal de color y sombreado.
- Circulo, gradiente de 5 colores y sombreado en la esquina inferior izquierda

Nota: Los colores y sombreados los eligen ustedes, cabe recalcar que el sombreado debe notarse. */

var doc = document.getElementById('dibujo');
var lienzo = doc.getContext('2d');


function makegradiente(color1, color2, color3, color4, color5) {
    grad = lienzo.createLinearGradient(80, 80, 300, 300);
    grad.addColorStop(0, color1);
    grad.addColorStop(0.2, color2);
    grad.addColorStop(0.40, color3);
    grad.addColorStop(0.6, color4);
    grad.addColorStop(0.80, color5);
    return grad;
}


function circunferencia(x, y, radio, startAngule, finishAngule, gradiente) {
    lienzo.beginPath();
    lienzo.fillStyle = gradiente;
    lienzo.arc(x, y, radio, startAngule, finishAngule);
    lienzo.fill();
    lienzo.stroke();
    lienzo.closePath();
}


gradiente = makegradiente("green", "red", "blue", "purple", "yellow");

circunferencia(150, 150, 150, 0, 2 * Math.PI, gradiente);