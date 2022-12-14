class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonBase=loadImage("assets/cannonBase.png")
    this.cannon=loadImage("assets/canon.png")
  }
  show(){
    push()
    imageMode(CENTER)
    translate(this.x,this.y)
    rotate(angle)
    image(this.cannon,0,0,this.width,this.height)
    pop()
    image(this.cannonBase,70,20,200,200)
    noFill()
  }
}
