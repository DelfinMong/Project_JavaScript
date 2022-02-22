let apiQuotes = []


// Show New Quote
function newQuote(){
  //Pick random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length )];
  console.log(quote);
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
