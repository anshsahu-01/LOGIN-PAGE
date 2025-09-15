// Theme Toggle Elements
document.addEventListener("DOMContentLoaded", () => {
  const themeIcon = document.querySelector(".theme-toggle i");
  const toggleDot = document.querySelector(".toggle-dot");

  // Check stored theme on page load
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    if (themeIcon && toggleDot) {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
      toggleDot.style.left = 'calc(100% - 26px)';
    }
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    if (themeIcon && toggleDot) {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
      toggleDot.style.left = '4px';
    }
  }
});

// Toggle Theme Function
function toggleTheme() {
  const themeIcon = document.querySelector(".theme-toggle i");
  const toggleDot = document.querySelector(".toggle-dot");

  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  if (document.body.classList.contains("dark")) {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    toggleDot.style.left = 'calc(100% - 26px)';
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    toggleDot.style.left = '4px';
    localStorage.setItem("theme", "light");
  }
}
