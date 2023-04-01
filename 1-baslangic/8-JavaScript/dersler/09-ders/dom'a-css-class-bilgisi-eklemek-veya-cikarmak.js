/////////////////////// DOM'a CSS Class Bilgisi Eklemek veya Çıkarmak

let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info","second-class","third-class") //birden fazla class silmek

greeting.classList.remove("title","second-class","third-class") //birden fazla class eklemek

console.log (greeting.classList)