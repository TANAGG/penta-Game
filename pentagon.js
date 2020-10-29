class Pentagon {
    constructor(x, y, radius) {
      var options = {
        'isStatic': false,  
        'restituion' : 0.1,
        'friction': 1
          
          
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      this.image = loadImage("smoke.png")
      World.add(world, this.body);
      this.trajectory = []
      this.visibility = 255;
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      
      ellipseMode(CENTER);
      fill("black");
      ellipse(0,0, this.radius,this.radius);
      
     
  
      for(var i=0; i<this.trajectory.length; i++){
        this.visibility = this.visibility - 0.5
        tint(255,this.visibility)       
      }
    
      pop();
    }
  };