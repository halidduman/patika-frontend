// hata-yonetimi-icin-try-catch-kullanimi

let products;

try {
  products.forEach((item) => console.log(item));
} catch (error) {
  console.log("error:", error);
  // products = [1, 2, 3]
  // products.forEach(item => console.log(item));
}

console.log("hata yonetimi duzgun calisiyor");

let info = "kodluyoruz";
console.log(info);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// https://www.w3schools.com/js/js_errors.asp
