let greenBanner = document.querySelector(".green-banner");

let greenBannerWrapper = [];

greenBannerWrapper = createElements({
  Tag: "div",
  classList: "green-banner-wrapper",
  childNodes: [greenBanner],
});

greenBannerWrapper.innerHTML = `
<h1>RISK FREE 90 DAY MONEY BACK GUARANTEE</h1>
<div class="green-been-wrapper__inside">
    <div class="green-been-wrapper__para-one"><p>Go ahead and take Green&Lean for a well-deserved “test drive” over the next 10, 20, even 30 days – as long as you’d like over the next six months.
    <br><br>
    If you don’t feel a dramatic improvement in your energy, focus, and mood... if you don’t tackle your day with a newfound sense of confidence, concentration, and an unshakable optimism... and if you feel even a single jitter from our energizing formula...
    <br><br>
    You don’t pay a dime. 
    <br><br>
    Simply shoot us a quick email at customerservice@greenandlean.com and I’ll  personally see you get a full refund, down to the last penny.
    <br><br>
    No questions. No hoops. No weird qualifications or fine print.</p></div>
    <div class="green-been-wrapper__img"><img src="./resources/images/products/1pouches.png" /></div>
    <div class="green-been-wrapper__para-two"><p>You risk nothing other than living a life where you’re just surviving...
    <br><br>
    When you should be thriving.
    <br><br>
    So click the button below now to give yourself a well-deserved shot at booming, natural energy levels with Green&Lean.</p></div>
</div>

`;
