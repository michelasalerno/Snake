class Snake {
    constructor(x,y){
      this.x= x;
      this.y= y;
      this.xspeed=1;
      this.yspeed=0;
      this.len=0;
      this.tail=[];
    }
    dir(x,y){
      //voglio impedire di scegliere la direzione opposta a quella a cui vado
      //se la somma delle velocità (1-1) uguale a 0 vuol dire che sto andando nella direzione opposta
      // || vuol dire o
      if (this.xspeed + x === 0 || this.yspeed + y === 0) {
        console.log("Invalid direction");
      } else {
        this.xspeed=x;
        this.yspeed=y;      
      }
    }
  
    //funzione morte del serpente
    death() {
      score = this.len;
      for (var i=0;i<this.tail.length; i++){
        if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
          this.len = 0; //lunghezza zero
          this.tail = []; //la coda si svuota
          return score; 
        }
      }
      return 0;
    }
    //per far mangiare il serpente
    eat(food_x, food_y) {
      if (this.x === food_x && this.y===food_y) {
        this.len++;
        return true;
      } //la && vuol dire and
  
      return false;
    }
  
    update(){
      if(this.len ===this.tail.length) {
        for(var i=0;i< this.tail.length-1; i++) {
          this.tail[i]=this.tail[i+1];
        }
      }
      this.tail[this.len-1]= createVector(this.x, this.y);
      this.x=this.x + this.xspeed *scl;
      this.y=this.y + this.yspeed *scl;
  
      if (this.x > width -scl) {
        this.x=0;
      }
        else if (this.x<0) {
          this.x= width-scl;
        }
      }
    
  
    //per rendere visibile il serpente
    show() {
      fill(255);
      for(var i = 0;i<this.tail.length;i++){
        //creo rettangoli per ogni elemento della coda
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
      }
      //rettangolo per testa
      rect(this.x, this.y, scl, scl)
    }
  
  }