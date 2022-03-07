var d = document.getElementById('dibujo');
var lienzo = d.getContext('2d');

/* *
* Halle la magnitud y dirección de los siguientes vectores; dibuje en canva el plano
* cartesiano, el vector y la dirección.
* a. V= (4,6)
* b. V= (-40,40)
* c. V= (2,-4)
*/



function dibujarPlano(){
    lienzo.beginPath();
    lienzo.lineWidth=3;
    lienzo.moveTo(0,250);
    lienzo.lineTo(500,250);

    lienzo.moveTo(250,0);
    lienzo.lineTo(250,500);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarLinea(xinicial, yinicial, xVector, yVector, borderColor ){
    yVector=yVector*5;
    xVector=xVector*5;
    lienzo.beginPath();
    lienzo.strokeStyle=borderColor;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xinicial+xVector, yinicial-yVector);
    lienzo.stroke();
    lienzo.closePath();
}

function circunferencia (xPos, yPos, radio, inicioArc, finArc, borderColor){
    let radFinArc = finArc*(Math.PI/180);
    lienzo.strokeStyle = borderColor;
    lienzo.lineWidth = 3;
    lienzo.beginPath();
    lienzo.arc(xPos, yPos, radio, inicioArc, -radFinArc, true);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarPlano();
dibujarLinea(250,250,4,6, "blue");
circunferencia(250,250,6*5,0, 56.31, "blue");

dibujarLinea(250,250,-40,40, "red");
circunferencia(250,250,40*5,0, 135, "red");

dibujarLinea(250,250,2,-4, "purple");
circunferencia(250,250,4*5,0, 296.57, "purple");

