var d = document.getElementById('canvas');
var lienzo = d.getContext('2d');

titulo = "Animate";
cuerpo =    "Se define un componente SVG para el cual se definen las medidas de 300px por 300 px\
    . Dentro de el se dibuja una figura eliptica haciendo uso de la etiqueta <ellipse en la que \
    se especifica la posicion inicial en cordenadas cx e cy, adicionalmente los radios rx e ry,\
    de  manera opcional se puede establecer un color de relleno con fill='color'\
    Una vez se tiene la figura se hace uso de la etiqueta <set> \
    en la que se especifica el atributo que queremos animar con el parametro attributeName='fill',\
    en este caso sera el color de relleno , seguidamente y dentro de los atributos de la etiqueta\
    se especifica el color al que se va a cambiar con to='red' la duracion del cambio dur='7s', \
    y el instante en el que comenzara a surtir efecto con begin='0'. otros aspectos como el \
    volver al color inicial tambien pueden ser controaldor con fill='restore' ";

    <svg width="250" height="150">
            <ellipse cx="125" cy="75" rx="120" ry="70" fill="orange">
                <set attributeType="XML" attributeName="fill"
                to="red" dur="10s" begin="7s" fill="restore"/>
            </ellipse>
        </svg>

lienzo.beginPath();
lienzo.fillStyle='black';
lienzo.font='10px sans-serif';
lienzo.fillText(titulo, 10, 40);
ajustarTexto(cuerpo, 10, 900, 10, 50);

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

