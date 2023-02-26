//Parent element to append
let articlesContainer = document.querySelector(".article-container");
let BeigeContainer = document.querySelector(".beige-section");

const locations = [articlesContainer, BeigeContainer]

//Buy button
let button = [];

locations.map((location) => {
  button = createElements({
  Tag: "button",
  classList: "buy-button bold uppercase",
  childNodes: [location],
});

button.innerText = "buy now";
})

