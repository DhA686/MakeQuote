const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://type.fit/api/quotes";
async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    let i = Math.floor(Math.random() * data.length);
    quote.innerHTML = data[i].text;
    author.innerHTML = data[i].author;
}
// function newQuote(){
//     ;
// }

function shareTweet(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`;
    window.open(twitterUrl);
}