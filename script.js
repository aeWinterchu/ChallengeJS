const canvas =document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 880
canvas.height = 526

c.fillStyle = 'white'
c.fillRect(0,0,canvas.width,canvas.height)

const image = new Image()
image.src = 'mapv1.png'

const playImage = new Image()
playImage.src = 'playerDown.png'

let backgroundImageX = 0 // a redefinir quand y'auras la map 
let playerImageX=0   // a redefinir quand y'auras la map 

function animate(){
  window.requestAnimationFrame(animate)
  image.onload = () => {
    c.drawImage(image,0,0)
    c.drawImage(playImage,
      0,
      0,
      playImage.width/4,
      playImage.height,
      canvas.width/2-playImage.width/2,
      canvas.height/2-playImage.height/2,
      playImage.width/4,
      playImage.height
      )
    }
}
animate()

class Sprite{
  constructor({position,velocity}){
    this.position=position
  }

  draw() {
    c.drawImage(this.image,0,0)
  }
}

const background =new Sprite({
  position:{
  x:0,
  y:0
  },
  image:image
})


image.onload = () => {
    c.drawImage(image,0,0)
    c.drawImage(playImage,
      0,
      0,
      playImage.width/4,
      playImage.height,
      canvas.width/2-playImage.width/2,
      canvas.height/2-playImage.height/2,
      playImage.width/4,
      playImage.height
      )

}

function animate(){
  window.requestAnimationFrame(animate)
  console.log('animate')
}

window.addEventListener('keydown',(e)=> {
  console.log(e.key)
  switch (e.key){
    case 's':
      console.log('pressed s key')
      break
    case 'z':
      console.log('pressed z key')
      break
    case 'q':
      console.log('pressed q key')
      break
    case 'd':
      console.log('pressed d key')
      break
  }
})


