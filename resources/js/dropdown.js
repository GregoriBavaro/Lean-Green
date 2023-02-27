//Data
import { dropdowns } from "../data/dropdown-data.js";

//Parent element
let dropdownMessageContainer = document.querySelector(
  ".dropdown-messages-container"
);

const sectionHeader = "Frequently Asked Questions";

dropdownMessageContainer.innerHTML = `<h1>${sectionHeader}</h1>`;

let dropdownDiv = [];

dropdowns.map(({ title, text, id, pos }) => {
  dropdownDiv = createElements({
    Tag: "div",
    classList: "dropdown-div green-bg",
    childNodes: [dropdownMessageContainer],
  });

  dropdownDiv.innerHTML = `
  <div class="dropdown-title ${id}">
    ${title}<span class="arrows"><i class="arrow ${pos}"></i></span>
  </div>
  <div class="dropdown-text hide ${id}">
    <p>${text}</p>
  </div>
  `;
});

//Add event listener to all of the dynamically printed div's
let dropdownButtons = document.querySelectorAll(".dropdown-title");
let dropdownText = document.querySelectorAll(".dropdown-text");

dropdownText.forEach((div) => {
  if (div.classList.contains("1")) {
    div.classList.add("show");
    div.classList.remove("hide");
  }
});

const dropText = () => {
  dropdownText.forEach((text) => {
    if (text.classList.contains("show")) {
      text.classList.remove("show");
      text.classList.toggle("hide");
    }
  });
};

dropdownButtons.forEach((div) => {
  div.addEventListener("click", function (e) {
    const click = e.target.nextElementSibling;

    if (!click) return;
    dropText();

    if (click.classList.contains("show")) {
      click.classList.remove("show");
      click.classList.toggle("hide");
    }
    if (click.classList.contains("hide")) {
      click.classList.remove("hide");
      click.classList.toggle("show");
    }
  });
});
