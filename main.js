const MAX = 800
const container = document.getElementById('square-container')
class Square {
    constructor(x, y) {
        this.div = document.createElement('div')
        this.div.classList.add('square')
        this.div.style.left = `${x}px`
        this.div.style.top = `${y}px`
        this.div.addEventListener('click', function () {
            console.log(this);
            if (randomVal(0, 10) % 2 === 0) {
                this.updateColor()
            } else {
                this.updateLocation()
            }
        }.bind(this))
        this.updateColor()
        container.appendChild(this.div)
    }

    updateLocation() {
        let x = randomVal(0, MAX)
        let y = randomVal(0, MAX)
        this.div.style.left = `${x}px`
        this.div.style.top = `${y}px`
    }

    updateColor() {
        let randomColor = `rgb(${randomVal(0, 255)},${randomVal(0, 255)}, ${randomVal(0, 255)})`
        this.div.style.backgroundColor = randomColor
    }
}


let sqButton = document.getElementById('sq-button')
sqButton.addEventListener('click', insertSquare)

function insertSquare() {
    let x = randomVal(0, MAX)
    let y = randomVal(0, MAX)
    let sq = new Square(x, y)
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
