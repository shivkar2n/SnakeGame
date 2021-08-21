function Launch() {

  var background = new Image();
  background.src = 'background2.jpg'

  var Player = new Image();
  Player.src = 'mouse.png'

  var dice = new Image();
  dice.src = '1.png'

  var NoMoves = 0;
  var BoardValues = [];
    var Row = []
    for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      Row.push(1 + 10*i + j)
    }
    BoardValues.push(Row)
  }

  var Boardcanvas = document.getElementById('background').getContext('2d');
  Boardcanvas.font = "20px Arial"
  Boardcanvas.fillStyle = "black"

  var Dicecanvas = document.getElementById('dice').getContext('2d');
  Dicecanvas.fillStyle = "black"
  Dicecanvas.rect(0,0,115,115)

  var current_pos = 1;
  var current_posX = 0;
  var current_posY = 551;
  var diceValue;
  function getRandomInt(max) {
    return 1 + Math.floor(Math.random()*max);
  }

  function checkLadder() {
    if (current_pos === 4) {
      current_pos = 14;
      alert("You landed on a ladder!!!\nMoved from 4 to 14!")
    }
    else if (current_pos === 9) {
      current_pos = 31;
      alert("You landed on a ladder!!!\nMoved from 9 to 31!")
    }
    else if (current_pos === 19) {
      current_pos = 38;
      alert("You landed on a ladder!!!\nMoved from 19 to 38!")
    }
    else if (current_pos === 28) {
      current_pos = 84;
      alert("You landed on a ladder!!!\nMoved from 28 to 84!")
    }
    else if (current_pos === 21) {
      current_pos = 42;
      alert("You landed on a ladder!!!\nMoved from 21 to 42!")
    }
    else if (current_pos === 51) {
      current_pos = 67;
      alert("You landed on a ladder!!!\nMoved from 51 to 67!")
    }
    else if (current_pos === 71) {
      current_pos = 91;
      alert("You landed on a ladder!!!\nMoved from 71 to 91!")
    }
    else if (current_pos === 80) {
      current_pos = 100;
      alert("You landed on a ladder!!!\nMoved from 80 to 100!")
    }
  }

  function checkSnake() {
    if (current_pos === 17) {
      current_pos = 7;
      alert("You landed on a snake!!!\nMoved from 17 to 7!")

    }
    else if (current_pos === 54) {
      current_pos = 34;
      alert("You landed on a snake!!!\nMoved from 54 to 34!")
    }
    else if (current_pos === 62) {
      current_pos = 19;
      alert("You landed on a snake!!!\nMoved from 62 to 18!")
    }
    else if (current_pos === 64) {
      current_pos = 60;
      alert("You landed on a snake!!!\nMoved from 64 to 60!")
    }
    else if (current_pos === 87) {
      current_pos = 24;
      alert("You landed on a snake!!!\nMoved from 87 to 24!")
    }
    else if (current_pos === 93) {
      current_pos = 73;
      alert("You landed on a snake!!!\nMoved from 93 to 73!")
    }
    else if (current_pos === 95) {
      current_pos = 75;
      alert("You landed on a snake!!!\nMoved from 95 to 75!")
    }
    else if (current_pos === 98) {
      current_pos = 79;
      alert("You landed on a snake!!!\nMoved from 98 to 79!")
    }
  }



  document.getElementById('roll').addEventListener('click', (event) => {
      diceValue = getRandomInt(6);
      NoMoves += 1;
      Dicecanvas.fill();
      Dicecanvas.clearRect(0,0,115,115);

      if (current_pos < 100) {
        current_pos += diceValue;

        if (current_pos > 100) {
          current_pos -= diceValue;
        }

       else if (current_pos === 100) {
         alert(`You Won in ${NoMoves}!!!`);
         document.location.reload();
       }
      }

      if (current_pos === 100) {
        alert(`You Won in ${NoMoves}!!!`);
        document.location.reload();
      }

      if (diceValue === 1) {
        dice.src = '1.png'
        Dicecanvas.drawImage(dice,0,0);
      }
      else if (diceValue === 2) {
        dice.src = '2.png'
        Dicecanvas.drawImage(dice,0,0);
      }
      else if (diceValue === 3) {
        dice.src = '3.png'
        Dicecanvas.drawImage(dice,0,0);
      }
      else if (diceValue === 4) {
        dice.src = '4.png'
        Dicecanvas.drawImage(dice,0,0);
      }
      else if (diceValue === 5) {
        dice.src = '5.png'
        Dicecanvas.drawImage(dice,0,0);
      }
      else if (diceValue === 6) {
        dice.src = '6.png'
        Dicecanvas.drawImage(dice,0,0);
      }

  })

  function updatePosition() {
    if (Math.floor(current_pos/10)%2 === 0 && current_pos%10 != 0 || Math.floor(current_pos/10)%2 === 1 && current_pos%10 === 0) {
      current_posX = ((current_pos-1)%10)*61;
    }
    else {
      current_posX = 551 -((current_pos-1)%10)*61;
    }
    current_posY = 551 - Math.floor((current_pos-1)/10)*61;

  }

  Boardcanvas.drawImage(background,0,0);
  Dicecanvas.drawImage(dice,0,0);
  Boardcanvas.drawImage(Player,current_posX,current_posY);

  function Draw() {
    checkSnake();
    checkLadder();
    updatePosition();
    Boardcanvas.drawImage(background,0,0);
    Dicecanvas.drawImage(dice,0,0);
    Boardcanvas.drawImage(Player,current_posX,current_posY);
    if (current_pos === 100) {
      alert(`You Won in ${NoMoves}!!!`);
      document.location.reload();
    }
  }
  setInterval(Draw,800);

}
