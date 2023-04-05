////////////////////////////////// Koşul Yapısı Kullanımı (if / else)
let username = prompt("kullanici adinizi giriniz");
//eger kullanici bilgisi varsa ekrana yazdir

// eger (user.length >0) {console.log.(username)} else console.log("bilgi yok")

// if (user.length >0) {console.log.(username)}

if (username.length > 0) {
  //if kismi her zaman true ise calisir
  console.log(`Kullanici Bilginiz ${username}`);
} else {
  console.log("bilgi yok");
}
