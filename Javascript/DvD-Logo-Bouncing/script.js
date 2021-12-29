function myMove() {
  var elem = document.getElementById("animate");
  var posX = 60;
  var posXturn = true;
  var posYturn = true;
  var posY = 44;
  var n = 1;
  var id = setInterval(frame, 10);
  var start = true;
  var count = 0;
  function frame() {
    setTimeout(() => start = false,1);
    if (posX === 415) {
      posXturn = false;
      if (start === false) {elem.src = "images/dvdLogo" + n + ".png"}
      if (n < 7) {
        n++;
      } else {
        n = 1;
      }
    } 

    if (posY === 257){
      posYturn = false;
      if (start === false) {elem.src = "images/dvdLogo" + n + ".png"}
      if (n < 7) {
        n++;
      } else {
        n = 1;
      }
    } 

    if (posX === 56) {
      posXturn = true;
      if (start === false) {elem.src = "images/dvdLogo" + n + ".png"}
      if (n < 7) {
        n++;
      } else {
        n = 1;
      }
    } 

    if (posY === 44) {
      posYturn = true;
      if (start === false) {elem.src = "images/dvdLogo" + n + ".png"}
      if (n < 7) {
        n++;
      } else {
        n = 1;
      }
    } if (posXturn === true) {
      posX += 1;
    } if (posYturn === true) {
      posY += 1;
    } if (posXturn === false) {
      posX -= 1;
    } if (posYturn === false) {
      posY -= 1;
    }
    elem.style.left = posX + 'px';
    elem.style.top = posY + 'px';
  }
}