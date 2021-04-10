class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    
    //255 = fully visible and 0 = not at all visible
    this.Visiblity = 255;
  }

display(){
  //displaying the speed in the console window
  console.log(this.body.speed);
  
  //if speed is n>3, then the pig should be removed!!
  if(this.body.speed < 3){
      super.display();
    }
     else{
      //removing the pig body from th worled like adding it to the world and replacing it byt the image of it 
      World.remove(world, this.body);
          
          //to prevent from affecting the other objects, start
          push()
          //it slowly disappers, gradually!! to put the effect to vanish them gradually!! 
         this.Visiblity = this.Visiblity - 5;
         //tint will add a new transparent layer to the image
        tint(255, this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          //to prevent from affecting the other objects, end
          pop()
    }
  }
}
