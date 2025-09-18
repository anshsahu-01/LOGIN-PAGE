
const lines = [
    "Join Us For Better Tomorrow...",
    "Level Up Your New Journey With Us...",
    "Connect With Us and Have Fun...",
    "Join Us And Feel The Digital World..."
];

let currentLine = 0;
let charIndex = 0;
const typingSpeed = 40; // milliseconds per character
const erasingSpeed = 40; // speed of erasing
const delayBetweenLines = 2000; // 3 seconds delay between lines

const typewriterElement = document.getElementById("typewriter");

function typeLine() {
    if (charIndex < lines[currentLine].length) {
        typewriterElement.textContent += lines[currentLine].charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, typingSpeed);
    } else {
        setTimeout(eraseLine, delayBetweenLines);
    }
}

function eraseLine() {
    if (charIndex > 0) {
        typewriterElement.textContent = lines[currentLine].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseLine, erasingSpeed);
    } else {
        currentLine = (currentLine + 1) % lines.length;
        setTimeout(typeLine, typingSpeed);
    }
}

// Start typing when page loads
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(typeLine, delayBetweenLines);
});


const toggleBtns = document.querySelectorAll('.toggle-btn');
  const signInForm = document.getElementById('signInForm');
  const signUpForm = document.getElementById('signUpForm');
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  const toggleDot = themeToggle.querySelector('.toggle-dot');

  function showSignIn() {
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
    toggleBtns[0].classList.add('active');
    toggleBtns[1].classList.remove('active');
  }

  function showSignUp() {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
    toggleBtns[0].classList.remove('active');
    toggleBtns[1].classList.add('active');
  }


