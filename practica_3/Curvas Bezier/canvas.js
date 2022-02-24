var d = document.getElementById('dibujo');
var lienzo = d.getContext('2d');

/**Anderson Gomez Gomez. */

//Curvas de Bezier.




function circunferencia(x,y, radio, inicioArc, finArc){
    lienzo.fillStyle="yellow";
    lienzo.beginPath();
    lienzo.arc(x,y,radio,inicioArc, finArc);
    lienzo.stroke();
    lienzo.fill();
    lienzo.closePath();
}


function petalo (x,y, radio,radianInicio, radiaFinal, ancho, largo, ancho1, largo1){
    lienzo.beginPath();
    lienzo.moveTo(x+radio*Math.cos(radianInicio), y+radio*Math.sin(radianInicio));
    lienzo.bezierCurveTo(x-ancho,y-largo,x+ancho1,y+largo1,x+radio*Math.cos(radiaFinal), y+radio*Math.sin(radiaFinal));
    lienzo.stroke();
    lienzo.closePath();
}



//Circunferencia

circunferencia(150,150, 30,0,2*Math.PI);


//Up
petalo(150, 150, 30, 7*Math.PI/6, 11*Math.PI/6, 15, 100, 15, -100);

//down
petalo(150, 150, 30, 5*Math.PI/6, Math.PI/6, 15, -100, 15, 100)

//rigth
petalo(150, 150, 30, 5*Math.PI/3, Math.PI/3,-100, 15, 100, 15);

//letf
petalo(150, 150, 30, 4*Math.PI/3, 2*Math.PI/3,100, 15, -100, 15);


////tallo
lienzo.beginPath();
lienzo.strokeStyle="green"
lienzo.lineWidth=3;
lienzo.moveTo(150+30*Math.cos(3*Math.PI/4), 150+30*Math.sin(3*Math.PI/4));
lienzo.quadraticCurveTo(100,280, 200, 300);
lienzo.stroke();
lienzo.closePath();
