var d = document.getElementById('dibujo');
var lienzo = d.getContext('2d');



function dibujarTriangulo(x_inicial,y_inicial, x_1,y_1, x_2,y_2, color){
    lienzo.beginPath();
    lienzo.fillStyle= color;
    lienzo.strokeStyle=color;
    lienzo.moveTo(x_inicial,y_inicial);
    lienzo.lineTo(x_1, y_1);
    lienzo.lineTo(x_2,y_2)
    lienzo.lineTo(x_inicial,y_inicial);
    lienzo.stroke();
    lienzo.fill();
    lienzo.closePath();
}

dibujarTriangulo(100,100, 150, 50, 200, 150, "red");
dibujarTriangulo(150,50, 200, 0, 250, 100, "black");
dibujarTriangulo(150,50, 250, 100, 200, 150, "yellow");
dibujarTriangulo(200,150, 250, 100, 300, 200, "blue");


lienzo.beginPath();
lienzo.strokeStyle="black";
lienzo.moveTo(200,0);
lienzo.lineTo(210, 0);
lienzo.lineTo(310,190)
lienzo.lineTo(300,200);
lienzo.moveTo(250,100);
lienzo.lineTo(260, 90);
lienzo.stroke();
lienzo.closePath();