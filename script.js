const canvas =document.querySelector('canvas')
const c = canvas.getContext('2d')


canvas.width = 840
canvas.height = 480


taille_map = 70


const battleZonesMap = []
for (let i = 0 ; i < battleZonesData.length ; i += 70){  //70 =taille de la map 
  battleZonesMap.push(battleZonesData.slice(i ,70+ i))
}

const collisionMap=[]
for (let i = 0 ; i < collision.length ; i += 70){  //70 =taille de la map 
  collisionMap.push(collision.slice(i ,70+ i))
}
const boundaries =[]
const  offset ={
  x:-600,
  y:-400
}

collisionMap.forEach((row,i) => {
  row.forEach((symbol,j) => {
    if (symbol===13789)
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

const battleZones=[]
battleZonesMap.forEach((row,i) => {
  row.forEach((symbol,j) => {
    if (symbol===16129)// a def les battle zones dans les data
    battleZones.push(
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
image.src = 'map/Carte4.png'// map test non disponible

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
const movables = [background , ...boundaries , ...battleZones]

function rectangularCollision({rectangle1,rectangle2}){
  return (
    rectangle1.position.x+rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x +rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y +rectangle2.height&&
    rectangle1.position.y+rectangle1.height >= rectangle2.position.y
  )
}
const battle ={
  initiated: false
}


function animate(){
  const animationId= window.requestAnimationFrame(animate)
  background.draw()
  boundaries.forEach((boundary) => {
    boundary.draw()
  })
  battleZones.forEach((battleZone) =>{
    battleZone.draw()
  })
  player.draw()

  let moving = true
  player.animate = false

  console.log(animationId)
  if (battle.initiated) return 

  //zone de combat
  if (keys.z.pressed || keys.q.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0 ; i < battleZones.length;i++){
      const battleZone =battleZones[i]
      const overlappingArea = 
      (Math.min(
        player.position.x + player.width ,
        battleZone.position.x +battleZone.width
      ) - 
        Math.max(player.position.x,battleZone.position.x))*
      (Math.min(player.position.y +player.height,
        battleZone.position.y +  battleZone.height
      )-
        Math.max(player.position.y,battleZone.position.y))
      if(
        rectangularCollision({
          rectangle1:player,
          rectangle2:battleZone
        }) &&
        overlappingArea > (player.width *player.height) /2 &&
        Math.random() < 0.05
      ) {
        console.log('activate')
        window.cancelAnimationFrame(animationId)
        battle.initiated=true
        gsap.to('#overlappingDiv', { // transition de combat 
          opacity: 1,
          repeat:4,
          duration : 0.4,
          yoyo:true,
          onComplete(){
            gsap.to('#overlappingDiv', {
              opacity :1 ,
              duration :0.4
            })
            animateBattle()
            gsap.to('#overlappingDiv', {
              opacity :0 ,
              duration :0.4
            })
          }
        });
        break
      }
    }
  }
    
  if (keys.z.pressed && lastKey ==='z') {
    player.animate = true
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
    player.animate = true
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
    player.animate = true
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
    player.animate = true
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


const battleBackgroundImage=new Image()
battleBackgroundImage.src= 'map/RockCave.png'
const battleBackGround = new Sprite({
  position :{
    x:0,
    y:0
  },
  image:battleBackgroundImage
})

const main_char = new Sprite({
  position :{
    x:50,
    y:250
  },
  image:playRightImage,
  frames:{
    max:4,
    hold:10
  }
})

const ennemie = new Sprite({
  position :{
    x:600,
    y:250
  },
  image:opps.image,
  frames:{
    max:4,
    hold:10
  }
})
const renderedSprites =[]
function animateBattle(){
  window.requestAnimationFrame(animateBattle)
  battleBackGround.draw()
  main_char.draw()
  ennemie.draw()

  renderedSprites.forEach((sprite)=>{
    sprite.draw()
  })
}

//animate()
animateBattle()


document.querySelectorAll('button').forEach((button)=>{
  button.addEventListener('click',(e)=>{
    const selectedAttack = attacks[e.currentTarget.innerHTML]
    console.log(e.currentTarget.innerHTML);
    main_char.attack({
      attack:selectedAttack,
      recipient:ennemie,
      renderedSprites
    })
  })
})



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