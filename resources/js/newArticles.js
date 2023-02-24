let newArticlesContainer = document.querySelector(".new-articles");

//Data

const newArticles = [
  {
    header: "KSM-66® Ashwagandha",
    text: "A trademarked, pure version of the herb Ashwagandha. Backed by 22 “gold standard” human clinical trials, and a proprietary extraction process with over 14 years of research [16].<br><br> A February 2020 study from The Journal of Nutrients showed it can help supercharge your mitochondria’s ability to [17]:",
    lists: [
      "<span>Produce clean, new energy.</span>",
      "<span>Help to reduce stress and anxiety.</span>",
      "<span>Helps to improve learning, concentration and memory</span>.",
    ],

    imgPath: "./resources/images/articles/ksm.png",
  },
  {
    header: "Neurofactor®",
    text: "An all-natural, patented extract of the whole coffee arabica fruit. Inside the skin of this fruit is a rare nutrient that boosts levels of brain derived neurotrophic factor (BDNF). [5] BDNF nourishes your brain’s existing neurons, which leads to:",
    lists: [
      "<span>Maximizes memory </span>- and gives you lightning-quick thinking.",
      "<span>Encourages growth of neurons in the brain</span> - at any age. ",
      "<span>Increase BDNF</span> levels by 143% naturally",
    ],
    imgPath: "./resources/images/articles/neurofactor.png",
  },
  {
    header: "Synapsa®",
    text: "Synapsa® is a patented, standardized extract of a plant called Bacopa Monnieri. For thousands of years, Eastern healers called it The Herb of Grace for its astounding ability to “sharpen the intellect” at any age.<br><br> Bacopa Monnieri acts as a shield to protect mitochondria from stress [6].",
    lists: [
      "<span>Energy levels remaining at their peak</span> - and stress levels remain low.",
      "<span>Improved memory and information retention.</span>",
    ],
    imgPath: "./resources/images/articles/synapsa.png",
  },
  {
    header: "CoffeeBerry®",
    text: "CoffeeBerry® has less caffeine than a standard cup of coffee, yet provides the energy of several without the drawbacks. Its outer shell is packed with a unique blend of polyphenols.<br><br> Polyphenols scavenge your mitochondria for harmful agents that drain its ability to turn the oxygen you breathe, into natural energy you can use [7]. Polyphenols help ensure caffeine doesn’t take you for a rollercoaster of a ride. With coffee fruit you get…",
    lists: [
      "<span>A long-lasting clean energy </span>- without the crash.",
      "<span>A gentle rise </span>- that leaves you focused yet Zen-like.",
    ],
    imgPath: "./resources/images/articles/coffee-berry.png",
  },
  {
    header: "ZumXR®",
    text: "ZumXR® is a patented, extended-release caffeine technology [8].<br><br> It’s dripped out and slowly released so you don’t get a shock to the system, but instead:",
    lists: [
      "<span>A gradual increase in energy</span> - that actually lasts for more than 6 hours! ",
      "<span>No-Spike, No Crash, and No Jitters.</span>",
    ],
    imgPath: "./resources/images/articles/zum.png",
  },
  {
    header: "Suntheanine®",
    text: "L-theanine is a naturally-occurring amino acid found in the leaves of green tea grown in New Zealand. SuntheanineTM is its most powerful form.<br><br> Suntheanine® is proven to be safe, effective, and is kept under the strictest of quality control [9]. The compounds inside Suntheanine® help:",
    lists: [
      "<span>Amplify alpha brain waves</span> - and keep your mind energized yet calm, rather than have it jump around from thought to thought. ",
      "<span>Get a sustainable, long-lasting surge in natural energy that keeps you engaged, centered, and feeling sharp </span>- without the negative effects of regular coffee.",
    ],
    imgPath: "./resources/images/articles/suntheanine.png",
  },
  {
    header: "Schisandra extract",
    text: "Schisandra is known for calming large spikes in emotion. That stomach drop and tsunami of stress that overtakes your system when something goes wrong? Yeah, it prevents that.<br><br> In fact, a recent double-blind, placebo-controlled study showed even in the face of laboratory-grade stress, schisandra extract [10]: ",
    lists: [
      "<span>Boosted participant’s attention, concentration, and mental energy. </span>",
    ],
    imgPath: "./resources/images/articles/schisandra.png",
  },
  {
    header: "Cordyceps",
    text: "Cordyceps have been used in traditional Chinese medicine for thousands of years to treat fatigue. All this time, we had zero idea of how they worked – just that they did.<br><br> Today, a recent study from The Journal of Physical Fitness and Sports Medicine uncovered it can [11]:",
    lists: [
      "<span>Directly enhance your energy levels unlike anything before it! </span>",
      "<span>Increase oxygen flow throughout the body.</span>",
      "<span>Reduce fatigue.</span>",
    ],
    imgPath: "./resources/images/articles/cordyceps.png",
  },
  {
    header: "Beet juice extract",
    text: "Beets are packed to the brim with compounds and nutrients that are incredibly healthy for your body in a variety of ways.",
    lists: [
      "<span>Reduce inflammation naturally</span>",
      "<span>Improving energy and athletic performance</span>",
      "<span>Support healthy blood pressure and oxygen retention</span>",
    ],
    imgPath: "./resources/images/articles/beet-juice.png",
  },
  {
    header: "Grape seed extract",
    text: "Grape seeds contain a molecule called proanthocyanidins [13].<br><br> They’re important because as the recent research shows, they have the antioxidant power that’s 20X stronger than vitamin E and 50 times stronger than vitamin C [14].<br><br> All to help protect your mitochondria from the daily stress of life, and ensure they can produce:",
    lists: ["<span>All the clean, natural energy you need.</span> "],
    imgPath: "./resources/images/articles/crapepng.png",
  },
  {
    header: "Amla",
    text: "Amla grows in the fertile jungles of Indonesia, and has been relied on by traditional healers for centuries to treat low energy. But as with most Eastern Medicine, our modern world is just now catching up.<br><br> Also known as Indian Gooseberry, studies have found that Amla helps boost heart health, repair liver damage, and boost your immune system.",
    lists: ["<span>Amla is the second richest natural source of vitamin C</span>"],
    imgPath: "./resources/images/articles/amla.png",
  },
  {
    header: "S7™",
    text: "A combination of unique compounds only found inside green coffee bean extract, green tea extract, turmeric, blueberry, broccoli, kale, and tart cherry. These 7 botanicals ramp up your body’s own nitric oxide production by 230% in as little as an hour.[4] ",
    lists: [
      "<span>Recover faster with increased Nitric Oxide production</span>",
      "<span>Acclimate to elevation quicker with faster oxygen delivery</span>",
    ],
    imgPath: "./resources/images/articles/s7.png",
  },
];

