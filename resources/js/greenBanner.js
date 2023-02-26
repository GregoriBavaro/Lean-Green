//Data
import { greenBannerData } from "../data/banners-data.js";

//Parent element
let greenBanner = document.querySelector(".green-banner");
let greenBannerTwo = document.querySelector(".green-banner__two");

let greenBannerWrapper = [];

const greenBannerLocations = [greenBanner, greenBannerTwo];

const {
  headerText: h1,
  para1,
  para2,
  para3,
  para4,
  para5,
  para6,
  para7,
  para8,
  imgPath,
} = greenBannerData;

greenBannerLocations.map((location) => {
  greenBannerWrapper = createElements({
    Tag: "div",
    classList: "green-banner-wrapper",
    childNodes: [location],
  });

  greenBannerWrapper.innerHTML = `
<h1>${h1}</h1>
<div class="green-been-wrapper__inside">
    <div class="green-been-wrapper__para-one"><p>${para1}
    <br><br>
    ${para2}
    <br><br>
    ${para3}
    <br><br>
    ${para4}
    <br><br>
    ${para5}</p></div>
    <div class="green-been-wrapper__img"><img src=${imgPath} /></div>
    <div class="green-been-wrapper__para-two"><p>${para6}
    <br><br>
    ${para7}
    <br><br>
    ${para8}</p></div>
</div>
`;
});
