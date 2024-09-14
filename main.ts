tiles.setCurrentTilemap(tilemap`level2`)
tiles.setWallAt(tiles.getTileLocation(randint(0, 10), 3), false)
let mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 f f f 2 2 2 2 2 f f f 2 2 
    2 2 2 f f f 2 2 2 2 2 f f f 2 2 
    2 2 2 f f f 2 2 2 2 2 f f f 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 5 5 5 2 2 2 2 2 5 5 5 2 2 
    2 2 2 5 5 5 2 2 2 2 2 5 5 5 2 2 
    2 2 2 5 5 5 5 5 5 5 5 5 5 5 2 2 
    2 2 2 2 5 5 5 5 5 5 5 5 5 2 2 2 
    2 2 2 2 5 5 5 5 5 5 5 5 5 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(72, 15)
mySprite.ay = 250
