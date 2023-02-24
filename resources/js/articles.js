let articles = document.querySelector(".articles");

//Data
let dataArticles = [
  {
    imgPath: "./resources/images/articles/all-day-energy.png",
    imgAlt: "all-day energy photo",
    articleHeader: "all-day energy",
    articleParagraph:
      "Feel a calm yet dominant energy surge throughout your body. <span>Green&Lean</span> is not just a quick rise and fall. The ingredients inside this blend assist you in experiencing energy throughout your entire day.",
    articleMessage: "Feel younger and more invincible.",
  },
  {
    imgPath: "./resources/images/articles/sharper-focus.png",
    imgAlt: "sharper focus photo",
    articleHeader: "sharper focus",
    articleParagraph:
      "<span>Green&Lean</span> can boost attention, concentration, and mental clarity. It has an incredible power to give your brain a fresh, alert, and razor-sharp sense of focus all day long.",
    articleMessage:
      "Tackle the to-do's you've been putting off or haven't wanted to do with new determination.",
  },
  {
    imgPath: "./resources/images/articles/maintain-calmness.png",
    imgAlt: "maintain calmness photo",
    articleHeader: "maintain calmness",
    articleParagraph:
      "<span>Green&Lean</span> contains compounds that help amplify alpha brain waves. Feel locked-in on the task in front of you with inner stillness.<br /><br /> Alpha brain waves keep your mind energized yet calm, focused and creative, while heightening memory retention. You get a sustainable, long-lasting surge in natural energy that keeps you engaged, centered, and in the zone.",
    articleMessage:
      "You're only a sip away from getting into the zone you've been waiting for.",
  },
  {
    imgPath: "./resources/images/articles/improve-memory.png",
    imgAlt: "improve memory photo",
    articleHeader: "improve memory",
    articleParagraph:
      "The ingredients inside <span>Green&Lean</span> increase Brain Derived Neurotrophic Factors (BDNF). This nourishes your brain’s neurons, maximizes memory, and accelerates thinking.<br /><br /> It can encourage the production of neurons in the brain, and protects from embarrassing “mental hiccups” and forgettfullness.  ",
    articleMessage: "Feel whip-smart on a more consistent basis.",
  }
];

let articlesWrapper = [];
let articleImgWrapper = [];
let articleHeaderWrapper = [];
let articleMessageWrapper = [];
let articleTextWrapper = [];

for (let i = 0; i < dataArticles.length; i++) {
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

  articleImgWrapper.innerHTML = `<img src="${dataArticles[i].imgPath}" alt="${dataArticles[i].imgAlt}" />`;

  articleHeaderWrapper = createElements({
    Tag: "div",
    classList: "article-header",
    childNodes: [articlesWrapper],
  });

  articleHeaderWrapper.innerHTML = `<h1 class="green-text uppercase">${dataArticles[i].articleHeader}</h1>`

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

  articleParagraphWrapper.innerHTML = `<p>${dataArticles[i].articleParagraph}</p>`

  articleMessageWrapper = createElements({
    Tag: "div",
    classList: "article-message",
    childNodes: [articleTextWrapper],
  });

  articleMessageWrapper.innerHTML = `<p class="red-text bold italic">${dataArticles[i].articleMessage}</p>`
}
