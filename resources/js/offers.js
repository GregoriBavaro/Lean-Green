//Data
import {data} from "../data/offers-data.js"

//Store unique element data
let modelWrapper = [];
let model = [];
let modelHeader = [];
let modelHeaderText = [];
let modelH4 = [];
let imgContainer = [];
let saveText = [];
let amountText = [];
let buyButtonContainer = [];

//Using loop to reuse code for multiple models
data.map((items) => {
  modelWrapper = createElements({
    Tag: "div",
    classList: "model-wrapper",
    childNodes: [items.position],
  });

  model = createElements({
    Tag: "div",
    classList: `model ${items.modalBackgroundColor}`,
    childNodes: [modelWrapper],
  });

  modelHeader = createElements({
    Tag: "div",
    classList: `model-header ${items.headerColor}`,
    childNodes: [model],
  });

  modelHeaderText = createElements({
    Tag: "h3",
    classList: "model-header__text",
    childNodes: [modelHeader],
  });
  modelHeaderText.innerHTML = `${items.header}`;

  modelH4 = createElements({
    Tag: "h4",
    classList: "model-h4",
    childNodes: [model],
  });
  modelH4.innerHTML = `${items.headerText} <span class="red-text">${items.headerTextColor}</span>`;

  imgContainer = createElements({
    Tag: "div",
    classList: "model-img-container",
    childNodes: [model],
  });
  imgContainer.innerHTML = `<img class="${items.imgClass}" src=${items.imgPath} />`;

  saveText = createElements({
    Tag: "div",
    classList: "model-save",
    childNodes: [model],
  });
  saveText.innerHTML = `Save ${items.saveText}`;

  amountText = createElements({
    Tag: "h1",
    classList: "model-amount",
    childNodes: [model],
  });
  amountText.innerHTML = `$${items.amountText}`;

  buyButtonContainer = createElements({
    Tag: "div",
    classList: "model-button-container",
    childNodes: [model],
  });
  buyButtonContainer.innerHTML = `
  <button>
    <h2 class="uppercase bold">buy now</h2>${items.buttonInnerText}
  </button> 
  <h6 class="weight-500">Regular price: 
    <span class="line-through">${items.regularPriceText}
  </span></h6>`;

  let payOptions = createElements({
    Tag: "div",
    classList: "model-pay-options__wrapper",
    childNodes: [model],
  });
  payOptions.innerHTML = `<img src="./resources/images/pay-options.png" />`;
});
