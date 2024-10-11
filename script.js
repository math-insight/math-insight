const textElement = document.getElementById("title");
const text = "Koło Naukowe Matematyki Stosowanej Insight.";
let index = 0;

const allProjects = document.getElementById("all-projects");

function typeText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  } else {
    document.getElementById("caret").style.display = "none";
  }
}

function getProjects() {
  for (const element of projects) {
    const seeMoreButton = element.path
      ? `<div class="button-container">
          <button class="see-more-button hover-line" type="button" onClick=location.href='more-about-projects/${element.path}.html'>Zobacz więcej.</button>
        </div>`
      : "";

    allProjects.innerHTML += `
      <div class="project">
        <h2 class="project-title">${element.title}</h2>
        <p class="project-description">${element.description}</p>
        ${seeMoreButton}
      </div>
    `;
  }
}

window.onload = function () {
  textElement.style.display = "block";
  typeText();
  getProjects();
};
