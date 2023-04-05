///////////// Ternary Operatör ( Koşul ? Doğruysa : Yanlışsa) ile If Kullanımı

// eger kullanici adin varsa yazdir yoksa yoksa kullanici bilginiz bulunmadi yaz

let userName = prompt("kullanici adinizi yaziniz");
let info = document.querySelector("#info");

info.innerHTML = `${
  userName.length > 0 ? userName : "kullanici biginiz bulunamadi"
}`;
