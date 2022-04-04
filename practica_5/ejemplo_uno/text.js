var d = document.getElementById('canvas');
var lienzo = d.getContext('2d');

titulo = "Animate";
cuerpo =    "Se define un componente SVG para el cual se establecen las medidas de 300px por 300 px\
    . Dentro de el se dibuja una figura rectangular haciendo uso de la etiqueta <rec en la que \
    se especifica la posicion inicial en cordenadas x e y, en este caso 10,10  y tendra un \
    ancho  y un alto de 80. Una vez se tiene la figura se hace uso de la etiqueta <animated> \
    por la cual se animara en este caso respecto a uno de sus atributos el eje horizontal X con attributeName='x',\
    seguidamente y dentro de los atributos de la etiqueta se especifica la posicion inicial (from='10') del desplazamiento \
    y la posicion final (to='180'), la duracion de la animacion (dur='3s') y el instante en el que comenzara \
    a surtir efecto (begin='0'). otro aspectos como el periodo de la animacion tambien fill='restore' repeatCount='indefinite'\
    son controlados desde esta etiqueta.";

lienzo.beginPath();
lienzo.fillStyle='black';
lienzo.font='20px sans-serif';
lienzo.fillText(titulo, 10, 40);
ajustarTexto(cuerpo, 25, 500, 10, 50);

lienzo.closePath();


function ajustarTexto (cuerpo, altura, ancho, x, y){
    let palabras = cuerpo.split(" ");
    let cadena = "";
    for (let index = 0; index < palabras.length; index++) {
        let linea  = cadena + palabras[index] + " ";
        textWidth = lienzo.measureText(linea).width;
        if (textWidth > ancho && index > 0 || palabras.length-1== index){
            console.log(250)
            lienzo.fillText(cadena, x, y)
            cadena = palabras[index]+" ";
            y+= altura;
        }else{
            cadena = linea;
        }
        
    }
}

