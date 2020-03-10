// WELCOME MESSAGE
var user = 'Sean';
var salutation = 'Hi there, ';
var greeting = salutation + user + "! Here are the latest Golden Retriever reviews.";
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// PRODUCT PRICE
var price = 20,
    studentDiscount = .10,
    studentPrice = price - (price*studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);