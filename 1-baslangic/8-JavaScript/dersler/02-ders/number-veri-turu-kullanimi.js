let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
console.log(
  "Fiyat:",
  price,
  "KDV:",
  tax,
  "KDV Tutarı",
  priceTax,
  "Fiyat",
  total
);

let stringNumber = "11";
console.log(stringNumber);

let newNumber = Number(stringNumber);
console.log(newNumber);

console.log("Number Constractor icine bilgi gonderildi:", Number(111));

// arttırma ve azaltma islemi***************************************************************************************//

//arttirma islemi//
let counter = 320;

counter = counter + 1; //uzun yontem//

counter += 1;
counter++;
console.log(counter);
//azaltma islemi//
counter -= 1;
counter--;
console.log(counter);
//carpma islemi//

counter *= 10;
console.log(counter);

//bolme islemi//
counter /= 2;
console.log(counter);

//islem onceligi********************************************************************************************************//

console.log((2 + 3) * 10); //ilk islem icin toplama yapiyoruz (parantez icine alıyoruz)//

// mod (kalan) alma %:***************************************************************************************************//

//tekmi ciftmi ??????????//

console.log(3 % 2); //tek sayşida "1", cift sayida "0" gosterir

// 8 urun alan koliye tum urunler sigiyormu

console.log("koli kalan urun ornegi:", 18 % 8);

// us alma:**
console.log(2 * 2 * 2 * 2);

console.log(2 ** 4);

// assagi yuvarlama islemi -->math.floor:
console.log("assagi yuvarlama:", Math.floor(1.5)); //sonuc: hep "1" kusurat yok

// assagi yuvarlama islemi -->math.ceil:
console.log("yukarı yuvarlama", Math.ceil(1.3)); //sonuc: hep "2" kusurat yok

// yakina yuvarlama islemi -->math.round:
console.log("yakina yuvarlama", Math.round(1.5)); //sonuc:eger 1.5 uzeriyse "2" assagiysa "1" yani en yakina yuvarlama
