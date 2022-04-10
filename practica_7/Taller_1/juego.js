kaboom({
    //width: 320,
    //height: 240,
    global: true,
    fullscreen: true,
    scale: 0.9,
    clearColor: [0.3,0.7,1,1],
})

loadRoot('https://i.imgur.com/')
loadSprite('bloque','M6rwarW.png')
loadSprite('mario','Wb1qfhK.png')
loadSprite('tope','rl3cTER.png')
loadSprite('rightPipe','hj2GK4n.png')
loadSprite('leftPipe','ReTPiWY.png')
loadSprite('leftBodyPipe','c1cYSbt.png')
loadSprite('rightBodyPipe','nqQ79eI.png')
loadSprite('boxQuest','gesQ1KP.png')
loadSprite('fungi','KPO3fR9.png')

scene("juego", ()=>{
    layers(['bg','obj','ui'],'obj')
    const map = [
        '                   ',
        '                   ',
        '                   ',
        '                   ',
        '                   ',
        ' -_    ^           ',
        '                   ',
        ' *+                ',
        ' *+                ',
        ' *+                ',
        'f*+    %         f ',
        '=============   ===',
        '=============   ===',
    ]
     const levelCfg = {
         width: 20,
         height: 20,

         '=': [sprite('bloque'),solid()],
         '%': [sprite('mario'),solid()],
         '-': [sprite('leftPipe'),solid()],
         '_': [sprite('rightPipe'),solid()],
         '*': [sprite('leftBodyPipe'),solid()],
         '+': [sprite('rightBodyPipe'),solid()],
         '^': [sprite('boxQuest'),solid()],
         'f': [sprite('fungi'),solid()]
     }
     const gameLevel = addLevel(map, levelCfg)
})
start("juego")