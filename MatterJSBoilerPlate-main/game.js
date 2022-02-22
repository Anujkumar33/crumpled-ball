 class Game
 {
     constructer(x,y,w,h){
     let options = {
     isStatic:true
     };
    
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rect(x,y,w,h,options);
        World.add(world,this.body);
     }
     display(){
      rect (this.x,this.y,this.w,this.h);
        
     }
 }