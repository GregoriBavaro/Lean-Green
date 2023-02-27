//Data
import { beigeBannerData } from "../data/banners-data.js";

//Parent element
let BeigeBannerContainer = document.querySelector(".beige-banner-container");

BeigeBannerContainer.innerHTML = `<h3>SAFE AND EFFECTIVE</h3>`

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
        <h5 class="uppercase">${model.title}</h5>
    </div>
    <div class="beige-model__text">
        <p>${model.paragraph}</p>
    </div>
  `
});
