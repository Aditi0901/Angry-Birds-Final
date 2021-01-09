class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.tragetry = []
  }
display(){
super.display();
if (this.body.position.x>200 && this.body.velocity.x>10){
  var position = [this.body.position.x,this.body.position.y];
  this.tragetry.push(position);
}
for (let index = 0; index < this.tragetry.length; index++) {
  const element = this.tragetry[index];
  image(this.smokeImage,element[0],element[1]);
}
}


  
}
