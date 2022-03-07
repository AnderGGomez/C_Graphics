var d = document.getElementById('draw_one');
var lienzo = d.getContext('2d');

/**Anderson Gomez Gomez. */

function circunferencia (xPos, yPos, radio, inicioArc, finArc, borderColor, backColor){
    lienzo.strokeStyle = borderColor;
    lienzo.fillStyle=backColor;
    
    lienzo.lineWidth = 3;
    lienzo.beginPath();
    lienzo.arc(xPos, yPos, radio, inicioArc, finArc, true);
    lienzo.stroke();
    lienzo.fill();
    lienzo.closePath();
}

circunferencia(150, 150, 50, 0, 2*Math.PI, "black", "red");
