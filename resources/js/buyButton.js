//Parent element to append
let articlesContainer = document.querySelector(".buy-button__articles");
let BeigeContainer = document.querySelector(".buy-button__beige");


//Location where to append the child element onto the html dom and a location of scrollTo that will scroll to the asked section 
const locations = [
  { append: articlesContainer, scrollTo: ".section__two" },
  { append: BeigeContainer, scrollTo: ".section__three" },
];

//Buy button
let button = [];

locations.map((location) => {
  button = createElements({
    Tag: "button",
    classList: "buy-button bold uppercase",
    childNodes: [location.append],
  });

  button.innerHTML = "<h4>buy now</h4>";

  button.addEventListener("click", function () {
    let locationToScroll = document.querySelector(location.scrollTo)
    locationToScroll.scrollIntoView({
      behavior: "smooth",
    });
  });
});
