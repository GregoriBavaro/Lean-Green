//Data
import { dividerData } from "../data/divider-data.js";

let wrapper = [];

dividerData.map((items) => {
  wrapper = createElements({
    Tag: "div",
    classList: "divider-wrapper",
    childNodes: [items.position],
  });

  wrapper.innerHTML = `
    <div class="${items.className}">
      <div><h2 class="weight-normal">${items.h2}</h2></div>
      <div><h1>${items.h1}</h1></div>
    </div>
    <div class="divider-wrapper_circle"></div>`;
});
