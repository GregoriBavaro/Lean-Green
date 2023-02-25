let sectionFooter = document.querySelector(".section-footer");
let sectionFooterTwo = document.querySelector(".section-footer__two");

let moneyBackData = [
  {
    text: "90-Day Money Back Guarantee  |  All transactions secured and encrypted Cancel your subscription at any time",
    position: sectionFooter,
  },
  {
    text: "90-Day Money Back Guarantee  |  All transactions secured and encrypted",
    position: articlesContainer,
  },
  {
    text: "90-Day Money Back Guarantee  |  All transactions secured and encrypted Cancel your subscription at any time",
    position: sectionFooterTwo,
  },
];

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

