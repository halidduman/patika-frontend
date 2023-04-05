//////////////////////////////////Fonsiyona Parametre (params) ve Geridönüş (return) Eklemek

let firstName = "lorem";

function greetings(firstName = "", lastName = "") {
  // console.log(`merhaba ${firstName ? firstName : ""}`)
  console.log(`merhaba ${firstName}`);
  console.log(`merhaba ${firstName} ${lastName}`);
}

console.log(firstName); //degisgen
greetings("apple"); // fonksiyona parametre gondermedik?
let info = greetings("parametre");
console.log(info);

function greetings2(firstName, lastName) {
  let info = `merhaba ${firstName} ${lastName}`;
  return info;
}

let greetingsInfo = greetings2("ad", "soyad");

console.log(greetingsInfo);

function domIdWriteInfo(id, info) {
  let domObject = document.querySelector(`#${id}`);
  domObject.innerHTML = info;
}
let htmlInfo = `<span style="color:red">color Redddd</span>`;

domIdWriteInfo("greeting", htmlInfo);
domIdWriteInfo(`info`, greetings2("Lorem", "Ipsum"));
