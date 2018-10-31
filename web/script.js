const sides = [
  {
    "verb": "code",
    "spacing": 0.01,
    "face": "show-front"
  },
  {
    "verb": "make",
    "spacing": -0.06,
    "face": "show-top"
  },
  {
    "verb": "build",
    "spacing": 0.01,
    "face": "show-back"
  }
];

let currentSideIndex = 0;

function init() {
  const verbEl = document.getElementById('verb');
  verbEl.style.letterSpacing = sides[currentSideIndex].spacing + 'em';
}

function displayNextSide() {
  const boxEl = document.getElementById('object');
  const verbEl = document.getElementById('verb');

  boxEl.classList.remove(sides[currentSideIndex].face);
  currentSideIndex = ++currentSideIndex % sides.length;
  boxEl.classList.add(sides[currentSideIndex].face);
  
  verbEl.innerHTML = sides[currentSideIndex].verb;
  verbEl.style.letterSpacing = sides[currentSideIndex].spacing + 'em';
}

document.addEventListener('DOMContentLoaded', function() {
  init();
  setInterval(displayNextSide, 3000);
});
