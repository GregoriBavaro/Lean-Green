//Data
import { footer, footerBottom, footerPara, footerBox } from "../data/footer-data.js";

//Parent element
let footerContainer = document.querySelector(".footer-container");
let footerContainerMiddle = document.querySelector(".footer-container__middle");
let footerContainerBottom = document.querySelector(".footer-container__bottom");

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
let linksContainerBottom = [];

footer.map(({ link }) => {
  linksWrapper = createElements({
    Tag: "div",
    classList: "links-wrapper",
    childNodes: [linksContainer],
  });
  linksWrapper.innerHTML = `<a href="#">${link}</a>`;
});

footerBottom.map(({ link }) => {
  linksContainerBottom = createElements({
    Tag: "div",
    classList: "links-container__bottom",
    childNodes: [footerContainerMiddle],
  });

  linksContainerBottom.innerHTML = `<a href="#">${link}</a>`;
});

footerContainerBottom.innerHTML = `
    <div class="footer-bottom__text"><span>${footerPara}</span></div>
    <div class="footer-box"><span>${footerBox}</span></div>
`