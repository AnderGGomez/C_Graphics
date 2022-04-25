kaboom({
    //width: 320,
    //height: 240,
    global: true,
    fullscreen: true,
    scale: 0.9,
    clearColor: [0.3,0.7,1,1],
})

loadRoot('https://i.imgur.com/')
loadSprite('bloque','LBcbMSI.png')
loadSprite('mario','CtLdqAd.png')
loadSprite('tope','rl3cTER.png')
loadSprite('pipe','cTvorF6.png')
loadSprite('boxQuest','I9wqLvN.png')
loadSprite('fungi','C90Lmfl.png')
loadSprite('arbusto','DdmQs9f.png')
loadSprite('cloud','TWMgOVY.png')
loadSprite('mountain','rSZBAYn.png')

scene("juego", ()=>{
    layers(['bg','obj','ui'],'obj')
    const map = [
        '                   ',
        '                   ',
        '*          *       ',
        '                   ',
        '                   ',
        '      ^            ',
        '                   ',
        '                   ',
        ' _                 ',
        '                   ',
        'f    + %-        f ',
        '=============   ===',
        '=============   ===',
    ]
     const levelCfg = {
         width: 20,
         height: 20,

         '=': [sprite('bloque'),solid(),scale(1.2)],
         '%': [sprite('mario'),solid(), scale(1.2)],
         '^': [sprite('boxQuest'),solid()],
         'f': [sprite('fungi'),solid(), scale(1.2)],
         '_': [sprite('pipe'),solid(),],
         '*': [sprite('cloud'),scale(1.2),],
         '-': [sprite('mountain'),scale(1.2)],
         '+': [sprite('arbusto'),scale(1.2)],
     }
     const gameLevel = addLevel(map, levelCfg)
})
start("juego")