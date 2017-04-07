var sun = new Image();
var earth = new Image();
var moon = new Image();

function init() {
  sun.src = 'images/Canvas_sun.png';
  earth.src = 'images/Canvas_earth.png';
  moon.src = 'images/Canvas_moon.png';
  window.requestAnimationFrame(draw);
}
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.globalCompositeOperation = 'destination-over'; // first draw first top
  ctx.clearRect(0, 0, 300, 300);

  var time = new Date();

  ctx.save(); // save 1
  // earth
  ctx.translate(150, 150); // center of image
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 60, 24);
  ctx.drawImage(earth, -12, -12);

  ctx.save(); // save 2
  // moon
  ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  ctx.translate(28.5, 0);
  ctx.drawImage(moon, -3.5, -3.5);

  ctx.restore(); // restore 2

  ctx.restore(); // restore 1

  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.3)';
  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI*2, false);
  ctx.stroke();
  ctx.drawImage(sun, 0, 0);
  window.requestAnimationFrame(draw);
}

init();
