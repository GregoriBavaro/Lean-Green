import { moneyBackData } from "../data/moneyBack-data.js";

let moneyBackContainer = [];

moneyBackData.map((items) => {
moneyBackContainer = createElements({
    Tag: "div",
    classList: "money-back-container",
    childNodes: [items.position],
  });

  moneyBackContainer.innerHTML = `
    <div>
      <img src="./resources/images/money-back-guarantee.png" />
    </div>
    <div class="section-footer__text">
      <p>${items.text}</p>
    </div>`;
})

