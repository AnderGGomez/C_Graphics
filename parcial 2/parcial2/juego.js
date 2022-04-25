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
scene("juego", ()=>{
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


    const mario = add([
        sprite('charlie'), 
        pos(40,0),
        scale(0.6),
        solid(),
        area(),
        body()
    ])


    const mono =add ([
        sprite('mono1'),
        pos(460,60),
        scale(0.6),
        area(),
        body(),
        solid(),
        "mono",
        {
            vel : ENEMIE_SPEED
        }
    ])

    const mono2 =add ([
        sprite('mono1'),
        pos(200,60),
        scale(0.6),
        area(),
        body(),
        solid(),
        "salto",
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
            {
                dir: true,
                vel:ENEMIE_SPEED*-1
            }
        ])
    }
    spawnMonoBlue();

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

    onUpdate("salto", (e)=>{
        if(e.isGrounded()){
            e.jump(800)
        }
    })


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

    onKeyDown("right", ()=>{
        mario.use(sprite("charlie")) //cambiar el sprite.
        mario.move(150,0)
    })

    onKeyDown("left", ()=>{
        mario.flipX(true)
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