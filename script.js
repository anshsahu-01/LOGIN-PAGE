
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

// Wait for full page load
// Step 1: Add animated spans right after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const welcomeText = document.getElementById('welcome-text');
  const text = "Welcome to Cyvanta";

  text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${i * 0.15}s`;
    welcomeText.appendChild(span);
  });
});

// Step 2: Your original logic — untouched
window.onload = function () {
  const preloader = document.getElementById('preloader');

  // Check if page was reloaded
  const isReloaded = performance.getEntriesByType('navigation')[0].type === 'reload';

  // Check if it's first visit
  const isFirstVisit = !sessionStorage.getItem('visitedOnce');

  if (isReloaded || isFirstVisit) {
    sessionStorage.setItem('visitedOnce', 'true');

    preloader.style.display = 'flex';

    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 1000);
    }, 1500);
  } else {
    preloader.style.display = 'none';
  }
};


// CYVANTA/public/login/script.js
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  const res = await fetch('/api/auth/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem('token', data.token);
    window.location.href = '/dashboard/index.html';
  } else {
    alert(data.error);
  }
});
