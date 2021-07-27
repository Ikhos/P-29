class Box {
  constructor(x, y, width, height){
    var options = {
      isStatic: false,
      restituion: 0.4
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(myWorld, this.body);
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("#ADD8E6");
    rect(0, 0, this.width, this.height);
    pop(); 
  }

};
