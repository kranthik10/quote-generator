const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const authorText = document.getElementById('author');
const newQuote = document.getElementById('new-quote');
const tweetbtn = document.getElementById('x');
let apiQuotes = []

function getNewQuote(){
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length )]

if(!quote.author){
    authorText.innerHTML = "Unknown";
}
else{
    authorText.innerHTML = quote.author;
}

if(quote.text.length > 50){
    quoteText.classList.add('long-quote')
}
else{
    quoteText.classList.remove('long-quote')
}
quoteText.innerHTML = quote.text;

}
async function getQuotes(){
    const apiURL = 'https://type.fit/api/quotes';
    try{

        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        getNewQuote()
        

    }
    catch(error){
// catch error here
    }
}


function tweetQuote(){
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.innerHTML} - ${authorText.innerHTML}`;
    window.open(twitterURL,'_blank')
}

// 
newQuote.addEventListener('click',getNewQuote);
tweetbtn.addEventListener('click',tweetQuote);


getQuotes()


 