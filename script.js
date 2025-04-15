// === Dynamic Color Based on System Time ===

function getHSLColor(hue) {
  return `hsl(${hue}, 100%, 50%)`;
}

function getRainbowColor(tick) {
  const hue = (tick % 60) * 6;
  return getHSLColor(hue);
}

function getBlueColor(tick) {
  const hues = [210, 240]; // dark blue and blue
  return getHSLColor(hues[tick % hues.length]);
}

let rainbowTick = 0;
let blueTick = 0;

function updateTimeBasedColors() {
  const rainbowColor = getRainbowColor(rainbowTick);
  document.querySelectorAll('h1, section h2').forEach(el => {
    el.style.color = rainbowColor;
  });

  const blueColor = getBlueColor(blueTick);
  document.querySelectorAll('a, nav a').forEach(el => {
    el.style.color = blueColor;
  });

  rainbowTick += 2;
  blueTick += 1;
}

updateTimeBasedColors();
setInterval(updateTimeBasedColors, 2000);

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-mode');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
});
