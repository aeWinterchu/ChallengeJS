const canvas =document.querySelector('canvas')
const c = canvas.getContext('2d')


canvas.width = 1024
canvas.height = 567


taille_map = 70

const collisionMap=[]
for (let i = 0 ; i < collision.length ; i += 70){  //70 =taille de la map 
  collisionMap.push(collision.slice(i ,70+ i))
}
const boundaries =[]
const  offset ={
  x:-450,
  y:-825
}

collisionMap.forEach((row,i) => {
  row.forEach((symbol,j) => {
    if (symbol===2102)
    boundaries.push(
      new boundary({
        position:{
          x:j * boundary.width+offset.x,
          y:i * boundary.height+offset.y
        }
      })
    )
  })
})

const image = new Image()
image.src = 'image/map.png'// map test non disponible

const foregroundImage = new Image()
foregroundImage.src = ''// front map pas disponible

const playDownImage = new Image()
playDownImage.src = 'personnage/playerDown.png'

const playUpImage = new Image()
playUpImage.src = 'personnage/playerUp.png'

const playLeftImage = new Image()
playLeftImage.src = 'personnage/playerLeft.png'

const playRightImage = new Image()
playRightImage.src = 'personnage/playerRight.png'


const player = new Sprite ({
  position:{
    x:canvas.width/2- 192 /4 /2,
    y:canvas.height/2- 68 /2
  },
  image : playDownImage,
  frames: {
    max:4
  },
  sprites:{
    up:playUpImage,
    down:playDownImage,
    left:playLeftImage,
    right:playRightImage,
  }
})

const background =new Sprite({
  position:{
  x:offset.x,
  y:offset.y
  },
  image:image
})

const keys = {
  z: { pressed: false },
  q: { pressed: false },
  s: { pressed: false },
  d: { pressed: false }
};
const movables = [background , ...boundaries]

function rectangularCollision({rectangle1,rectangle2}){
  return (
    rectangle1.position.x+rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x +rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y +rectangle2.height&&
    rectangle1.position.y+rectangle1.height >= rectangle2.position.y
  )
}



function animate(){
  window.requestAnimationFrame(animate)
  background.draw()
  boundaries.forEach((boundary) => {
    boundary.draw()
  })
  player.draw()
    
  let moving = true
  player.moving = false 
  if (keys.z.pressed && lastKey ==='z') {
    player.moving = true
    player.image = player.sprites.up
    for (let i = 0 ; i < boundaries.length;i++){
      const boundary =boundaries[i]
      if(
        rectangularCollision({
          rectangle1:player,
          rectangle2:{...boundary,
            position:{
              x:boundary.position.x,
              y:boundary.position.y +2
            }
          }
        })
      ) {
        moving = false
        break
      }
    }
    if (moving)
    movables.forEach((movable) => {
      movable.position.y +=2
    })
    

  } 
  else if (keys.s.pressed && lastKey ==='s') {
    player.moving = true
    player.image = player.sprites.down
    for (let i = 0 ; i < boundaries.length;i++){
      const boundary =boundaries[i]
      if(
        rectangularCollision({
          rectangle1:player,
          rectangle2:{...boundary,
            position:{
              x:boundary.position.x,
              y:boundary.position.y -2
            }
          }
        })
      ) {
        moving = false
        break
      }
    }
    if (moving)
    movables.forEach((movable) => {
      movable.position.y -=2
    })
  } 
  else if (keys.d.pressed && lastKey ==='d'){
    player.moving = true
    player.image = player.sprites.right
    for (let i = 0 ; i < boundaries.length;i++){
      const boundary =boundaries[i]
      if(
        rectangularCollision({
          rectangle1:player,
          rectangle2:{...boundary,
            position:{
              x:boundary.position.x-2,
              y:boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }
    if (moving)
    movables.forEach((movable) => {
      movable.position.x -=2
    })
  } 
  else if (keys.q.pressed && lastKey ==='q'){
    player.moving = true
    player.image = player.sprites.left
    for (let i = 0 ; i < boundaries.length;i++){
      const boundary =boundaries[i]
      if(
        rectangularCollision({
          rectangle1:player,
          rectangle2:{...boundary,
            position:{
              x:boundary.position.x+2,
              y:boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }
    if (moving)
    movables.forEach((movable) => {
      movable.position.x +=2
    })
  } 
}
animate()


let lastKey=''
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