let newArticlesPageHeader = createElements({
  Tag: "div",
  classList: "new-articles-page__header",
  childNodes: [newArticlesContainer],
});

newArticlesPageHeader.innerHTML = `
<h1 class="green-text">
    12 Potent Super-Nutrient Ingredients
</h1>
<p class="bold">
    Selected to synergistically compound benefits and give you elite energy,
    focus, cognitive retention, and stress relief.
</p>
`;

let newArticleWrapper = [];
let newArticlesText = [];
let newArticlesH1 = [];
let newArticlesP = [];
let newArticlesUl = [];
let newArticlesPhotoWrapper = [];
let newArticlesLi = [];

for (let i = 0; i < newArticles.length; i++) {
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

  newArticlesPhotoWrapper.innerHTML = `<img src="${newArticles[i].imgPath}" />`;

  newArticlesH1 = createElements({
    Tag: "h1",
    classList: "new-articles-h1 green-text",
    childNodes: [newArticlesText],
  });

  newArticlesH1.innerHTML = newArticles[i].header;

  newArticlesP = createElements({
    Tag: "p",
    classList: "new-articles-p",
    childNodes: [newArticlesText],
  });

  newArticlesP.innerHTML = newArticles[i].text;

  newArticlesUl = createElements({
    Tag: "ul",
    classList: "new-articles-ul",
    childNodes: [newArticlesText],
  });

  let newArticlesLi = [];

  newArticlesLi = createElements({
    Tag: "li",
    classList: "new-articles-li",
    childNodes: [newArticlesUl],
  });

  let example = [...newArticles[i].lists]
  let array = example.map( (e) => ("&#x2022;"+" "+e + "<br>") ).join('');
  
  newArticlesLi.innerHTML = `${array}`
    
  
}
