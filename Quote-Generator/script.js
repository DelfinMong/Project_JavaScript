const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twwitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');







/ --------------------- API quotes --------------------------/

let apiQuotes = []

// Show New Quote
function newQuote(){
  //Pick random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length )];
  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
  console.log(quote)
}


// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes'
  try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
      // console.log(apiQuotes[10])
  } catch(error) {
    //Catch Error Here
  }
}

// On Load
getQuotes();

/ ------------------- local quotes ------------------------/

// Show New Quote
function localnewQuote(){
  //Pick random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length )];
  // console.log(quote);
}

localnewQuote();