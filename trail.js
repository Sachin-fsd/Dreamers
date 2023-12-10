const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let spots = [];
let hue = 0;
// ctx.globalCompositeOperation = "lighter";

const mouse = {
  x: undefined,
  y: undefined,
};

document.addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  for (let i = 0; i < 3; i++) {
    spots.push(new Particle());
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 2 + 0.1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = "white";
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.1) {
      this.size -= 0.03;
    }
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleParticle() {
  for (let i = 0; i < spots.length; i++) {
    spots[i].update();
    spots[i].draw();
    for (let j = i; j < spots.length; j++) {
      const dx = spots[i].x - spots[j].x;
      const dy = spots[i].y - spots[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 90) {
        ctx.beginPath();
        ctx.strokeStyle = spots[i].color;
        ctx.lineWidth = spots[i].size / 10;
        ctx.moveTo(spots[i].x, spots[i].y);
        ctx.lineTo(spots[i].x, spots[i].y); // here change both i to j to change cursor style
        ctx.stroke();
      }
    }
    if (spots[i].size <= 0.3) {
      spots.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticle();
  hue++;
  requestAnimationFrame(animate);
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  animate();
});

window.addEventListener("mouseout", function () {
  mouse.x = undefined;
  mouse.y = undefined;
});

// Define a function to resize and reposition the canvas
function resizeCanvas() {
  // Set the canvas position to match the window scroll position
  canvas.style.left = window.scrollX + "px";
  canvas.style.top = window.scrollY + "px";

  // Set the canvas size to match the window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Call the function once when the page loads
resizeCanvas();

// Add event listeners for window resize and scroll events
window.addEventListener("resize", resizeCanvas);
window.addEventListener("scroll", resizeCanvas);


animate();
