let i = 0;
let txt = 'Koło Naukowe Matematyki Stosowanej\nInsight.';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        if (txt.charAt(i) === '\n') {
            document.getElementById("typewriter").innerHTML += '<br>';
        } else {
            document.getElementById("typewriter").innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;
