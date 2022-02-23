var d = document.getElementById('dibujo');
var lienzo = d.getContext('2d');

/**Anderson Gomez Gomez. */

//Arcos


function circunferencia (xPos, yPos, radio, inicioArc, finArc, borderColor, backColor, style){
    lienzo.strokeStyle = borderColor;
    lienzo.fillStyle = backColor;
    lienzo.lineWidth = 3;
    lienzo.beginPath();
    lienzo.arc(xPos, yPos, radio, inicioArc, finArc);
    
    lienzo.fill();
    switch (style){
        case 1:
            triangleBack(xPos-radio, yPos);
            break;
        case 2:
            circleBack(xPos, yPos);
            break;
        case 3:
            lineVerticalBack(xPos, yPos);
            break;
        case 4:
            lineHorizontallBack(xPos, yPos);
            break;
        default:
            break;
    }
    lienzo.stroke();
    lienzo.closePath();
}

function triangleBack(xInicio, yInicio){
    lienzo.moveTo(xInicio, yInicio);
    for (i = 0; i < 11 ; i++) {
        var dy = i % 2 == 0 ? 25 : -25;
        lienzo.lineTo(xInicio+i*40, yInicio + dy);
    }
}

function circleBack(xInicio, yInicio){
    lienzo.moveTo(xInicio, yInicio);
    for (i=1; i<5 ; i++){
        lienzo.arc(xInicio, yInicio, i*40, 0, 2*Math.PI);
    }
}

function lineVerticalBack(xInicio, yInicio){
    for(i=1; i<10; i++){
        lienzo.moveTo(xInicio-i*10, yInicio*i/5);
        lienzo.lineTo(xInicio+i*10, yInicio*i/5);
    }

}

function lineHorizontallBack(xInicio, yInicio){
    for(i=1; i<10; i++){
        lienzo.moveTo(xInicio-i*20, yInicio-i*10);
        lienzo.lineTo(xInicio-i*20, yInicio+i*10);
        lienzo.moveTo(xInicio+i*20, yInicio-i*10);
        lienzo.lineTo(xInicio+i*20, yInicio+i*10);
    }

}

circunferencia(500, 500, 500, 0, 2*Math.PI, "black", "white", 0);
circunferencia(200, 500, 200, 0, 2*Math.PI, "black", "red", 1);
circunferencia(800, 500, 200, 0, 2*Math.PI, "black", "green", 2);
circunferencia(500, 200, 200, 0, 2*Math.PI, "black", "blue", 3);
circunferencia(500, 800, 200, 0, 2*Math.PI, "black", "purple", 4);


//triangleBack(0, 500, 400, 500);