window.onload = function() {
    console.log('carregou Window')
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    
    let gameSpeed = 2
    let clouds = []

    var spriteSheet = new Image()
    spriteSheet.src = "spriteSheet.png"

    spriteSheet.onload = function() {
    console.log('carregou spriteSheet')
    init()
    }

function init() {
    loop()
    console.log('inicializou')
}


class Floor {
    constructor() {
        this.x = 0
        this.y = 104
        this.width = 2400
        this.height = 26
        this.speed = gameSpeed
    }
    
    update() {
        this.x -= gameSpeed
        if (this.x <= -this.width) {
            this.x = 0
        }
    }
    render() {
        ctx.drawImage(spriteSheet, 2, 104, 2400, 26, this.x, this.y, this.width, this.height)
        ctx.drawImage(spriteSheet, 2, 104, 2400, 26, this.x + this.width, this.y, this.width, this.height)
    
    }
}
var floor = new Floor()

class Clouds {
    constructor(speed) {
        this.spriteX = 166
        this.spriteY = 2
        this.spriteWidth = 92
        this.spriteHeigth = 26
        this.x = 300
        this.y = (Math.random() * 30) + 100
        this.width = this.spriteWidth
        this.height = this.spriteHeigth
        this.speed = speed
    }
    update() {

    }
    render() {
        ctx.drawImage(spriteSheet, spriteX, 104, 2400, 26, this.x, this.y, this.width, this.height)
        ctx.drawImage(spriteSheet, 2, 104, 2400, 26, this.x + this.width, this.y, this.width, this.height)
    }
}



function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    floor.update()
    floor.render()
    
    
    
    window.requestAnimationFrame(loop, canvas)
}

} // todo o arquivo encapsulado no evento window.onload



