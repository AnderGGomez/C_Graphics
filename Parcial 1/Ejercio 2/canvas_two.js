var d = document.getElementById('draw_two');
var lienzo = d.getContext('2d');

function makegradiente(color1, color2, color3) {
    grad = lienzo.createLinearGradient(0, 0, 300, 300);
    grad.addColorStop(0, color1);
    grad.addColorStop(0.5, color2);
    grad.addColorStop(1, color3);
    return grad;
}

lienzo.beginPath();
gradiente=makegradiente("red","blue","yellow")
lienzo.fillStyle=gradiente;
lienzo.fillRect(30,30, 250, 250);
lienzo.fill();
lienzo.closePath();
