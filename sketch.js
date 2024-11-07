let s;
let scl=20;
let input_utente= "Nulla";
let food_x;
let food_y;
let score;
let game_status= "Playing"; //variabile che segnala quando si gioca


function setup() {
  createCanvas(400, 400);
  frameRate(10);
  //variabile per creare serpente
  s= new Snake(0,0);
  //per generare la prima posizione random del cibo
  pickFoodLocation();

  button= createButton("Restart");
  //ma non vogliamo che il bottone ci sia sempre
  //voglio che compaia solo quando muore

  button.hide(); //nasconde il pulsante


}

function draw() {
  if (game_status=== "Playing") {
    background(220);

    fill(255, 0, 100);
    rect(food_x, food_y, scl, scl); //cibo
  
    s.show();
    s.update();
  
    if (s.eat(food_x, food_y)) {
      pickFoodLocation();
    }
  
    score, am_i_dead = s.death();

  if(am_i_dead) {
        game_status = 'Game_over';
        button.show();
      }
  } else {
    background(0);
    fill(255);
    textSize(32);
    text("GAME OVER", 100, 200);
    text("Score: " + score, 100, 240);
    button.position(width / 2 - button.width / 2, height / 2 + 60); //il pulsante è centrato
    //voglio che cliccando il bottone restart il gioco ricominci
    button.mousePressed(()=>{
      //corpo della funzione
      game_status= "Playing"; 
      //creare un nuovo serpente
      s= new Snake(0,0); 
      //nuova posizione per il cibo
      pickFoodLocation();
      //dobbiamo far sparire di nuovo il bottone
      button.hide();

    }); //funzione lambdare: funzione non riutilizzabile (infatti non ha nome), utilizzabile solo in questo punto
    
  }

}
  

  // textSize(30);
  // text("Input utente: "+ input_utente, 80, 200);


function pickFoodLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);

  food_x = floor(random(cols)) * scl;
  food_y = floor(random(rows)) * scl;

}


  
  // function keyPressed(){ 
  //   if (keyCode === UP_ARROW) {
  //     input_utente="su";
  //   }
  //   else if(keyCode === DOWN_ARROW) {
  //     input_utente="giù";
  //   }
  //   else if (keyCode === LEFT_ARROW) {
  //     input_utente="sinistra";
  //   }
  //   else if (keyCode === RIGHT_ARROW) {
  //     input_utente="destra";
  //   }

function keyPressed(){ 
      if (keyCode === UP_ARROW) {
        s.dir(0,-1);
      }
      else if(keyCode === DOWN_ARROW) {
        s.dir(0,1);
      }
      else if (keyCode === LEFT_ARROW) {
        s.dir(-1,0);
      }
      else if (keyCode === RIGHT_ARROW) {
        s.dir(1,0);
      }
      else if (keyCode === SHIFT) {
      game_status = "Game_over";
      button.show();
    }
}