const increaseFontBtn = document.getElementById('increase-font');
const decreaseFontBtn = document.getElementById('decrease-font');
let currentFontSize = 16;

increaseFontBtn.addEventListener('click', () => {
if (currentFontSize < 24) {
    currentFontSize += 1;
    document.body.style.fontSize = currentFontSize + 'px';
}
});

decreaseFontBtn.addEventListener('click', () => {
if (currentFontSize > 12) {
    currentFontSize -= 1;
    document.body.style.fontSize = currentFontSize + 'px';
}
});

document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'h') {
        document.getElementById('nav-home').click();
    } else if (event.altKey && event.key === 'm') {
        document.getElementById('nav-menu').click();
    } else if (event.altKey && event.key === 's') {
        document.getElementById('nav-specials').click();
    } else if (event.altKey && event.key === 'a') {
        document.getElementById('nav-about').click();
    } else if (event.altKey && event.key === 'c') {
        document.getElementById('nav-contact').click();
    } else if (event.altKey && event.key === '+') {
        document.getElementById('increase-font').click();
    } else if (event.altKey && event.key === '-') {
        document.getElementById('decrease-font').click();
    }
});

function smoothScrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;
  
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Adjust this for the speed of the scroll
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    // Easing function for smooth scrolling effect
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  // Click event for navigation links with smooth scrolling
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        smoothScrollToSection(targetId);
      });
    });
  });