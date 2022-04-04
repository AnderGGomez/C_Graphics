var d= document.getElementById('Dibujo')
var lienzo = d.getContext('2d')
/*
//figuras y transparencias
//cuadrado
lienzo.beginPath()
lienzo.fillStyle="red"
lienzo.StrokeStyle="black"
lienzo.lineWidth=10
lienzo.globalAlpha=0.7 // transparencia
lienzo.strokeRect(10,10,90,90)
lienzo.fillRect(10,10,90,90)
lienzo.closePath()

//circulo
lienzo.beginPath()
lienzo.fillStyle="blue"
lienzo.strokeStyle="black"
//lienzo.lineWidth=10
lienzo.globalAlpha= 0.9 // transparencia los valores van de 0 a 1 donde 1 es quitar la transparencia
lienzo.arc(100,100,50,0,2*Math.PI)
lienzo.stroke()
lienzo.fill()
lienzo.closePath()
*/

/* concepto
lienzo.fillText("texto",x,y)// dibujo del texto
lienzo.strokeText("texto",x,y) // dibujo del texto dejando hueco en la forma de la letra
//tamaño y estilo
lienzo.font="bold  12px arial"


texto="Computación Grafica"
lienzo.beginPath()
lienzo.fillStyle="red"
lienzo.strokeStyle="blue"
lienzo.font = "bold 20px arial"
lienzo.strokeText(texto,10,30)
lienzo.fillText(texto,10,140)
lienzo.strokeText(texto,10,140)
lienzo.fillText(text,10,140)*/
/*
lienzo.beginPath()
lienzo.fillStyle="red"
lienzo.strokeStyle="blue"
lienzo.moveTo(50,0)
lienzo.lineTo(50,200)
for (i=30; i <=180; i+=30){
    lienzo.moveTo(0,i)
    lienzo.lineTo(200,i)
}

lienzo.stroke()
lienzo.font="14px arial"

//estilos de alineacion horizontal

lienzo.textAlign="start | end | left | right | center"

// alineaciones verticales

lienzo.textBaseline="top | middle | bottom | hanging | alphabetic | ideographic"

top: el punto de referencia queda encima del exto, por lo que este se vera debajo de el

middle: el punto de referencia queda en medio del texto, por lo que este se vera centrado verticalmente

bottom: el punto de referencia queda debajo del texto, por lo que este se ve encima de el



lienzo.textAlign="start"
lienzo.fillText("start",50,30)
lienzo.textAlign="end"
lienzo.fillText("end",50,60)
lienzo.textAlign="left"
lienzo.fillText("left",50,90)
lienzo.textAlign="right"
lienzo.fillText("right",50,120)
lienzo.textAlign="center"
lienzo.fillText("center",50,150)
//lienzo.textAlign="start"


imagen1=document.images.imagen; // buscar la imagen
imagen2=document.images.imagen2
lienzo.beginPath()
lienzo.drawImage(imagen1,10,10) // interpreta la imagen fuera del canvas
lienzo.drawImage(imagen2,10,10) // interpreta la imagen dentro del canvas*/