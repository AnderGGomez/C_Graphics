kaboom({
    //width: 10820,
    //height: 720,
    global: true,
    fullscreen: true,
    scale: 0.9,
    clearColor: [0,0,0,1],
})

loadRoot('https://i.imgur.com/')
loadSprite('bloque','fVscIbn.png')
loadSprite('bloque2','3e5YRQd.png')
loadSprite('mario','Wb1qfhK.png')
loadSprite('boxQuest', 'RMqCc1G.png')
loadSprite('bloqueRock', 'gqVoI2b.png')

scene("juego", ()=>{
    layers(['bg','obj','ui'],'obj')
    const map = [
        '*    ******************************',
        '*                                  ',
        '*                                  ',
        '*  %                               ',
        '*                                  ',
        '*                                  ',
        '*                                  ',
        '*                               *  ',
        '*          -----          + +      ',
        '*                       + + + +   +',
        '*                     + + + + +   +',
        '*                  +  + + + + +   +',
        '===================================',
        '===================================',
    ]
     const levelCfg = {
         width: 40,
         height: 40,

         '=': [sprite('bloque'),solid()],
         '%': [sprite('mario'),solid()],
         '*': [sprite('bloque2'),solid()],
         '-': [sprite('boxQuest'), solid()],
         '+': [sprite('bloqueRock'),solid()]
     }
     const gameLevel = addLevel(map, levelCfg)
})
start("juego")