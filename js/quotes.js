
const quotes = [
    {quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela"},
    {quote:"In the end, it’s not the years in your life that count. It’s the life in your years.",
    author:"Abraham Lincoln"},
    {quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author:"Thomas A. Edison"},
    {quote:"If you spend too much time thinking about a thing, you’ll never get it done.",
    author:"Bruce Lee"},
    {quote:"Despite the forecast, live like it’s spring.",
    author:"Lilly Pulitzer"},
    {quote:"We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
    author:"Anonymous"},
    {quote:"There is no use whatever trying to help people who do not help themselves. You cannot push anyone up a ladder unless he be willing to climb himself.",
    author:"Andrew Carnegie"},
    {quote:"We must believe in luck. For how else can we explain the success of those we don’t like?",
    author:"Jean Cocteau"},
    {quote:"Successful people do what unsuccessful people are not willing to do. Don’t wish it were easier; wish you were better.",
    author:"Jim Rohn"},
    {quote:"I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.",
    author:"G. K. Chesterton"},
    {quote:"Do not be afraid to give up the good to go for the great.",
    author:"John D. Rockefeller"}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function getQuote(){
    const random_num = Math.round(Math.random()*(quotes.length-1));
    quote.innerText = `" ${quotes[random_num].quote} "`;
    author.innerText = quotes[random_num].author;
}
getQuote();