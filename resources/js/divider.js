let divider = document.querySelector(".divider");
let dividerTwo = document.querySelector(".divider__two");

let dividerData = [
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

for (let i = 0; i < dividerData.length; i++) {
  wrapper = createElements({
    Tag: "div",
    classList: "divider-wrapper",
    childNodes: [dividerData[i].position],
  });

  wrapper.innerHTML = `
<div class="${dividerData[i].className}">
<div><h2 class="weight-normal">${dividerData[i].h2}</h2></div>
<div><h1>${dividerData[i].h1}</h1></div>
</div>
<div class="divider-wrapper_circle">
    
</div>`;
}
