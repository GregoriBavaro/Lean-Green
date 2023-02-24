let testimonialsContainer = document.querySelector(".testimonials");

//Data second swiper
const swiperDataTwo = [
  {
    message:
      "You won't regret it. I was amazed at the quality of it.I am really satisfied with my it.",
    from: "T.M.",
    review: 5,
    
  },
  {
    message:
    "Your product was recommended by my dietitian so I immediately ordered a couple of months supply. By way of background, I have real resistance to taking medications and she felt your product might be different. How right she was!",
    from: "V.R.",
    review: 5,
    
  },
];
//Data first swiper
const swiperData = [
  {
    message:
      "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what my body has been lacking.",
    from: "S.J.",
    review: 4,
    
  },
  {
    message:
      "We're loving it. This is simply unbelievable! I like it more and more each day because it makes my life a lot easier.",
    from: "E.J.",
    review: 5,
    
  },
];




//First swiper slides
let swiperSlides = [];
//Second swiper slides
let swiperSlidesTwo = [];


//First swiper elements
let swiperContainer = createElements({
  Tag: "div",
  classList: "swiper-container",
  childNodes: [articlesContainer],
});

let = swiperTestimonials = createElements({
  Tag: "div",
  classList: "swiper",
  childNodes: [swiperContainer],
});

let = swiperWrapper = createElements({
  Tag: "div",
  classList: "swiper-wrapper",
  childNodes: [swiperTestimonials],
});

//Second swiper elements

let swiperContainerTwo = createElements({
  Tag: "div",
  classList: "swiper-container",
  childNodes: [testimonialsContainer],
});

let = swiperTestimonialsTwo = createElements({
  Tag: "div",
  classList: "swiper",
  childNodes: [swiperContainerTwo],
});

let = swiperWrapperTwo = createElements({
  Tag: "div",
  classList: "swiper-wrapper",
  childNodes: [swiperTestimonialsTwo],
});

//First swiper

for (let i = 0; i < swiperData.length; i++) {
  swiperSlidesTwo = createElements({
    Tag: "div",
    classList: "mySwiper-slide swiper-slide",
    childNodes: [swiperWrapper],
  });

  //Adding star logic by review
  let star = "&#x2B50;";
  let number = swiperData[i].review;

  const arrayOfStars = [...Array(number)].map(() => star);
  const addShift = arrayOfStars.join(",").replace(/,/g, " ").split();

  swiperSlidesTwo.innerHTML = `
  <div>
    <div class="quotes"><img src="./resources/images/quotes.png" alt="quotes" /></div>
    <p class="italic">"${swiperData[i].message}"</p>
    <h4 class="green-text">${swiperData[i].from}</h4>
    <div class="rating">${addShift}</div>
  </div>`;
}


//Second swiper

for (let i = 0; i < swiperDataTwo.length; i++) {
  swiperSlidesTwo = createElements({
    Tag: "div",
    classList: "swiper-slide swiper-slide-two",
    childNodes: [swiperWrapperTwo],
  });

  //Adding star logic from review rating
  let star = "&#x2B50;";
  let number = swiperDataTwo[i].review;

  const arrayOfStars = [...Array(number)].map(() => star);
  const addShift = arrayOfStars.join(",").replace(/,/g, " ").split();

  swiperSlidesTwo.innerHTML = `
  <div>
    <div class="quotes"><img src="./resources/images/quotes.png" alt="quotes" /></div>
    <p class="italic">"${swiperDataTwo[i].message}"</p>
    <h4 class="green-text">${swiperDataTwo[i].from}</h4>
    <div class="rating">${addShift}</div>
  </div>`;
}