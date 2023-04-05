/////////////////////////////////////// Karşılaştırma Operatörleri ve Mantıksal Operatörler

let price = "0";
let user = "guest";

// eşitse (==)

console.log("==", price == 1);
console.log("==", price == 100);

// hem degeri hem turu esitle (===)

console.log("===", price === 1);
console.log("===", price === 100);

// esit degilse (!=)

console.log("!=", price != 1);
console.log("!=", user != "guest");

// kucukse (<)

console.log("<", price < 1000);

// kucuk veya esitse (<=)

console.log("<=", price <= 1000);

// buyukse (>)

console.log(">", price > 10);

// buyuk veya esitse (>=)

console.log(">=", price >= 10);

// ve (&&)
price = "0";
console.log("&&", price > 0 && user != "guest");

// veya (||)

console.log("||", price > 0 || user != "guest");

// degil-tersi (!)
user = "guest";
price = 1;

console.log("!", price > 0 && !user == "guest");
