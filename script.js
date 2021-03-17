const canvas = document.getElementById('canvas');
const color = document.getElementById('color');
const ctx = canvas.getContext('2d');

const angle = (degrees) => (Math.PI/180) * degrees;

color.addEventListener('input', () => {
  ctx.strokeStyle = color.value;
})

canvas.addEventListener('mousemove', (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  const mx = event.movementX;
  const my =  event.movementY;

  if (event.buttons > 0) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - mx, y - my);
    ctx.stroke();
    ctx.closePath();
  }
})

