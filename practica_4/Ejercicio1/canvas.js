/*Realizar las siguientes figuras aplicando gradiente lineal de color y sombreado.
- Cuadrado, gradiente de 4 colores y sombreado en la esquina inferior derecha

Nota: Los colores y sombreados los eligen ustedes, cabe recalcar que el sombreado debe notarse. */

var doc = document.getElementById('dibujo');
var lienzo = doc.getContext('2d');



function makegradiente(color1, color2, color3, color4) {
    grad = lienzo.createLinearGradient(20, 20, 100, 100);
    grad.addColorStop(0, color1);
    grad.addColorStop(0.25, color2);
    grad.addColorStop(0.50, color3);
    grad.addColorStop(0.75, color4);
    return grad;
}




function cuadrado(x, y, lado, gradiente) {
    lienzo.beginPath();
    lienzo.fillStyle = gradiente;
    lienzo.fillRect(x, y, lado, lado);
    lienzo.closePath();
}



function sombraInferiorDerecha(gradiente, x, y, lado) {
    lienzo.beginPath();
    lienzo.shadowOffsetX = +10;
    lienzo.shadowOffsetY = +15;
    lienzo.shadowColor = "red";
    lienzo.shadowBlur = 15;
    cuadrado(10, 10, 100, gradiente);
    lienzo.closePath();
}


gradiente = makegradiente("green", "yellow", "blue", "purple");
sombraInferiorDerecha(gradiente, 0, 0, 100);
