const getCardText = document.getElementById("quote");
const getAuthor = document.getElementById("author");
const generateBtn = document.getElementById("genBtn");
const copyBtn = document.getElementById("copy");
const shareTweet = document.getElementById('shareBtn');


async function fetchData() {
  const response = await fetch(
    "https://api.freeapi.app/api/v1/public/quotes/quote/random"
  );
  const quote = await response.json();
  getCardText.textContent = quote.data.content;
  getAuthor.textContent = quote.data.author;
}

function copyFunction() {
  const copyText = document.getElementById("quote").innerText;

  navigator.clipboard.writeText(copyText);

  alert("Copied the text: " + copyText);
}

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
