import quotes from "./lib/quotes.js";
import math from "./lib/randomNum.js";

const app = {};

app.printQuote = () => {
    const quotesArray = quotes.getAllQuotes();
    const randomNumber = math.getRandomNumber(1, quotesArray.length);

    const quote = quotesArray[randomNumber - 1];
    console.log(quote);
}

app.inifinitLoop = () => {
    setInterval(app.printQuote, 1000);
}


app.inifinitLoop();