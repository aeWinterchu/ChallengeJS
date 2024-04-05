const canvas =document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 567

c.fillStyle = 'white'
c.fillRect(0,0,canvas.width,canvas.height)

const image = new Image()
image.src = 'map.png'// map test non disponible

const playImage = new Image()
playImage.src = 'playerDown.png'

let backgroundImageX = 0 // a redefinir quand y'auras la map 
let playerImageX=0   // a redefinir quand y'auras la map 

class Sprite{
  constructor({position,velocity,image}){
    this.position=position
    this.image=image
  }

  draw() {
    c.drawImage(this.image,this.position.x,this.position.y)
  }
}

const background =new Sprite({
  position:{
  x:0,
  y:0
  },
  image:image
})

const keys = {
  z: { pressed: false },
  q: { pressed: false },
  s: { pressed: false },
  d: { pressed: false }
};


function animate(){
  window.requestAnimationFrame(animate)
  background.draw()
  c.drawImage(
    playImage,
    0,
    0,
    playImage.width/4,
    playImage.height,
    canvas.width/2-playImage.width/2,
    canvas.height/2-playImage.height/2,
    playImage.width/4,
    playImage.height
    )  

  if (keys.s.pressed) background.position.y -= 2
  else if (keys.z.pressed) background.position.y += 2
  else if (keys.d.pressed) background.position.x -=2
  else if (keys.q.pressed) background.position.x +=2

  
  
}
animate()


let lastKey=''// pas encore utilisé
window.addEventListener('keydown',(e)=> {
  console.log(e.key)
  switch (e.key){
    case 's':
      keys.s.pressed=true
      lastKey='s'
      break
    case 'z':
      keys.z.pressed=true 
      lastKey='z'
      break
    case 'q':
      keys.q.pressed=true 
      lastKey='q'
      break
    case 'd':
      keys.d.pressed=true 
      lastKey='d'
      break
  }
})


window.addEventListener('keyup',(e)=> {
  console.log(e.key)
  switch (e.key){
    case 's':
      keys.s.pressed=false
      break
    case 'z':
      keys.z.pressed=false
      break
    case 'q':
      keys.q.pressed=false
      break
    case 'd':
      keys.d.pressed=false
      break
  }
})
