  function randomNumber(min,max)
  {
  return Math.floor(Math.random()*(max-min+1)+min);
  }

  var disMinions = 40;
  var width = 40;
  var height = 40;
  var blackX
  var blackY
  var purpleX
  var purpleY
  var greenX
  var greenY
  var blueX
  var blueY
  var FoodEaten = 0;
  var timeStart = Date.now();

  document.addEventListener("keydown", function(e) {
    var black = document.getElementById("black")
    var purple = document.getElementById("purple")
    var green = document.getElementById("green")
    var blue = document.getElementById("blue")

    //This is for the players keydown event
    if (e.keyCode == 37) {
     document.getElementById("black").setAttribute("x", disMinions - 10);
        disMinions = disMinions - 10;
      }
    if (e.keyCode == 39) {
     document.getElementById("black").setAttribute("x", disMinions + 10);
      disMinions = disMinions + 10;
    }
      if (e.keyCode == 38) {
       document.getElementById("black").setAttribute("y", disMinions - 10);
        disMinions = disMinions - 10;
      }
        if (e.keyCode == 40) {
         document.getElementById("black").setAttribute("y", disMinions + 10);
          disMinions = disMinions + 10;
        }

    blackX = Number(black.getAttribute("x"))
    blackY = Number(black.getAttribute("y"))

    purpleX = Number(purple.getAttribute("x"))
    purpleY = Number(purple.getAttribute("y"))

    greenX = Number(green.getAttribute("x"))
    greenY = Number(green.getAttribute("y"))

    blueX = Number(blue.getAttribute("x"))
    blueY = Number(blue.getAttribute("y"))


    if (blackX + 40 > greenX && blackX + 40 < greenX + 40 && blackY + 40 > greenY && blackY + 40 < greenY + 40) {
       console.log("EATEN GREEN")
       var randX = randomNumber(0,800)
       document.getElementById("green").setAttribute("x",randX);
       FoodEaten = FoodEaten + 1;
       document.getElementById("score").textContent = FoodEaten;

       for(i = 0; i < 2; i++) {
         FoodEaten = "hidden";
       }
     }

    if (blackX + 40> purpleX && blackX + 40 < purpleX + 40 && blackY + 40 > purpleY && blackY + 40 < purpleY + 40) {
       console.log("EATEN PURPLE")
       var randX = randomNumber(0,800)
       document.getElementById("purple").setAttribute("x",randX);
       FoodEaten = FoodEaten + 1;
      document.getElementById("score").textContent = FoodEaten;
     }

     if (blackX + 40> blueX && blackX + 40 < blueX + 40 && blackY + 40 > blueY && blackY + 40 < blueY + 40) {
        console.log("EATEN BLUE")
        var randX = randomNumber(0,800)
        document.getElementById("purple").setAttribute("x",randX);
        FoodEaten = FoodEaten - 2;
       document.getElementById("score").textContent = FoodEaten;
      }

     if(FoodEaten == 5) {
       var timeStop = Date.now()
       document.getElementById("screen").pauseAnimations()
       document.getElementById("duration").innerHTML = (timeStop - timeStart) / 1000
     }

 })
