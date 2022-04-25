kaboom({
    width: 360,
    height: 360,
    global: true,
    fullscreen: true,
    scale: 1.0,
    clearColor: [0,0,0,1],
})



/**
 * Carga de Sprites.
 */
loadRoot('https://i.imgur.com/')
loadSprite('bloque','pogC9x5.png')
loadSprite('marioDer','CtLdqAd.png')
loadSprite('marioIzq', 'Jn6wQoo.png')
loadSprite('enemigo','C90Lmfl.png')
loadSprite('enemigo2','kcF4pyj.png')
loadSprite('tortuga1', 'TCvlZ3d.png')
loadSprite('tortuga2', '9HBzqO1.png')

/**Carga de la escena de juego. */
scene("juego", ()=>{
    layers(['bg','obj','ui'],'obj')
    /**Creacion del mapa */
    const map = [
        '                               ',
        '                               ',
        '                               ',
        '            =                  ',
        '=                              ',
        '                     =         ',
        '                               ',
        '========================   ====',
    ]
    /**definicion de los simbolos en el mapa*/
    const levelCfg = {
         width: 20,
         height: 20,
         '=': ()=>[sprite('bloque'), area(),solid()]
     }
    const gameLevel = addLevel(map, levelCfg)
    

    /**Constantes del juego */
    ENEMIE_SPEED = 100;
    const directions = {
        LEFT : "left",
        RIGHT: "right"
    }
    const enemie_animations=["enemigo", "enemigo2"];
    const tortuga_animations=["tortuga1", "tortuga2"];

    /**Creacion del objeto mario. 
     * sprite() : Se define un sprite por defecto.
     * pos()    : Determina la posicion del objeto.
     * scale()  :
     * solid()  : Haz que otros objetos no puedan pasar. 
     *              Requiere compensación de "área".
     * 
     * area()   : Genera un área colisionadora a partir 
     *              de la forma y permite la detección 
     *              de colisiones.
     * 
     * body()   : Cuerpo físico que responde a la gravedad. 
     *              Requiere los componentes de "área()" y "pos()". 
     *              Esto también hace que el objeto sea "sólido".
    */
    const mario = add([
        sprite('marioDer'), 
        pos(90,0),
        scale(1),
        solid(),
        area(),
        body()
    ])

    /** Creacion del enemigo hongo.
     * sprite_frame: posicion inicial del vector de animaciones para el hongo.
     * vel: velocida del objeto.
     */
    const hongo =add ([
        sprite('enemigo'),
        pos(460,0),
        scale(1),
        area(),
        body(),
        solid(),
        "hongo",
        {
            sprite_frame: 0,
            vel : ENEMIE_SPEED
        }
    ]) 


    /**la funcion crea una tortuga cada que es llamada,
     * la manera de interactuar con esta tortugar es por tags.
     */
    function spawnTortuga(){
        add ([
            sprite("tortuga1"),
            pos(460,0),
            scale(1),
            area(),
            body(),
            solid(),
            "move",
            "tortuga",
            {
                sprite_frame:0,
                vel:ENEMIE_SPEED*-1
            }
        ])
    }
    spawnTortuga();

    /**Registre un evento que se ejecute cada cuadro 
     * (~60 veces por segundo) para todos los objetos 
     * del juego con cierta etiqueta.
     * 
     * El evento que se esta rastreando es el tag:hongo
     * 
     * cada que halla una actualizacion el objeto se movera.
     * 
     * cuando llegue al limite del mapa cambiara de direccion.
     * */
    onUpdate("hongo", (e) =>{
        e.move(e.vel,0);
        if(e.pos.x < 0){
            e.vel=ENEMIE_SPEED;
        }else if (e.pos.x>460){
            e.vel=ENEMIE_SPEED*-1;
        }

    })


    /**Registre un evento que se ejecute cada cuadro 
     * (~60 veces por segundo) para todos los objetos 
     * del juego con cierta etiqueta.
     * 
     * El evento que se esta rastreando es el tag:tortuga
     * 
     * cada que halla una actualizacion el objeto se movera.
     * 
     * cuando la tortuga caiga, se destruira.
     * 
     * Se creara otra tortuga desde el inicio.
     * */
    onUpdate("tortuga", (t)=>{
        t.move(t.vel, 0);
        if(t.pos.y>180){
            destroy(t);
            spawnTortuga();
        }else{

        }
    })


    /**
     * Cada 0.2 segundos se cambiaran los sprites de los objetos.
     * 
     * 
     * use()                : permite el cambio de sprite de un objeto.
     * sprite_frame         : es el indice al que se hara referencia.
     * enemie_animations    : es el vector de animaciones del hongo,
     *                          se cambia la animacion dependiendo
     *                          el sprite_frame
     * tortura_animations   : es el vector de animaciones de la tortuga.
     * 
     */
    loop(0.2,()=>{
        hongo.sprite_frame++;
        if(hongo.sprite_frame>=enemie_animations.length){
            hongo.sprite_frame=0;
        }
        hongo.use(sprite(enemie_animations[hongo.sprite_frame]))

        every("move", (m)=>{
            m.sprite_frame++;
            if(m.sprite_frame>=tortuga_animations.length){
                m.sprite_frame=0;
            }
            m.use(sprite(tortuga_animations[m.sprite_frame]))  
        })
    })

    
    /**
     * para un tiempo aleatorio entre 3 y 5 segundos cada objeto que tenga
     * el tag: move, ejecutara un salto de 400.
     * 
     * isGrounded   : se asegura que este sobre un objeto solido.
     */
    loop(rand(3,5), ()=>{
        every("move", (m)=>{
            if(m.isGrounded())
            m.jump(400);
        })
        
    })


    onKeyDown("right", ()=>{
        mario.use(sprite("marioDer")) //cambiar el sprite.
        mario.move(150,0)
    })

    onKeyDown("left", ()=>{
        mario.use(sprite("marioIzq"))  // Cambiar el sprite.
        mario.move(-150,0)
    })

    onKeyPress("space",()=>{
        if(mario.isGrounded())
        mario.jump(400)
    })

    mario.onUpdate(()=>{
        camPos(mario.pos)
    })

})
go("juego")