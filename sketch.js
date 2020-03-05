let nums
let p = []

function setup() {
    createCanvas(windowWidth, windowHeight)

    nums = Math.floor(windowWidth / 5)

    for (let i of nums) {
        p.push(new Particle())
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    nums = Math.floor(windowWidth / 5)
}

function draw() {
    background('#d63447')


    p.forEach(v => {
        v.draw()
        v.update()
    })
    // if(mouseIsPressed) {
    //     // p[i].pos = createVector(random)
    //     for(let i of nums) {
    //         p[i] = new  Particle()
    //         p[i].draw()
    //         p[i].update()
    //     }
    // }

}

class Particle {
    constructor() {
        // 创建一个向量
        this.pos = createVector(random(width), random(height))
        this.size = 10

        this.vel = createVector(random(-2, 2), random(-2, 2))
    }
    draw() {
        noStroke()
        fill('#f57b51')
        circle(this.pos.x, this.pos.y, this.size)
    }

    update() {
        // 向量是可以增加的
        this.pos.add(this.vel)
        this.edges()
    }

    // 矫正位置
    edges() {
        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1
        }
        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1
        }
    }
}