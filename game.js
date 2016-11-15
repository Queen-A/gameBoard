var disMinions = 40;
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 37) {
   document.getElementById("black").setAttribute("x", batPaws - 25);
      disMinions = disMinions - 25;
    }
  if (e.keyCode == 39) {
   document.getElementById("black").setAttribute("x", batPaws + 25);
    disMinions = disMinions + 25;
