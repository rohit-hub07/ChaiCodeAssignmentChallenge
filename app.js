import {fetchData, copyFunction} from './Functions/getAllFunctions.js'
console.log(copyFunction)

const getCardText = document.getElementById("quote");
const getAuthor = document.getElementById("author");
const generateBtn = document.getElementById("genBtn");
const copyBtn = document.getElementById("copy");
const shareTweet = document.getElementById('shareBtn');


shareTweet.addEventListener('click', () =>{
  const text = getCardText.innerText + '  - '+ getAuthor.innerText;
  const tweetText = encodeURIComponent(text);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

  window.open(twitterUrl, "_blank", "width=600,height=400");
})



copyBtn.addEventListener("click", () => {
  copyFunction();
});

generateBtn.addEventListener("click", () => {
  fetchData();
});

fetchData();
