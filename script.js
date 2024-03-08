const canvas =document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = 880
canvas.height = 526

c.fillStyle = 'white'
c.fillRect(0,0,canvas.width,canvas.height)

const image = new Image()
image.src = 'mapv1.png'
console.log(image)

image.onload = () => {
    c.drawImage(image,0,0)
}

//const playImage = new Image()
//  playerImage.src =

//playerImage.onload =() =>{
//    c.drawImage(playerImage,0,0)
//}

//image.onload = () => {
//   c.drawImage(image,-750,-550)
//} 

