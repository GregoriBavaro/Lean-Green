let articlesContainer = document.querySelector(".article-container");

let button = createElements({
  Tag: "button",
  classList: "buy-button bold uppercase",
  childNodes: [articlesContainer],
});

button.innerHTML = "buy now";
