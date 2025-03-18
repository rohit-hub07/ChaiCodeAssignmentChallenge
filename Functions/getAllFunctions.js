const getCardText = document.getElementById("quote");
const getAuthor = document.getElementById("author");


async function fetchData() {
  const response = await fetch(
    "https://api.freeapi.app/api/v1/public/quotes/quote/random"
  );
  const quote = await response.json();
  getCardText.textContent = quote.data.content;
  getAuthor.textContent = quote.data.author;
}

function copyFunction() {
  const copyText = getCardText.innerText + '  - '+ getAuthor.innerText;;

  navigator.clipboard.writeText(copyText);

  alert("Copied the text: " + copyText);
}

export {fetchData, copyFunction}