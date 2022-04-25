kaboom({
    //width: 320,
    //height: 240,
    global: true,
    fullscreen: true,
    scale: 0.9,
    clearColor: [0,0,0,1],
})

loadRoot('https://i.imgur.com/')
loadSprite('bloque','LBcbMSI.png')
loadSprite('mario','CtLdqAd.png')
scene("juego", ()=>{
    layers(['bg','obj','ui'],'obj')
    const map = [
        '                               ',
        '                               ',
        '                               ',
        '            =                  ',
        '=                              ',
        '                     =         ',
        '     %                         ',
        '========================   ====',
    ]
     const levelCfg = {
         width: 20,
         height: 20,

         '=': [sprite('bloque'),solid()],
         '%': [sprite('mario'),solid()]
     }
     const gameLevel = addLevel(map, levelCfg)
})
start("juego")