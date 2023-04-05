// DOM Etkinlikleriyle Çalışmak

let greeting = document.querySelector("#greeting");

greeting.addEventListener("mouseover", domClick);

function domClick() {
  console.log("etkinilk denetlendi");
  console.log(this.style.color == "red" ? this.style.color = "black" : this.style.color = "red")
}
