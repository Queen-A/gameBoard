var disMinions = 40;
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 37) {
   document.getElementById("black").setAttribute("x", disMinions - 25);
      disMinions = disMinions - 25;
    }
  if (e.keyCode == 39) {
   document.getElementById("black").setAttribute("x", disMinions + 25);
    disMinions = disMinions + 25;
  }
    if (e.keyCode == 38) {
     document.getElementById("black").setAttribute("y", disMinions + 15);
      disMinions = disMinions + 15;
    }
      if (e.keyCode == 40) {
       document.getElementById("black").setAttribute("y", disMinions - 15);
        disMinions = disMinions - 15;
      }
  })
