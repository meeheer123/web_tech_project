function welcomeSpeech() {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "Welcome to FoodTech! You can navigate this site using keyboard shortcuts: Alt plus H for Home, Alt plus M for Menu, Alt plus S for Specials, Alt plus A for About Us, and Alt plus C for Contact.";
    msg.lang = "en-US";  // Set language to English, US accent
    window.speechSynthesis.speak(msg);
  }

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