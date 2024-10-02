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