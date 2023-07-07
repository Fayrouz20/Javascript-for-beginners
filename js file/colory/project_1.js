


let myButton = document.querySelector('.new-quote');

let text = document.querySelector('.quote');

let author = document.querySelector('.person');

let quotes = [{
	text: "I'm selfish, impatient and a little insecure.I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
	author: "Marilyn Monroe"
},
{
	text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
	author: "Albert Einstein"
},
{
	text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
	author: "Bernard M. Baruch"
},

{
	text: "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
	author: "William W. Purkey"
},
{
	text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
	author: "Dr. Seuss"
},
{
	text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
	author: "J.K. Rowling, Harry Potter and the Goblet of Fire"
}];

myButton.addEventListener("click",function(){

	let random = Math.floor(Math.random() * quotes.length );
	text.innerText = quotes[random].text;
	author.innerText = quotes[random].author;
})