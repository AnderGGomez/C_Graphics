kaboom({
    width: 360,
    height: 360,
    global: true,
    fullscreen: true,
    scale: 1.0,
    //clearColor: [0,0,0,1],
    background:[0,0,0]
})



/**
 * Carga de Sprites.
 */
loadRoot('https://i.imgur.com/')
loadSprite('bloque','pogC9x5.png')
loadSprite('charlie','q08yku2.png')
loadSprite('mono1','5rvINjw.png')
loadSprite('mono2','lVzMkL9.png')

/**Carga de la escena de juego. */
scene("juego", ({score})=>{
    layers(['bg','obj','ui'],'obj')
    /**Creacion del mapa */
    const map = [
        '                               ',
        '                               ',
        '                               ',
        '                               ',
        '=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*',
        '                               ',
        '                               ',
        '                               ',
    ]
    /**definicion de los simbolos en el mapa*/
    const levelCfg = {
         width: 20,
         height: 20,
         '=': ()=>[rect(20,5), area(),solid()],
         '*': ()=>[rect(20,5), color(255,0,0),area(),solid()]
     }
    const gameLevel = addLevel(map, levelCfg)
    

    /**Constantes del juego */
    ENEMIE_SPEED = 100;
    WIDTH_MAP= 800;
    HEIGHT_MAP= 800;
    X1=-1200;
    X2=1200
    Y=800;
    const directions = {
        LEFT : "left",
        RIGHT: "right"
    }

    /**
     * Definicion de la escena lose, 
     * se muestran detalles de la puntuacion lograda
     * asi como los eventos necesarios para
     * empezar una nueva partida.
     */
    scene("lose", ({score})=>{
        add([
            text(`game over, \nyou score is: ${score}`),
            scale(0.5),
        ])
        add([
            text(`push enter for \nto play again.`),
            pos(0,100),
            scale(0.5),
        ])
        onKeyPress("enter",()=>{
            go("juego", ({score:0}))
        })
    })

    /**
     * variable que registra la puntuacion del juego en pantalla.
     */
    const puntuacion = add([
        text(score),
        pos(0,-120),
        scale(0.5),
        layer("ui",),
        {
            value: score,
        }

    ])

    /**
     * Definicion del personaje principal.
     */
    const charlie = add([
        sprite('charlie'), 
        pos(40,0),
        scale(0.6),
        solid(),
        area(),
        body()
    ])

    /**
     * Definicion del primer enemigo.
     */
    const mono =add ([
        sprite('mono1'),
        pos(460,60),
        scale(0.6),
        area(),
        body(),
        solid(),
        "mono",
        "enemy",
        {
            vel : ENEMIE_SPEED
        }
    ])

    /**
     * Definicion del segundo enemigo.
     */
    const mono2 =add ([
        sprite('mono1'),
        pos(200,60),
        scale(0.6),
        area(),
        body(),
        solid(),
        "salto",
        "enemy",
        {
            vel : ENEMIE_SPEED
        }
    ])

    function spawnMonoBlue(){
        add ([
            sprite("mono2"),
            pos(100,60),
            scale(0.6),
            area(),
            solid(),
            "move",
            "monoBlue",
            "enemy",
            {
                dir: true,
                vel:ENEMIE_SPEED*-1
            }
        ])
    }
    spawnMonoBlue();

    /**
     * Para cada frame el objeto con la etiqueta mono
     * ejerce un movimiento.
     */
    onUpdate("mono", (e) =>{
        e.move(e.vel,0);
        if(e.pos.x < 0){
            e.vel=ENEMIE_SPEED;
            e.flipX(true)
        }else if (e.pos.x>600){
            e.vel=ENEMIE_SPEED*-1;
            e.flipX(false)
 
        }
        if (e.vel<0){
            if(e.isGrounded())
                e.jump(400)
        }
        
    })

    /**
     * Para cada frame el objeto con la etiqueta salto
     * ejerce un salto.
     */
    onUpdate("salto", (e)=>{
        if(e.isGrounded()){
            e.jump(800)
        }
    })

    /**Cada 0.5s el objeto que tiene la etiqueta monoBlue, ejerce
     * un momvimiento de derecha a izquierda.
     */
    loop(0.5,()=>{
        every("monoBlue", (t)=>{
            if(t.dir==true){
                t.move(X1, t.pos.y-Y);
                t.dir=false;
            }else{
                t.move(X2, t.pos.y-Y);
                t.dir=true;
            }
            if(t.pos.y<-160){
                destroy(t);
                spawnMonoBlue();
            }else{

            }
        })


    })

    /** Se realizan acciones al detectar presion sobre las teclas 
     * right: movimiento hacia la derecha. 
     * left: movimiento hacia la izquierda.
     * space: salto.
     * */
    onKeyDown("right", ()=>{
        charlie.use(sprite("charlie")) //cambiar el sprite.
        charlie.move(150,0)
    })

    onKeyDown("left", ()=>{
        charlie.flipX(true)
        charlie.move(-150,0)
    })

    onKeyPress("space",()=>{
        if(charlie.isGrounded())
        charlie.jump(400)
    })

    /**La camara del juego sigue al personaje principal. */
    charlie.onUpdate(()=>{
        camPos(charlie.pos)
    })

    /**
     * Cuando el personaje principal, colicione con
     * un objeto que tenga la etiqueta enemy, desencadena
     * los evento de destruccion y cambio de escena.
     */
    charlie.onCollide("enemy", ()=>{
        destroy(charlie);
        
        wait(0.5, ()=>{
            
            go("lose",({score:puntuacion.value}));
        })
    })

    /**Cada segundo se llama a la funcion que actualiza
     * la puntuacion del juego.
     */
    loop(1,()=>{
        puntos();
    })
    
    /**
     * funcion que actualiza la puntuacion.
     */
    function puntos (){
        puntuacion.value += 1;
        puntuacion.text = puntuacion.value;
    }

})
go("juego", ({score:0}))