class Tar {
    constructor(x, y, width, height) {
      var options = {
         
        'restituion' : 0.3,
          'friction':1,
          'density': 1
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      this.visibility = 255;
      this.image = loadImage("img.jpeg")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;  
      push();     
      
      this.visibility = this.visibility - 1.8;
     tint(255,this.visibility);
      imageMode(CENTER);
      image( this.image,pos.x,pos.y, this.width, this.height);
      
      pop();
    }
    score(){
      if(this.visibility<0 && this.visibility>-3){
        score = score + 1;
      }
    }
  };

  