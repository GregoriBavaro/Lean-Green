//Data
import { footer } from "../data/footer-data.js";

//Parent element
let footerContainer = document.querySelector(".footer-container");

let footerWrapper = createElements({
  Tag: "div",
  classList: "footer-wrapper",
  childNodes: [footerContainer],
});

let linksContainer = createElements({
  Tag: "div",
  classList: "links-container",
  childNodes: [footerWrapper],
});

let linksWrapper = [];

footer.map(({ link }) => {
  linksWrapper = createElements({
    Tag: "div",
    classList: "links-wrapper",
    childNodes: [linksContainer],
  });

  linksWrapper.innerHTML = `<a href="#">${link}</a>`;
});
