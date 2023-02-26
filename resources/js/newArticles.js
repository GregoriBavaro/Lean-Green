let newArticlesContainer = document.querySelector(".new-articles");

//Data
const newArticleHeader = "12 Potent Super-Nutrient Ingredients";
const newArticleHeaderPara =
  "Selected to synergistically compound benefits and give you elite energy,focus, cognitive retention, and stress relief.";


//Array of articles
let newArticles = [];

// read local JSON
fetchData("./resources/data/articles.json", setData);

// setting exact copy with the spread operator
function setData(data) {
  newArticles = [...data.newArticles];
}

let newArticlesPageHeader = createElements({
  Tag: "div",
  classList: "new-articles-page__header",
  childNodes: [newArticlesContainer],
});

newArticlesPageHeader.innerHTML = `
<h1 class="green-text">
    ${newArticleHeader}
</h1>
<p class="bold">
    ${newArticleHeaderPara}
</p>
`;

let newArticleWrapper = [];
let newArticlesText = [];
let newArticlesH1 = [];
let newArticlesP = [];
let newArticlesUl = [];
let newArticlesPhotoWrapper = [];
let newArticlesLi = [];

setTimeout(() => {
  newArticles.map((items) => {
    newArticleWrapper = createElements({
      Tag: "div",
      classList: "new-articles-wrapper",
      childNodes: [newArticlesContainer],
    });

    newArticlesText = createElements({
      Tag: "div",
      classList: "new-articles-text",
      childNodes: [newArticleWrapper],
    });

    newArticlesPhotoWrapper = createElements({
      Tag: "div",
      classList: "new-articles-photo-wrapper",
      childNodes: [newArticleWrapper],
    });

    newArticlesPhotoWrapper.innerHTML = `<img src="${items.imgPath}" />`;

    newArticlesH1 = createElements({
      Tag: "h1",
      classList: "new-articles-h1 green-text",
      childNodes: [newArticlesText],
    });

    newArticlesH1.innerHTML = items.header;

    newArticlesP = createElements({
      Tag: "p",
      classList: "new-articles-p",
      childNodes: [newArticlesText],
    });

    newArticlesP.innerHTML = items.text;

    newArticlesUl = createElements({
      Tag: "ul",
      classList: "new-articles-ul",
      childNodes: [newArticlesText],
    });

    newArticlesLi = createElements({
      Tag: "li",
      classList: "new-articles-li",
      childNodes: [newArticlesUl],
    });

    let example = [...items.lists];
    let array = example.map((e) => "&#x2022;" + " " + e + "<br>").join("");
    newArticlesLi.innerHTML = `${array}`;
  });
}, 200);
