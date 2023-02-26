//Data
import { beigeBannerData } from "../data/banners-data.js";

//Parent element
let BeigeBannerContainer = document.querySelector(".beige-banner-container");

BeigeBannerContainer.innerHTML = `<h1>SAFE AND EFFECTIVE</h1>`

//Models wrapper
let beigeModelsWrapper = createElements({
  Tag: "div",
  classList: "beige-model-wrapper",
  childNodes: [BeigeBannerContainer],
});

let beigeModel = [];

beigeBannerData.map((model) => {
  beigeModel = createElements({
    Tag: "div",
    classList: "beige-model",
    childNodes: [beigeModelsWrapper],
  });

  beigeModel.innerHTML = `
    <div class="beige-model__img">
        <img src=${model.imgPath} />
    </div>
    <div class="beige-model__title green-text">
        <h1>${model.title}</h1>
    </div>
    <div class="beige-model__text">
        <p>${model.paragraph}</p>
    </div>
  `
});
