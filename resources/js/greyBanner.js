//Data
import {
  greyBannerDataLeft,
  greyBannerDataRight,
  greyBannerHeaderText,
  greyBannerHeaderParagraph,
} from "../data/banners-data.js";

// Main append parent element
let greyBannerContainer = document.querySelector(".grey-banner-container");

//children of greyBannerContainer
let greyBannerHeader = createElements({
  Tag: "div",
  classList: "grey-banner-header",
  childNodes: [greyBannerContainer],
});

greyBannerHeader.innerHTML = `
    <h2 class="capitalize green-text">${greyBannerHeaderText}</h2>
    <h4 class="bold">${greyBannerHeaderParagraph}</h4>
`;
//Wrapper
let greyBannerWrapper = createElements({
  Tag: "div",
  classList: "grey-banner-wrapper",
  childNodes: [greyBannerContainer],
});
//Left Div
let greyBannerDivLeft = createElements({
  Tag: "div",
  classList: "grey-banner-div__left",
  childNodes: [greyBannerWrapper],
});

//IMG wrapper
let greyBannerDivImg = createElements({
  Tag: "div",
  classList: "grey-banner-div__img",
  childNodes: [greyBannerWrapper],
});

greyBannerDivImg.innerHTML = `<img src="./resources/images/products/1pouch-no-star.png" alt="green&lean" />`;

//Right Div
let greyBannerDivRight = createElements({
  Tag: "div",
  classList: "grey-banner-div__right",
  childNodes: [greyBannerWrapper],
});

//store li's in array
let greyBannerDivLeftLi = [];
let greyBannerDivRightLi = [];

//Left Ul

let greyBannerDivLeftUl = createElements({
  Tag: "ul",
  classList: "grey-banner-div__left-ul",
  childNodes: [greyBannerDivLeft],
});

//Right Ul

let greyBannerDivRightUl = createElements({
  Tag: "ul",
  classList: "grey-banner-div__right-ul",
  childNodes: [greyBannerDivRight],
});

//Map left
greyBannerDataLeft.map((item) => {
  greyBannerDivLeftLi = createElements({
    Tag: "li",
    classList: "li block",
    childNodes: [greyBannerDivLeftUl],
  });
  greyBannerDivLeftLi.innerHTML = `<div class="li-div-left"><span><h4>${item}</h4></span><img src="./resources/images/icons/check.png" alt="green&lean" /></div> `;
});

//Map right
greyBannerDataRight.map((item) => {
  greyBannerDivRightLi = createElements({
    Tag: "li",
    classList: "li block",
    childNodes: [greyBannerDivRightUl],
  });
  greyBannerDivRightLi.innerHTML = `<div class="li-div-right"><img src="./resources/images/icons/check.png" alt="green&lean" /><span><h4>${item}</h4></span></div>  `;
});
