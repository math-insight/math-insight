const textElement = document.getElementById('title');
const text = "Koło naukowe matematyki stosowanej Insight.";
        let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    } else {
        document.getElementById('caret').style.display = 'none';
    }
}

window.onload = function() {
    textElement.style.display="block"
    typeText();
}
