///////////////////////////////////////////////////////// DOM içerisinden Etiket ve ID ile Öğe Seçimi

// let h2 = document.getElementsByTagName ("h2")
let title = document.getElementById("title");
// title.innerHTML = "degisen bilgi";

let link = document.querySelector("#kodluyoruzlink");
link.innerHTML += "degisti";
link.style.color = "red";
link.classList.add = "btn";

console.log();
