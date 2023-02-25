let offersContainer = document.querySelector(".offers-container");
let offersContainerTwo = document.querySelector(".offers-container__two");

const positions = [
  { position: offersContainer },
  { position: offersContainerTwo },
];

//Data
const data = [
  {
    modalBackgroundColor: "white",
    header: "one time purchase",
    headerColor: "beige",
    headerText: "3 Pouches",
    headerTextColor: "",
    imgPath: "./resources/images/3pouches.png",
    imgClass: "threePouches",
    saveText: "37.50%",
    amountText: "149.95",
    regularPriceText: "239.85",
    buttonInnerText: "$5 Ground shipping",
    position: offersContainer,
  },
  {
    modalBackgroundColor: "white",
    header: "one time purchase",
    headerColor: "beige",
    headerText: "3 Pouches",
    headerTextColor: "",
    imgPath: "./resources/images/3pouches.png",
    imgClass: "threePouches",
    saveText: "37.50%",
    amountText: "149.95",
    regularPriceText: "239.85",
    buttonInnerText: "$5 Ground shipping",
    position: offersContainerTwo,
  },
  {
    modalBackgroundColor: "grey",
    header: "subscribe & save",
    headerColor: "green",
    headerText: "Buy 4",
    headerTextColor: "Get 1 FREE",
    imgPath: "./resources/images/5pouches.png",
    imgClass: "fivePouches",
    saveText: "50%",
    amountText: "199.95",
    regularPriceText: "399.75",
    buttonInnerText: "Free shipping",
    position: offersContainer,
  },
  {
    modalBackgroundColor: "grey",
    header: "subscribe & save",
    headerColor: "green",
    headerText: "Buy 4",
    headerTextColor: "Get 1 FREE",
    imgPath: "./resources/images/5pouches.png",
    imgClass: "fivePouches",
    saveText: "50%",
    amountText: "199.95",
    regularPriceText: "399.75",
    buttonInnerText: "Free shipping",
    position: offersContainerTwo,
  },
];

// Custom function for creating HTML DOM Elements that receives an object for element config

let createElements = (initObj) => {
  var element = document.createElement(initObj.Tag);
  for (var prop in initObj) {
    if (prop === "childNodes") {
      initObj.childNodes.forEach(function (node) {
        node.appendChild(element);
      });
    } else if (prop === "attributes") {
      initObj.attributes.forEach(function (attr) {
        element.setAttribute(attr.key, attr.value);
      });
    } else element[prop] = initObj[prop];
  }
  return element;
};

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
