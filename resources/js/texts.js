//Data
import { texts } from "../data/texts-data.js";

//Parent element
let textsContainer = document.querySelector(".texts");


textsContainer.innerHTML = `<p>
${texts.paraOne.word[0]}<span class="bold">${texts.paraOne.word[1]}</span>${texts.paraOne.word[2]}<span class="bold">${texts.paraOne.word[3]}</span>
<br><br>
<span class="green-text">${texts.paraTwo.word[0]}</span>${texts.paraTwo.word[1]}
<br><br>
${texts.paraThree.word[0]}<span class="green-text">${texts.paraThree.word[1]}</span>${texts.paraThree.word[2]}
<br><br>
<span class="bold">${texts.paraFour.word[0]}</span>
<br><br>
${texts.paraFive.word[0]}
</p>
`;
