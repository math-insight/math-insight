var titleText = "Koło naukowe matematyki stosowanej Insight.";
var title = document.getElementById('title');
var index = 0;

function typeWriter() {
    if (index < titleText.length) {
        title.innerHTML += titleText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

function expandSlide() {
    var slide2 = document.getElementById('slide2');
    var contentWrapper = document.getElementById('contentWrapper');
    var arrow = document.getElementById('arrow');

    contentWrapper.style.maxHeight = 'none';
    arrow.style.display = 'none';

    slide2.style.height = `${contentWrapper.scrollHeight}px`;
}

typeWriter();

window.onload = function() {
    var contentWrapper = document.getElementById('contentWrapper');
    var content = document.getElementById('content');
    var arrow = document.getElementById('arrow');

    if (content.offsetHeight > contentWrapper.offsetHeight) {
        arrow.classList.add('show');
    }
};

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

window.addEventListener('resize', checkTextWidth);

function checkTextWidth() {
    const slideWidth = document.querySelector('.slide:nth-child(3)').offsetWidth;
    const contactItems = document.querySelectorAll('.contact-item p');
    let tooWide = false;

    contactItems.forEach(item => {
        if (item.scrollWidth > slideWidth) {
            tooWide = true;
        }
    });

    if (tooWide) {
        contactItems.forEach(item => {
            item.style.fontSize = '60%';
        });
    }
}

checkTextWidth();

