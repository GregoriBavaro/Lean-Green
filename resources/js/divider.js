let divider = document.querySelector(".divider");

let wrapper = createElements({
  Tag: "div",
  className: "divider-wrapper",
  childNodes: [divider],
});

wrapper.innerHTML = `
<div class="divider-wrapper__text">
    <h2 class="weight-normal">Experience</h2>
    <h1>POWERFUL RESULTS</h1>
</div>
<div class="divider-wrapper_circle">
    
</div>`;
