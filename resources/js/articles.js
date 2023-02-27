//Parent element to childAppend
let articles = document.querySelector(".articles");

//Data
let dataArticles = [];

// read local JSON
fetchData("./resources/data/articles.json", setData);

// setting exact copy with the spread operator 
function setData(data) {
  dataArticles = [...data.articles];
}

let articlesWrapper = [];
let articleImgWrapper = [];
let articleHeaderWrapper = [];
let articleMessageWrapper = [];
let articleTextWrapper = [];

setTimeout(() => {
  dataArticles.map((items) => {
    articlesWrapper = createElements({
      Tag: "div",
      classList: "articles-wrapper",
      childNodes: [articles],
    });

    articleImgWrapper = createElements({
      Tag: "div",
      classList: "article-img",
      childNodes: [articlesWrapper],
    });

    articleImgWrapper.innerHTML = `<img src="${items.imgPath}" alt="${items.imgAlt}" />`;

    articleHeaderWrapper = createElements({
      Tag: "div",
      classList: "article-header",
      childNodes: [articlesWrapper],
    });

    articleHeaderWrapper.innerHTML = `<h4 class="green-text uppercase">${items.articleHeader}</h4>`;

    articleTextWrapper = createElements({
      Tag: "div",
      classList: "articles-text",
      childNodes: [articlesWrapper],
    });

    articleParagraphWrapper = createElements({
      Tag: "div",
      classList: "article-paragraph",
      childNodes: [articleTextWrapper],
    });

    articleParagraphWrapper.innerHTML = `<p>${items.articleParagraph}</p>`;

    articleMessageWrapper = createElements({
      Tag: "div",
      classList: "article-message",
      childNodes: [articleTextWrapper],
    });

    articleMessageWrapper.innerHTML = `<p class="red-text bold italic">${items.articleMessage}</p>`;
  });
}, 200);
