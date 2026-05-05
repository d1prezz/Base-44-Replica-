const texts = [
  "Design a personal budget tracker with charts",
  "Generate a workout planner for beginners",
  "Design a budget tracker with charts",
  "Make a note taking app that syncs in real time"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentText = texts[textIndex];
  const typing = document.getElementById("typing");

  if (!deleting) {
    typing.innerHTML = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }

  } else {
    typing.innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();