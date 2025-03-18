const btn = document.getElementById('startOrbit');
const sat = document.getElementById('sat');

let angle = Math.PI; // start od π
const endAngle = 1.55 * Math.PI;
const centerX = 400;
const centerY = 350;
const R = 700;
let animFrame;

function animate() {
  if (angle >= endAngle) {
    // po dojściu do 1.75π – stop animacji
    cancelAnimationFrame(animFrame);
    
    return;
  }
  sat.style.visibility = 'visible';
  // Obliczamy pozycję
  const x = centerX + R * Math.cos(angle);
  const y = centerY + R * Math.sin(angle);

  sat.style.left = x + "px";
  sat.style.top  = y + "px";

  sat.style.transform = `translate(50%, 50%) rotate(${(angle * 180 / Math.PI) + 90}deg)`;

  angle += 0.01;
  animFrame = requestAnimationFrame(animate);
}

btn.addEventListener('click', () => {
  // reset i start
  angle = Math.PI;
  animate();
});
function startAnimation() {
    // Reset kąta
    angle = Math.PI;
    
    if (animFrame !== null) {
      cancelAnimationFrame(animFrame);
    }
    animate();
  }
  btn.addEventListener('click', () => {
    startAnimation();
 });

  setInterval(() => {
    startAnimation();
  }, 20000);