var doc = document.getElementById('dibujo');
var lienzo = doc.getContext('2d');

lienzo.beginPath();
grad1 = lienzo.createLinearGradient(0, 0, 90, 90);
grad1.addColorStop(0, "red");
grad1.addColorStop(0.5, "yellow");
grad1.addColorStop(1, "black");

lienzo.fillStyle = grad1;
lienzo.fillRect(10, 10, 90, 90);
lienzo.closePath();



lienzo.beginPath()

lienzo.shadowOffsetX = -10;
lienzo.shadowOffsetY = -10;

lienzo.shadowColor = "red";
lienzo.shadowBlur = 6;
lienzo.fillStyle = "lime";
lienzo.fillRect(150, 150, 40, 40);

lienzo.closePath();