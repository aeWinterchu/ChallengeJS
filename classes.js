
class Sprite{ // sur la map
  constructor({position,velocity,image,frames={max:1,hold:10},sprites,animate=false }){
    this.position=position
    this.image=image
    this.frames = {...frames,val : 0,elapsed:0} 
  
    this.image.onload =() =>{
      this.width = this.image.width /this.frames.max
      this.height = this.image.height /this.frames.max
    }
    this.animate =animate
    this.sprites =sprites
    this.opacity = 1
    this.health = 100 
  }
  
  draw() {
    c.drawImage(
      this.image,
      this.frames.val*this.width,
      0,
      this.image.width/this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width/ this.frames.max,
      this.image.height
      )

    if (!this.animate) return 
            
    if (this.frames.max >1){
      this.frames.elapsed++
    }
    
        

    if (this.frames.elapsed %10 === 0){
      if (this.frames.val<this.frames.max - 1) this.frames.val++
      else this.frames.val=0
    }     
  }

  attack({attack,recipient,renderedSprites}){

    let healthBar = '#ennemiebar'
    if (this.isEnnemie) healthBar = '#mainbar'

    this.health -= attack.puissance

    switch(attack.name){
      case 'Taere':
        const AttaqueEauImage =new Image()
        AttaqueEauImage.src='animation/Water1.png'
        const AttaqueEau = new Sprite({
          position:{
            x:this.position.x,
            y:this.position.y
          },
          image:AttaqueEauImage,
          frames:{
            max:23,
            
          },
          animate:true
        })

        renderedSprites.push(AttaqueEau)

        gsap.to(AttaqueEau.position, {
          x: recipient.position.x,
          y: recipient.position.y,
          onComplete: () => {
            //hit
            gsap.to(healthBar, {
              width: this.health + '%'
            })

            gsap.to(recipient.position, {
              x: recipient.position.x + 10,
              yoyo: true,
              repeat: 5,
              duration: 0.08
            })

            gsap.to(recipient, {
              opacity: 0,
              repeat: 5,
              yoyo: true,
              duration: 0.08
            })
            renderedSprites.splice(1, 1)
          }
        });


      break;
      case 'attack2':

    
      const tl = gsap.timeline()

      

      let movementDistance = 20 
      if (this.isEnnemie) movementDistance = -20

      


      tl.to(this.position,{
        x:this.position.x -20
      })
        .to(this.position,{
          x: this.position.x + 200,
          duration: 0.1,
          onComplete:()=>{
           //hit
            gsap.to(healthBar,{
              width : this.health +'%'
            })
            gsap.to(recipient.position,{
              x:recipient.position.x+10,
              yoyo:true,
              repeat : 4,
              duration :0.08
            })

            gsap.to(recipient,{
              opacity :0,
              repeat:5,
              yoyo:true,
              duration :0.08
            })
          }
      })
        .to(this.position,{
          x:this.position.x,

      })
   }
  }

  
}


class boundary{
    static width = 48
    static height = 48
    constructor({position}){
      this.position =position
      this.width = 48
      this.height = 48
    }
  
    draw(){
      c.fillStyle='rgba(255,0,0,0.0)'
      c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
  }
