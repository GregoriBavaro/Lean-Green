let divider = document.querySelector(".divider");
let dividerTwo = document.querySelector(".divider__two");

const dividerData = [
  {
    h2: "Experience",
    h1: "POWERFUL RESULTS",
    position: divider,
    className: "divider-wrapper__text",
  },
  {
    h2: "Rediscover What Natural Energy ",
    h1: "Really Feels Like",
    position: dividerTwo,
    className: "divider-wrapper__textTwo",
  },
];

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


