# js


## Node.js Kurulumu

Link: https://nodejs.org

## Current:
genel olarak kendi bilgisayarimizda kullanicagimiz versiyon

## LTS:
Sürekli guncelleme alan versiyon,genelde sunucular icin kullanilir.

## HTML, CSS ve JavaScript (Web'in temel taşları)

<img src=images/1.png alt=gorsel>

HTML ve CSS ile JavaScript, World Wide Web'in (kısaca WWW veya Web) temel üç öğesinden biridir. Yaygın olarak web tarayıcılarında kullanılmakta olan JavaScript ile yazılan istemci tarafı betikler sayesinde tarayıcının kullanıcıyla etkileşimde bulunması, tarayıcının kontrol edilmesi, asenkron bir şekilde sunucu ile iletişime geçilmesi ve web sayfası içeriğinin değiştirilmesi gibi işlevler sağlanır.

---
Aşağıda yer alan görseldeki gibi HTML bir web sitesinin iskeletini yani ana yapısını oluşturmakta, CSS bu ana yapıya görsellik ve şekil vermekte, JavaScript ise yapının fonksiyonel olarak çalışmasını sağlamaktadır.

<img src=images/2.jpg alt=gorsel>

JavaScript, her Front-end ve Web yazılımcısının, HTML ve CSS ile birlikte bilmesi gereken bir dildir.

JavaScript kodları, HTML ve CSS gibi doğrudan tarayıcı tarafından çalıştırılmazlar. Tarayıcılarda yerleşik halde bulunan JavaScript motoru (JavaScript Engine) sayesinde, JavaScript kodları makine diline çevirir ve çalıştırır. Günümüzde internet sitelerinin %95'inden fazlası JavaScript kullanmakta ve modern tüm internet tarayıcıları yerleşik JavaScript Motoru barındırmaktadır.

En çok kullanılan tarayıcalardaki JavaScript Motorları, Chrome, Opera ve Edge'de V8, Firefox'da SpiderMonkey, Safari'de Nitro, Internet Explorer'da Chakra'dır.

-----

## JavaScript'in kullanılabileceği alanlar:

- Front-end
- Back-end
- Mobil (Mobile)
- Masaüstü (Desktop)
- Oyun (Game)
- Makine Öğrenmesi, Derin Öğrenme ve Yapay Zeka (Machine Learning, Deep Learning & Artificial Intelligence)

---

## Front-End Alanında JavaScript

JavaScript, Front-end tarafında ilk yıllarında olduğu gibi yalın olarak bir diğer ismiyle Vanilla JavaScript olarak kullanabildiği gibi geliştirilen birçok farklı kütüphane (library) ve çatı (framework) ile de kullanabilmektedir. Son yıllarda ortaya çıkan başarılı kütüphane ve çatılar neticesinde, yalın JavaScript kullanımı azalsa da bu kütüphane ve çatıların temelini JavaScript oluşturduğu için, kesinlikle öğrenilmesi gerekmektedir.

En çok kullanılan JavaScript Front-end teknolojileri aşağıdaki görselde yer almaktadır. Bunlar soldan sağa doğru; Angular, React, Vue, Ember ve Svelte'dir.

<img src=images/3.jpg alt=gorsel>

---
## Back-End Alanında JavaScript

<img src=images/4.png alt=gorsel>

---
## Mobil (Mobile) Alanında JavaScript
En çok kullanılan JavaScript mobil teknolojileri aşağıdaki görselde yer almaktadır. Bunlar soldan sağa doğru; React Native, Ionic, NativeScript, Cordova ve Mobile Angular UI'dır.

<img src=images/5.jpg alt=gorsel>

---
## Masaüstü (Desktop) Alanında JavaScript
En çok kullanılan JavaScript masaüstü teknolojileri aşağıdaki görselde yer almaktadır. Bunlar soldan sağa doğru; Electron, nw.js, appjs, Meteor ve Proton Native'dir.

<img src=images/6.jpg alt=gorsel>

---
## Oyun (Game) Alanında JavaScript

En çok kullanılan JavaScript oyun teknolojileri aşağıdaki görselde yer almaktadır. Bunlar soldan sağa doğru; PixiJS, MelonJS, Phaser, BabylonJS ve Impact'tir.

<img src=images/7.jpg alt=gorsel>

---
## Makine Öğrenmesi, Derin Öğrenme ve Yapay Zeka (Machine Learning, Deep Learning & Artificial Intelligence) Alanında JavaScript

En çok kullanılan JavaScript Makine Öğrenmesi, Derin Öğrenme ve Yapay Zeka teknolojileri aşağıdaki görselde yer almaktadır. Bunlar soldan sağa doğru; ml5.js, Brain.js, TensorFlow.js, ConvNetJS ve Synaptic.js'tir.

<img src=images/8.jpg alt=gorsel>

---
---
## Birçok Platformda Hello World ve Hello World'ün Önemi

Merhaba arkadaşlar bugün size daha önceden illaki bir kez de olsa karşılaştığınız "Hello world"ün ne olduğunu, önemini anlatmak istiyorum. "Hello world" aslında programlamanın girişi olarak kabul edilir. Çünkü bir kişi kodlamaya ekrana ilk "Hello world" yazısını yazdırarak başlamaktadır. Aslında bu yazı programın hatasız bir şekilde çalıştığını test etmek amaçlı yazdırılmaktadır. Bu yazıyı sorunsuz bir şekilde çalıştırabilirsek, artık programlama kısmına hatasız bir şekilde devam edebiliriz anlamına gelmektedir.

Javascript'te bunu yapmanın birçok yolu vardır:

- Browser üzerinde ekrana alert şeklinde hello world yazdırmak.
- console da hello world yazdırmak.
- Browser üzerinde console'u kullanarak hello world yazdırmak.

---

## Değişken Tanımlama: var, ES6 ile Birlikte Gelen let ve const Değişken Tanımlama Yapısının Kullanımı, var ile Arasındaki Farklar

Değişkenler en basit tabirle değerleri hafızada tutmak için kullanılan yapılardır. Bir tanımlayıcı ile tanımlanır. Tanımlayıcı öncesi var, let veya const deklarasyonlarından biri kullanılarak deklare edilir. Değişken isimlendirmede dikkat etmemiz gerekenler şunlardır.

- Değişken isimleri harf, _ veya $ işareti ile başlayabilir. Fakat ES5 (ECMAScript 5) birlikte gelen özellikle UNICODE kodları kullanılırken kaçış karakteri olarak kullanılan \ işareti ilk karakter olarak kullanılabilir.
  
- İlk harften sonra değişken isimlerinde rakamlar da kullanılabilir. $ ve _ dışında başka noktalama işaretleri kullanılamaz
  
- Değişken ismindeki harfler arasında boşluk kullanılamaz.

### Değişkene Değer Atama ve Veri Türleri
Değişkenlere değer atama = operatörü ile yapılır.

Şeklinde bir değişken tanımladığımızda okulNumarasi değişkenine sayısal bir değer olan 12 değeri atanır.

Yukarıda kod parçasında görüldüğü gibi ilk olarak değişken tanımlaması yapılıp, değer ataması daha sonra yapılabilir. Değişkenler değer atanmadığı takdirde undefined değerini alırlar.

Yukarıdaki kod parçasında olduğu gibi tek bir satırda, deklarasyonları aynı fakat farklı tanımlayıcılar ile tanımlamış değişkenler tek bir satırda tanımlanabilir ve değer atanabilir.

JavaScript loosely typed bir programlama dilidir. Yani bir değişkeni tanımlarken değişkenin türünü (sayısal, metinsel, boolean) belirtmemize gerek yoktur.

Yazdığımız zaman 12 değerinin sayısal bir değer olduğunu anlar. Bir değişkene aşağıdaki veri tiplerini atayabiliriz.

- Boolean = Mantıksal ifadedir. true veya false değeri atanabilir
  
- Number = Sayısal ifadedir. 2^53 -1 değerine kadar sayısal değerler atanabilir.

- BigInt = 2^53-1 değerinden büyük değerleri atayabilir.

- String = Metinsel ifadelerdir. Metinsel ifade tanımlanırken ifade “ ” veya ‘ ’ işaretleri arasına yazılır.

- Object = Yukarıda ki 7 veri türü de primitive tiplidir. Objelerde ( nesne, dizi ) gibi referans tipler de değişkenlere atanabilir.

### var

Global scope veya function scope'ta deklarasyon sağlayamaya yarayan keyword'dur. Scope özelliklerini daha sonra örneklerle açıklayacağız. var ile tanımlanan değişkenlerin özellikleri şunlardır.

- Değişken değerleri değiştirilebilir.

- Aynı isimle tekrardan tanımlanabilirler.

- var ile tanımlanan değişkenler global scope veya function scope'tur. Global scope'ta tanımlanan değişkenlere her yerden ulaşılabilir. Function içerisinde tanımlanan değişkenlere ise tanımlı olduğu fonksiyonda ulaşılabilir. Bu konuyu örneklerle açıklayalım.

Değişkenleri block scope'ta tanımlayan deklarasyondur. let ile tanımlanan değişkenlerin özellikleri şunlardır.

Değişken değerleri değiştirilebilir.


- Aynı isimle tekrardan aynı blokta tanımlanamaz. Farklı 

- block'larda aynı isimle tanımlanabilir.

### const

Block scope da tanımlı, değeri sonradan değiştirilemez değişkenleri deklare etmek için kullanılan keyword'dür.

- Const ile tanımlanan objelerin özellikleri (properties) değiştirilebilir fakat objenin kendisi değiştirilemez. Diziler içinde aynısı geçerlidir. Dizi değerleri değiştirilebilir fakat dizinin kendisi değiştirilemez.

---
## Boolean Veri Türü İle Çalışmak

Bazı ifadeleri sadece iki ihtimale göre değerlendirmek JavaScript programlarımızı yazarken oldukça işimize yarar. Bu alternatifler "evet veya hayır", " var ya da yok","1 veya 0", "evet veya hayır" gibi değerler olabilir. Bu tür iki alternatiften bahsettiğimiz veri tipine "Boolean" veri tipi diyoruz.

Boolean veri tipleri sadece iki değerden birini ifade eder. Bunlar true ya da false 'dur.

## Boolean() fonksiyonu

````
Boolean(10>9);
//true
````
Boolean() fonksiyonu bize sadece iki farklı değer dönebilir. Bunlar ya true ya da false'dur.

Yukarıda Boolean() fonksiyonun içinde bir olasılığı karşılaştırdık. Bu olasılık 10 sayısının 9 sayısından büyük olup olmadığıdır. Bu soruda alabileceğimiz iki farklı cevap var. Bunlar doğru veya yanlış yani trueveyafalse ifadeleridir. 10 sayısı 9 sayısından büyük olduğu için buradan true çıktısını alıyoruz.

İçinde değer barındıran tüm ifadeler true'tur.
`````
const b1 = Boolean(100);
const b2 = Boolean(3.14);
const b3 = Boolean(-15);
const b4 = Boolean("Hello");
const b5 = Boolean('false');
const b6 = Boolean(1 + 7 + 3.14);
`````
Yukarıdaki tüm ifadelerin çıktısını true olarak görürüz.

İçinde değer barındırmayan tüm ifadeler false 'tur.
````
const c1 = Boolean(undefined);
const c2 = Boolean(null);
const c3 = Boolean("");
const c4 = Boolean(false);
const c5 = Boolean(NaN);
const c6 = Boolean(0);
const c6 = Boolean(-0);
````
Yukarıdaki tüm ifadeler bize false çıktısını verir. Buradan anlayacağımız üzere 0 ve -0 hariç tüm sayılar bize true olarak döner.

Mantıktan matematiğe, bilgisayar bilimine kadar birçok alanda kullanılan Boolean veri türü, İngiliz matematikçi George Boole’un adından türemiştir. Boolean, sayısal olarak 0 veya 1 şeklinde ifade edilir ki aslında 0 veya 1 dediğimiz şey ise doğru – yanlış yani programlama dillerinde de true – false olarak geçen parametrelerden ibarettir. Aynı zamanda bilgisayar hafızasında sadece 1 bit uzunluğunda yer tutar.

### Boolean ile İlgili Örnekler
Örnek 1:
`````
   var x = 1;
   console.log(Boolean(x)); // returns true
   `````
   Örnek 2:
   `````
      var y = 0;
   console.log(Boolean(y)); // returns false
   `````
   Örnek 3:
   `````
      var z = "0";
   console.log(Boolean(z)); // returns true
``````

   Örnek 2 ile Örnek 3 arasındaki farka değinecek olursak aslında burada 0 normal şartlarda false döndürmeliydi. Ancak Örnek-3'teki kullanımına baktığımızda tırnak içerisinde yani string bir ifade olarak görüyoruz. 0, string olarak yer aldığından dolayı console'da true ifadesini görürüz.

## Alıştırmalar:

Aşağıda boolean olarak tanımlanmış değerlerin doğruluğunu Codepen aracılığı ile deneyin.

````
console.log(Boolean(1n));
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));
````

## Değişken Türünü Kontrol Etmek

Çalıştığımız veriler her zaman kodumuz için uygun olmayabilir. Verilerin kontrolünü sağlayıp ona uygun kod yazabiliriz veya istediğimiz türe dönüştürerek ilerleyebiliriz.

Bu kontrolleri yaparken sıkça typeof kullanılır.
````
console.log(typeof 42);
// beklenen output: "number"

console.log(typeof 'kodluyoruz');
//beklenen output: "string"

console.log(typeof true);
// beklenen output: "boolean"

console.log(typeof Variable);
// beklenen output: "undefined"
````
Bir başka şekilde isInteger( ), isFinite( ) veya isNaN( ) kullanarak da kontrol sağlayabiliriz.
````
//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(0.5) //false
//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false
// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.

Number.isNaN(123) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true
````
Bu şekilde kontrolleri sağlanan değerler true veya false dönerler.

## Değişken Türünü Değiştirmek (Type Coercion)

Type Coercion; bir değişkenin türünü, başka bir değişkene dönüştürmeye yarayan yöntemdir. Türkçesi mahalle baskısı olarak karışınıza çıkabilecek olan type coercion'ın iki tipi vardır. Bunlar explicit ve implicit. Explicit için metotlarla yapılan dönüşüm denilebilir. Implicit için ise operatörlerle veya JavaScriptin kendi yaptığı dönüşümler diyebiliriz

Explicit Coercion
````
String(123) // “123”
ParseInt(“123”) // 12`
`````
Implicit Coercion

````
If(3<5) // true
console.log(‘ ’+123) // “123”
12/”6” // 2
````
Bu dönüşümler nasıl yapılıyor onlara bakalım.

### String Dönüşümü

Eğer bir değeri açık bir şekilde String’e dönüştürmek istiyorsak String(), fonksiyonunu kullanırız. Binary (ikili) + operatörü bir string ifadeye uygulandığında implicit coercion tetiklenir. Örneklerle bunu daha iyi anlayalım:
````
String(123) // “123” explicit
123 + '' // “123”    implicit
````
Tahmin edebileceğiniz üzere her primitif değer stringe dönüştürülebilir.

`````
String(123) // “123”
String(-12.3) // “-12.3”
String(null) // “null”
String(undefined) // “undefined”
String(true) // “true”
String(false) // “false”`
`````

Symbol’de durum biraz farklıdır, çünkü dönüşüm sadece explicit bir şekilde yapılabilir, implicit bir şekilde yapılamaz.

````
String(Symbol('my symbol')) // 'Symbol(my symbol)'
'' + Symbol('my symbol') // TypeError is thrown
````
### Boolean Dönüşümü

Eğer bir değeri açık bir şekilde (explicit) boolean'a dönüştürmek istiyorsak Boolean() fonksiyonu kullanılır. Implicit coercion ise mantıksal operatörlerinin kullanıldığı, mantıksal işlemlerin yapıldığı alanlarda tetiklenir. (|| && !)

````
Boolean(2) // explicit
var a=!!2 //explicit
if (2) { ... } // implicit due to logical context
!!2 // implicit due to logical operator
2 || 'hello' // implicit due to logical operator
````
Boolean tiplerle uğraşırken truthy, falsy değerler işin içine girerler. Kısaca açıklayacak olursak javascriptin kendi doğası gereği true veya false dönen değerler mevcuttur. Bunlar;
`````
Boolean('') // false
Boolean(0) // false 
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false
```````
Yukarıdaki listede olmayan herhangi bir değer, true'ya dönüştürülür. Fonksiyon, Dizi (Array),Tarih (Date), kullanıcı tanımlı tip (user-defined-type) vb Symboller gerçek değerlidir (truthy value). Hatta boş nesneler (objectler) ve diziler (arrayler) gerçek değerlidir (truthy value).

`````
Boolean({}) // true
Boolean([]) // true
Boolean(Symbol()) // true
!!Symbol() // true
Boolean(function() {}) // true
`````
### Önemli NOT:

Mantıksal operatörlerden || ve &&, dönüşüm işlemini internally (dahili olarak) yapar. Ama gerçekte ifadenin operand değerini döndürür, değer boolean tipinde olmasa bile. Örneklerle daha iyi anlayalım.

````
// veya “||” operatörü ilk bulduğu true değeri döner
var a= 2 || s || 4 || 5; // 2
// eğer true dönecek değer bulamazsa en son buluğu false değeri döndürür
var b=0 || ”” || false || -0 || 0 // 0
var c= 0 ||  “”  ||  “ 123 ” || 4 ; // ”123” dolu string true dönecektir
// ve ”&&” operatörü ilk bulduğu false değeri döner.
var d=2 && 3 && 0 && 5 && 7; // 0
// eğer false dönecek değer bulamazsa en son buluğu true değeri döndürür
var e= 2 && 3 && 5 && 7 // 7
`````
## Nesneler (Objects) için Type Coercion

Şimdiye kadar primitif değerler için type coercion hakkında bilgi sahibi olduk. Nesneler için bu durum biraz daha farklı. JavaScript'te nesneler referans tipler olduğundan üzerinde işlem yapabilmek zordur. İşlem yapabilmek için elimizde primitif değerler olması gerekir. Bu durumda referans tipler primitif tiplere zorlanır. Nesneler için en kolay tip dönüşümü boolean'dır. Primitif olmayan herhangi bir değer örneğin içi dolu veya boş bir nesne (object), dizi (array) fark etmez her zaman true olarak zorlanır. (coerced)

````
console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean([1,2,3])) // true
console.log(Boolean({13:234})) //true
`````
Nesnelerde de matematiksel veya mantıksal işlemler yapmak mümkündür. İlk paragrafta belirttiğim gibi bu işlemi ancak primitif bir değere dönüştürerek yapabiliriz. Bu dönüşüm için, giriş nesnesinin (input object) valueOf ve toString metotlarından faydalanılır. Bu iki metot Object.prototype da tanımlanmıştır. Bu sayede türetilmiş tüm tiplerde kullanılır. Örneğin Tarih (Date), Dizi (Array) gibi. İlk olarak nesneler toString() e girer ve çıkan değer primitifse o değeri döner. Primitif değilse valueOf() içine girer. valueOf()'tan çıkan sonuç primitifse o değeri döner değilse error fırlatır.
````
console.log([1]+[1,2,3])
````
İşlem yapabilmek için [ 1 ] ve [ 1,2,3 ] öncelikli olarak primitif türe zorlanır
`````
[ 1 ].toString(); // sonuç "1" verir
[ 1,2,3 ].toString() // sonuç "1,2,3" verir. Bu durumda iki string ifadenin toplanmasından çıkan sonuç "1" + "1,2,3" --> "11,2,3" olacaktır.
``````
---
## Template Literals Kullanımı

Template Literals (önceki adıyla Template Strings), kod okunabilirliği ve yazım kolaylığı sağlayan ES6 ile gelmiş bir string yazma şeklidir.

### Kullanım Şekli
````
"Eski string"

`Bu bir yeni string örneğidir.`
````
String ifade yazarken, " veya ' kullanırız. Template Literals ile JavaScript'te backtick (```) işareti kullanılmaya başlanmıştır.

### Sağladığı Faydalar
- Çok Satırlı Dize Yazımı:
````
//Eski kullanım:
let eskiString = "En sevdiğim yemekler:\nİskender\nMantı"

//Yeni kullanım:
let yeniString = `En sevdiğim yemekler:
İskender
Mantı`
````
- İnterpolasyon:

İnterpolasyon, metin içerisinde değişken kullanmak anlamına gelir. Normal dizeler içerisine ifadeler gömmek için kullanılır.
````
let ad= `Aycan`;
let soyad= `Yerdelen`;

//Eski kullanım
console.log("Benim adım "+ad+" "+ soyad);

//Yeni kullanım
console.log(`Benim adım ${ad} ${soyad}`);
````
 Örnek:
````
let a = 99;
let b= 999;

console.log(`${a} çarpı ${b} eşittir ${a*b}`);

//Çıktı: 
//99 çarpı 999 eşittir 98901
````
- HTML Şablonları

Çok satırlı dizeleri kolaylıkla kullanmak ve dizelerimize içerik eklemek için de Template Literal’den faydalanabiliriz.
````
//Değişkenlerimizi tanımlayalım
const ad =`Aycan`
const soyad =`Yerdelen`
const gozRengi =`Kahverengi`
const yas =21
````
→ Eski kullanım, Template Literals kullanmadan:
`````
const kisi = "<p>"+ad+"</p>"+
              "<p>"+soyad+"</p>"+
              "<p>"+gozRengi+"</p>"+
              "<p>"+yas+"</p>"

document.body.innerHTML = kisi;
````````
→Yeni kullanım, Template Literals kullanarak:
`````
const kisi = `
<p>${ad}</>
<p>${soyad}</>
<p>${gozRengi}</>
<p>${yas}</>
`;

document.body.innerHTML = kisi;

//Bu kullanım daha az karmaşık ve okunabilir.
``````
### Kısaca

Template Literals;

- Kod okunabilirliğini kolaylaştırır,
- Stringler içerisinde değişken yazma kolaylığını sağlar,
- Şablon etiketlerini daha az karmaşık hale getirir.

### Alıştırma
- Aşağıdaki kod satırlarını Template Strings yazımına göre düzenleyiniz.
````
const kitap = {
  ad: "Fırtına",
  yazar: "Shakespeare",
  tarih: 1610
}
const bookTable =
      "<table border>"+
  "<tbody>"+
    "<tr>"+
      "<td>"+"Kitap"+"</td>"+
      "<td>"+kitap.ad+"</td>"+
    "</tr>"+
  "<tr>"+
      "<td>"+"Yazar"+"</td>"+
      "<td>"+kitap.yazar+"</td>"+
    "</tr>"+
      "<tr>"+
      "<td>"+"Tarih"+"</td>"+
      "<td>"+kitap.tarih+"</td>"+
    "</tr>"+
 " </tbody>"+
"</table>"
document.body.innerHTML = bookTable
````
----
## String Veri Türü İşlemleri
### String nedir?
JavaScript metinlerin tümü "string" veri tipi içinde tutulur ve "string" veri türü ile ilgili yapabileceğimiz birden fazla işlem vardır. Bu yazımızda bunlardan bahsedeceğiz.

### Length Özelliği - Uzunluk Değerini Alma
String veri tipinde bulunan bir ifadenin ne kadar uzun olduğunu bulmak için Length özelliğimizi kullanırız.

<img src=images/9.png alt=gorsel>
<img src=images/10.png alt=gorsel>

### indexOf - Metin İçinde Arama Yapma
Metnin içinde aramak istediğimiz değerin index numarasını bize verir.
<img src=images/11.png alt=gorsel>
<img src=images/12.png alt=gorsel>

### lastIndexO f- Metin İçinde Arama Yapma

indexOf ile arasındaki tek fark aranan kelime birden fazla geçiyor ise en son eşleşmeden gelen index numarasını döndürür.

<img src=images/13.png alt=gorsel>
<img src=images/14.png alt=gorsel>

### Search - Metin İçinde Arama Yapma
indexOf ile aynı sonuçlara ulaşırız genel olarak "Regular Expressions" işlemleri için çok kullanılan bir metottur.

<img src=images/15.png alt=gorsel>
<img src=images/16.png alt=gorsel>

### Slice - Metninden Parça Almak

Metin içinden almak istediğimiz yerlerin index numaralarını vererek metin içinde bulunan parçayı alabiliriz.

<img src=images/17.png alt=gorsel>

Bitiş index numarasındaki karakter sonuca dahil edilmez.

<img src=images/18.png alt=gorsel>

Not: Tek index yazmak ise yazılan index numarasından sonra gelen tüm karakterleri almasına neden olur.

<img src=images/19.png alt=gorsel>
<img src=images/20.png alt=gorsel>

### Replace – Metin Bulma ve Değiştirme
Aranan metni istediğimiz metin ile değiştirmemize olanak sağlar.

<img src=images/21.png alt=gorsel>
<img src=images/22.png alt=gorsel>

toUpperCase ve toLowerCase

<img src=images/23.png alt=gorsel>

toUpperCase metin içinde bulunan tüm karakterleri büyük harf yapmamıza olanak sağlar.

toLowerCase metin içinde bulunan tüm karakterleri küçük harf yapmamıza olanak sağlar.

<img src=images/24.png alt=gorsel>

### Concat - Metin Birleştirme
Elimizde bulunan iki string türündeki veriyi birleştirmemize olanak sağlar.

<img src=images/25.png alt=gorsel>
<img src=images/26.png alt=gorsel>

### charAt- İndex Numarasına Göre Karakter Bulmak
Belirtilen index numarasında yer alan karakteri verir.

<img src=images/27.png alt=gorsel>
<img src=images/28.png alt=gorsel>

### charCodeAt – İndex Numarasına Göre Karakterin Unicode Değerini Bulma
Belirtilen index numarasında yer alan karakterin Unicode değerini verir.
<img src=images/29.png alt=gorsel>
<img src=images/30.png alt=gorsel>

### Split – Metni Diziye Çevirme
Split metodu ile istenilen metin diziye çevrilebilir. Kullanılan parametre ile metnin nasıl parçalanacağı belirtilir.

<img src=images/31.png alt=gorsel>
<img src=images/32.png alt=gorsel>

Bir String ifadesi içerisinde yer alan bilgilerin istediğimiz gibi olup olmadığını kontrol etmek isteyebiliriz. İçerisinde mail adresi geçiyor mu? Kullanıcın verilerinde benim aradığım bilgi var mı? Gibi kontroller yapmak istiyor olabiliriz. String veri türü işlemleri bize bu noktada yardımcı olur.

### Örnekler üzerinden görelim:

````
let email = "kodluyoruz@kodluyoruz.org"
let firstName = "JavaScript"
let lastName = "BOOTCAMP"
````
Bu değişkenleri yazı boyunca kullanacağız.

### Karakter Sayısı
String bir ifadenin karakter sayısını (uzunluğunu) bulmak istiyorsak length özelliğini kullanırız.
````
console.log(email.length);  //25
console.log(firstName.length); //10
````
###Karakter Yeri (Index)
String bir ifadenin içerisinde, aradığımız karakterin yerini bulmak için 2 yöntem vardır. [ ] ve chartAt() metodu bize bu konuda yardımcı olur.
````
console.log(firstName.[0]); //"J"
console.log(firstName.charAt(2)); //"v"
````
### Büyük/Küçük Harfe Çevirme

String bir ifadeyi tamamen büyük veya küçük harf yapmak istiyorsak. Büyük harf için toUpperCase(), küçük harf için ise toLowerCase() metotlarını kullanırız.
````
firstName = firstName.toUpperCase();
console.log(firstName); //"JAVASCRIPT"

lastName = lastName.toLowerCase();
console.log(lastName); //"bootcamp"
````
### İlk Harfi Büyük Kalan Harfleri Küçük Yapma

En başta değişkenlerimizi tanımlardan lastName değişkenimizi "BOOTCAMP" olarak sadece büyük harf ile yazdık. Bu ifademizi "Bootcamp" değiştirmek isteyebiliriz. Ya da sadece küçük harfler ile yazılmış bir özel ismin ilk harfini, büyük harf yapmak istiyor olabiliriz.

Bu tür durumları şu şekilde sağlarız.
````
lastName = `${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}` //Bootcamp
````
### İstediğimiz Bilgiyi Aramak

String bir ifade içerisinde, istediğimiz bir bilginin yerini bulmak için search() metodunu kullanırız. Kontrol ettiğimiz ifade nereden başlıyor ise bize onun yerini verir.

````
console.log(email.search("@")); //10
````
Eğer arattığımız şey yok ise -1 sonucu verir.
`````
console.log(email.search("olmayan")); //-1
````````
search() yerine kullanabileceğimiz başka bir metot ise indexOf() metodudur.
`````
console.log(email.indexOf(".")); //21
```````

### Belli Bir Bilgiyi Almak

Biraz önce search() metoduyla @ işaretinin nerede olduğunu almıştık. İşte bu noktada @ işaretinden sonra gelen domain bilgisini almak bizim için çok kolay bir hale geldi, slice() metoduyla bu işlemi gerçekleştirebiliriz.

````
console.log(email.slice(10+1)); //"@kodluyoruz.org"
//@ ifadesini almak istemediğimiz için +1 kullandık.
`````
Başka bir kullanımı ise şu şekildedir.
````
console.log(firstName.slice(1,4)); //"ava"
````
Yukarıdaki ifadede 1'inci index'ten başla ve 4. index'e kadar olan yeri al dedik. Bu noktada şunu anlamak önemli, 1. index'ten başlayıp 4. index'e kadar gittiğimiz için sadece 3 karakter aldı.

email değişkeninde sadece domaini almak istesek bunu iki farklı yöntemle yapabiliriz.

`````
let domain = email.slice(email.search("@")+1); 
console.log(domain); //"kodluyoruz.org"

let domain = email.slice(email.indexOf("@")+1); 
console.log(domain); //"kodluyoruz.org"
``````
### Bilgiyi Değiştirmek

email değişkeninde domaini değiştirmek istersek eğer, replace() metodu bize yardımcı olur.

`````
email = email.replace("kodluyoruz.org", "gmail.com");
console.log(email); //"kodluyoruz@gmail.com"
`````
### İstediğim Bilgi Var Mı?

Aradığımız bilginin değişken içerisinde olup olmadığını kontrol etmek için includes() metodunu kullanırız. true veya false döner.
`````
email.includes("@"); //true
email.includes("$"); //false
`````
### Nasıl Başladı Nasıl Bitti?

Aldığımız veri istediğimiz bilgiyle başladı mı? Veya istediğimiz bilgiyle bitti mi? Bu durumu kontrol etmek için startsWith() ve endsWith() metodunu kullanırız.
````
email.startsWith("@"); //false
email.endsWith("org"); //true
`````
### Sorular
`````
let url = "www.kodluyoruz.org";
let language = "Java";
``````

----
## DOM içerisinden Etiket ve ID ile Öğe Seçimi

### Get Element By ID
document objesinin getElementById() metodu ile sayfada bulunan html elementlerinin ID'leri referans alarak seçme işlemi yapabiliyoruz.

### Örnek olarak;

````
<div id="unicorn">🦄</div>
`````
sayfada bulana bu elementi getElementById() metodunu kullanarak seçmeye çalışalım.
`````
const unicorn = document.getElementById('unicorn');
```````
ID'ler büyük-küçük harf duyarlıdır. Bu sayede HTML document içinde biriciklik gösterir ve her zaman geriye bir eleman döndürür. Bir eşleşme bulamazsa da geriye null dönüşünü yapar.
`````
- document.getElementById('#root'); // null
+ document.getElementById('root'); // <div id=​"root">​…​</div>​
`````
### Get Elements By Tag Name
Elemanları isimlerine göre getirmek içim getElementsByName() metodu kullanılır. Elemanların name değerlerine göre bir NodeList objesi döndürür.
`````
<input type="text" name="e-posta">
<input type="tel" name="telefon">
<input type="date" name="tarih">
```````
E-posta adını taşıyan tüm öğeleri getirelim.
``````
const emails = document.getElementsByName('e-posta');
// Çıktı: NodeList [input]
```````
Unutmayın ki name değeri id'de olduğu gibi biricik bir değer taşımaz birden fazla eleman aynı name değerini taşıyabilir. Eğer biricik (uniq) bir değer vermeniz gerekirse id'yi kullanın.'
### Get Elements By Class Name
DOM'da istediğimiz class name'i taşıyan tüm elemanları seçmek için getElementsByClassName() metodunu kullanırız. Bu metot bize bir HTMLCollection döndürür. Ve kullanırken class isminin başına nokta "." koymamanız gerekir.
`````
<div class="baykuş kusu">🦉</div>
<div class="güvercin kusu">🐦</div>
<div class="kartal kusu">🦅</div>
<div class="kedi">🐱</div>
``````
Hatırlayalım! class="baykuş kusu" burada baykuş ve kusu iki ayrı class'tır.

Hadi sayfamızdaki tüm kuşları seçelim;
`````
const kuslar = document.getElementsByClassName('kusu');
// Çıktı: HTMLCollection(3) [div.baykuş.kusu, div.güvercin.kusu, div.kartal.kusu]
```````
Ayrıca bu metotla birden fazla class name belirtip daha detaylı bir seçim yapabilirsiniz.
``````
document.getElementsByClassName('kartal kusu');
// Çıktı: HTMLCollection [div.kartal.kusu]
```````
### Query Selector
QuerySelector () yöntemi, CSS seçicilere dayalı olarak DOM'dan html elemanlarını seçmenize izin veren iki modern JavaScript yönteminden biridir. Bu yöntem ile hem css class'larını hem de id'lerini kullanabilirsiniz. Bunu yaparken class için ön ek olarak nokta ".", id'ler için kare "#" kullanmanız gerekir. Sayfada eşleşen ilk elemanı size döndürecektir. Belirtilen elemanın eşleşememesi durumunda geriye null dönecektir.
``````
const email = document.querySelector('#signup input[name="email"]');
```````
### Query Selector All
querySelectorAll() metodu, QuerySelector () metodu ile aynı mantık ile çalışır tek farkı eşleşen ilk elamanı döndürmek yerine eşleşen tüm elemanları bir NodeList objesi olarak döndürmesidir.
`````
const elems = document.querySelectorAll('.bird, .animal');
console.log(elems.length); // 4
``````
Metotları bir arada kullanabilirsiniz. Yukarda öğrendiğimiz metotları bir arada kullanabiliyoruz. Önce tek bir elemanı seçerek ardından içinde ikinci bir sorguyu yapabiliyoruz.

### Örneğin;
``````
<form id="signup">
    <input type="text" name="email">
    <input type="tel" name="phone">
    <input type="date" name="date-of-birth">
</form>
```````
signup id'li elemanın içindeki tüm input elemanlarını seçmek istersek;
``````
const inputs = document.getElementById('signup').getElementsByTagName('input');
``````
veya
``````
const inputs = document.querySelector('#signup').querySelectorAll('input');
``````
Sonrasında oluşturduğumuz inputs değişkenine Console üzerinden ulaşabilirsiniz.

<img src=images/33.png src=gorsel>

----
## Prompt ile Kullanıcıdan Nasıl Bilgi Alınır?
Javascript kullanıcı ile iletişim kurmamızı sağlayabilen etkileşimli bir dildir ve biliyoruz ki kullanıcı ile etkileşimi sağlamının bir yolu kullanıcıdan bilgi istemektir.

Javascript ile ilgilenenler, Javascript'te prompt komutu ile sağlarlar.

Şimdi birlikte kullanıcıdan istenilen kelimeyi sayfaya nasıl yazdıracağımıza bakalım...

Öncelikle bir fonksiyon belirleriz bu fonksiyon içerisinde prompt ile kullanıcıdan bilgi ister document.write ile de sayfamıza yazdırırız. Özelikle bunları aynı fonksiyon içerisinde yazıyoruz ki sayfamız açıldığında ilk olarak fonksiyonumuz yüklensin ve belirtilen uygulamalar yorumlanıp sırası ile sayfamızda gösterilsin.

- <  script  > tag'leri arasında veya .js dosyamıza yazacağımız fonksiyonumuza geçelim.

Fonksiyonumuzun ismi istek olsun, function istek();

````
function istek()
{
  var kelime=prompt("Bir değer giriniz","lütfen sadece kelime giriniz..")
  document.write(kelime)
}
`````
### Prompt Kullanışına geçelim
var a=prompt(Bir değer giriniz","lütfen sadece kelime giriniz..")

Yukarıdaki gibidir. var a=prompt diyerek girilecek değere a değişkenini atıyoruz ki daha sonra sayfamızda yazdırılmak üzere lazım olacak.

Prompt'ta ilk olarak yazılan;
- "Bir değer giriniz" = Kullanıcıya yönetilen bilgi girişinin başlığının soru halidir.
  
  Prompt'ta ikinci olarak yazılan;

- "lütfen sadece kelime giriniz.." = Text(input) içerisinde gösterilecek uyarıdır. Boş da bırakılabilir.

Evet, Prompt komutunu da kavradık. Şimdi iki işlemimiz kaldı.

1. Kullanıcı tarafından girilen kelimenin sayfada gösterimi.
   
2. Fonksiyonun sayfamız açıldığında çağırılması.

3. document.write komutu bulunan sayfa içerisinde istenileni yazdırmak için kullanılır. Biliyoruz ki değişken yazdırmak istenildiğinde " kullanmıyoruz.
````
document.write(a)
`````
2.Sayfamız açıldığında fonksiyonun yüklenmesi için body içerisine onload komutu ile fonksiyonumuzu çağıralım.
`````
<body onload="mesaj()">
</body>
`````
Evet, işte bu kadar. Şimdi alıştırmalara geçelim!
### Prompt ile Kullanıcıdan Bilgi Almak
Prompt() kullanıcıya soru sorup klavyeden girilen bilgiyle işlem yapan, o bilgiyi döndüren bir window metodudur. alert() gibi Html üzerinde, HTML sayfasından bağımsız çalışır ve karşımıza diyalog penceresi şeklinde çıkar.

### Prompt() Kullanımı:

`````
//prompt("Sorulacak olan soru", "kutunun içerisi")
prompt("Boyunuzu giriniz", "Örnek: 166 cm");

//Örnek kısmı diyalog kutusunun içerisinde gözükecektir
`````
Bu metotla birlikte ekranda "Boyunuzu giriniz" yazısı ve altında da diyalog kutusu belirecektir. Bu diyalog kutusunda da "örnek: 166" yazacaktır fakat zorunlu bir kullanım değildir ve genel olarak kullanıcıya rehberlik etmek için kullanılır.

Burada prompt() yapısını bir değişken içine atmadığımız için istenilen girdiyi girip Tamam tuşuna bassak bile bize bir işlem dönmeyecektir ya da hafızasında girilen bilgiyi tutmayacaktır. Eğer prompt() metodumuzu bir değişken içine atarsak, vereceğimiz cevap o değişkenin bir değeri haline gelir.
`````
var isim = prompt("Adınız nedir?");
console.log("Merhaba, " + isim);

//Çıktı:
//Merhaba, yazdığınız Ad
```````
Artık prompt() komutumuz bir değişken içinde olduğu için console.log() içerisine değişken adımızı yazarak konsol ekranında görebildik. Böylelikle normal bir değişkenle yapabildiğimiz her şeyi artık bu tanımlı değişkenle de yapabiliriz.

Prompt Mantığı
Kullanıcı Tamam düğmesini tıkladığında, giriş alanına girilen metin döndürülür. Kullanıcı herhangi bir metin girmeden Tamam'ı tıklarsa, boş bir dize döndürülür. Kullanıcı İptal düğmesini tıklarsa, bu işlev boş döndürür.

----
ClassList

JavaScrip’te CSS class'larını manipüle etmenin en iyi yollarından biri classList kullanmaktır. classList bir öğenin sınıf isimlerini DOMTokenList olarak döndürür. classList özelliği tüm modern browserlarda çalışır.

### Syntax
````
const elementClasses = elementNodeReference.classList;
```````
- add() : HTML öğesine bir veya daha fazla class ekler.
`````
let div = document.querySelector('#content');
div.classList.add('info');
```````
Yukarıda content id'li ögeyi seçtik ve ona info class'ını ekledik.
``````
let div = document.querySelector('#content');
div.classList.add('info','visible','block');
```````
Tek seferde birden fazla da class ekleyebiliriz.

- remove() : HTML öğesinden bir veya daha fazla class'ı siler.
`````
let div = document.querySelector('#content');
div.classList.remove('info');
``````
Yukarıda content id'li ögeyi seçtik ve ona ait info class'ını kaldırdık.
- item() : HTML de class'ı verilen index sırasına göre döndürür. Eğer index, class length'inden (sayısından) daha büyük veya length'ine eşit olursa undefined döner.
``````
let div = document.querySelector('#content');
div.classList.item(0);
``````

Yukarıda content id'li ögeyi seçtik ve ona ait ilk class'ı çağırdık.

- contains() : Element verilen class'ı içeriyorsa true, içermiyorsa false döner. Bu sayede bir işlem yaptırmadan önce kontrol edebiliriz.

``````
let div = document.querySelector('#content');
div.classList.contains('warning');  
``````
- Toggle() : classList.add() ve classList.remove() yöntemini aynı anda çağırmak yerine classList.toggle() yöntemini kullanılabilir.

Bu metodu kullanmadan önce contains() metodu ile sınıfın var olup olmadığını manuel olarak kontrol etmek gerekir.

``````
let div = document.querySelector('#content');
div.classList.toggle('visible');
``````
- replace() : Bir CSS sınıfını başka bir sınıfla değiştirmek için kullanılır.
  
``````
let div = document.querySelector('#content');
div.classList.replace('info','block');
``````
- length() : Bir öğede bulunan sınıf sayısını bilmemizi sağlar.

-----
## Karşılaştırma Operatörleri ve Mantıksal Operatörler
## Karşılaştırma Operatörleri

Karşılaştırma operatörleri, değişkenler veya değerler arasındaki eşitlik ve farkı bulmak için kullanılır. Bu iki değerin karşılaştırmasını yaparak true (doğru) veya false (yanlış) sonucu verir.

## == Eşitse
`````
var a = 10;
var b = "10";
console.log(a==b)  "Ekranda çıkan sonuç = true"
```````
a ve b değeri birbirine eşit olduğu için sonuç true olacaktır.

## === Hem değeri hem de türü eşitse
``````
var a = 10;
var b = "10";
console.log(a===b)  "Ekranda çıkan sonuç = false"
```````
a ve b değeri arasında üç tane eşittir olmasından ötürü burada hem değerin hem de türün eşit olup olmadığı kontrol edilecektir. a ve b değişkenin değeri aynı olmasına karşın türleri farklı olduğu için sonuç false olacaktır.

## != Eşit değilse
``````
var a = 10;
var b = "10";
console.log(a!=b)   "Ekranda çıkan sonuç = false"
console.log(a!==b)  "Ekranda çıkan sonuç = true"

var c= "kodluyoruz"
var d= "javascript"
console.log(c!=d)  "Ekranda çıkan sonuç = true"
```````
a ve b değişkenimiz birbirine eşit değil ise sonucumuz true dönecektir. İlk logumuzda a'nın değeri ile b'nin değeri aynı olduğu için çıkan sonucumuz false olacaktır. İkinci logumuzda ise değerleri aynı olmasına karşın tür kontrolünün yapılıyor olmasından olmasından dolayı değerler eşit olmayacaktır ve true sonucumuz çıkacaktır. Üçüncü eşit değilse karşılaştırma operatöründe ise iki string ifade karşılaştırılmıştır ve içerdeki iki değer birbirinden farklı olduğu için true sonucu dönecektir.
## < Küçükse
`````
var a = 10;
var b = 10;
console.log(a<b)  "Ekranda çıkan sonuç = false"
``````
a'nın b'den küçük olması durumunda sonucumuz true olacaktır. Fakat yukarıdaki örnekte a değişkeni b'den küçük değildir ve sonucumuz false dönecektir.

## <= Küçük veya eşitse
`````
var a = 10;
var b = 10;
console.log(a<=b)  "Ekranda çıkan sonuç = true"
``````
a'nın b'den küçük olması veya eşit olması durumunda sonucumuz true olacaktır. a değişkeninin değeri ile b değişkeninin değeri eşit olmasından dolayı sonucumuz true dönecektir.
## > Büyükse ve >= Büyük veya eşitse
``````
var a = 20;
var b = 10;
console.log(a>b)  "Ekranda çıkan sonuç = true"

var c = 20;
var d = 20;
console.log(c>=d)  "Ekranda çıkan sonuç = true"
``````
a değerimiz b değerimizden büyük olması durumunda true dönecektir. a ve b değişkenleri kıyaslandığında a'nın daha büyük olmasından dolayı true sonucunu aldık.

c değerimizin d'den büyük veya eşit olması durumunda true, olmaması durumunda ise false sonucu çıkacaktır. a değerimiz b ye eşit olduğu için sonucumuz true olmuştur.

### Mantıksal Operatörler
JavaScript mantıksal operatörleri kullanarak karşılaştırma işlemini birden fazla koşula göre yapabiliriz. Birden fazla koşulu karşılaştırıp operatörün işlevine göre true (doğru) veya false (yanlış) sonucunu verir.

## && ve
`````
var a = 10;
var b = "kodluyoruz";
console.log(a>11 && b=="kodluyoruz")  "Ekranda çıkan sonuç = false"
`````
a ve b değişkenimiz log'lanırken iki tane koşul yazılmıştır. Birincisi a'nın 11'den büyük olması ve b'nin kodluyoruz'a eşit olması ifadesidir. && (ve) mantıksal operatörümüz içeride bulunan iki koşulunda sağlanması durumda true sonucunu verecektir. Örneğimize baktığımızda b kodluyoruz'a eşit olmasına karşın a değerimiz 11'den büyük değildir ve sonucumuz false dönecektir.

## || veya
``````
var a = 10;
var b = "kodluyoruz";
console.log(a>11 || b=="kodluyoruz")  "Ekranda çıkan sonuç = true"
```````
a ve b değişkenimiz log'lanırken iki tane koşul yazılmıştır. Birincisi a'nın 11'den büyük olması ve b'nin kodluyoruz'a eşit olması ifadesidir. || (veya) mantıksal operatörümüz içeride bulunan iki koşulundan birini sağlanması durumda true sonucunu verecektir. Örneğimize baktığımızda a değerinin 11'den büyük olmamasına rağmen b değeri kodluyoruz'a eşit olduğu için sonucumuz true dönecektir.

## ! değil
`````
var a = 10;
var b = "kodluyoruz";
console.log(!(a>11 || b="kodluyoruz"))  "Ekranda çıkan sonuç = false"
`````
! (değil) mantıksal operatörümüz çalışma mantığı çıkan sonucumuzun tam tersini vermesidir. Yukarıda verdiğimiz örnek ! operatörü olmadan true sonucu döndürecektir fakat ! operatörümüz çıkan true sonucu terse çevirdiği için sonuç false dönecektir.

----

## Koşul Yapısı Kullanımı(If/Else)
C programlama dillerinden tutun da Java, Python gibi programlama dillerine kadar her programlama dillerinde kullanılan karar yapıları için If/Else kullanılır. Aynı durum JavaScript için de geçerlidir. JavaScript'te de şartların doğru olup olmadığını kontrol etmek için If/Else ifadeleri kullanılır.

If else yapısı içerisinde koşulun sağlandığı kodlar if içerisinde yer alırken, koşulun sağlanmadığı kodlar ise else içerisinde yer alır.

Eğer ilk koşul yanlışsa başka bir koşul belirtmek amacıyla else if kullanılır. If/Else kullanımı aşağıdaki gibidir:
``````
if(kosul) {
    // Bu kod satırı çalışacaktır.
}

else {
    // Bu kod satırı çalışır.
}
```````
Else kod blokları arasında tek satırlık bir kod yazılacaksa köşeli parantez { } kullanımına gerek yoktur.
`````
if(kosul) {
    // Bu kod satırı çalışacaktır.
} 

else // tek satırlık kodu buraya yazabilirsin. 

``````
If / Else koşulunun teoride çalışma prensibi bu şekildedir. Şimdi ise basitten başlayarak örneklerle teorik bilgileri pratiğe dökelim.

1.Örnek İki sayıdan büyük olanı bulalım:
``````
var x = 5;
var y = 7;

if(x > y) {
    console.log(x + " sayisi" + y + " sayısından büyüktür." );
}

else {
    console.log(y + " sayisi" + " " + x + " sayısından büyüktür.");
}

``````
Bu örneği aşağıda codepen ile uygulayabilirsiniz.

2. Örnek: Vize ve final notları belli olan bir öğrencinin yıl sonunda dersten geçip geçmediğini hesaplayalım:

Şartlar:

* Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
* Vize ve final notunun toplamından doğan not ortalaması * eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
* 31-49 aralığındaysa DC - KOŞULLU yazdıralım.
* 50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
* 85-100 aralığındaysa Notunuz AA yazdıralım.

``````
var ogrVizeNot = 45; // Bu kod satırını değiştiriniz. 

var ogrFinalNot = 60; // Bu kod satırını değiştiriniz. 

var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if(ogrOrtalama >= 0 && ogrOrtalama <= 30) {
  console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ(FF).");
}

else if(ogrOrtalama >= 31 && ogrOrtalama <= 49) {
  console.log("Not ortalamnız: " +ogrOrtalama + " DC - KOŞULLU ");
}

else if(ogrOrtalama >= 50 && ogrOrtalama <= 84) {
  console.log("Not ortalamnız: " +ogrOrtalama + " CC - GEÇTİNİZ ");
}

else if(ogrOrtalama >= 85 && ogrOrtalama <= 100) {
  console.log("Not ortalamnız: " +ogrOrtalama + " AA - GEÇTİNİZ ");
}
``````
## Bu örneği aşağıda codepen ile uygulayabilirsiniz.

3. Örnek Tahmin Oyunu: Bilgisayar tarafından 10 'a kadar tutulmuş olan rastgele sayıyı bulalım:

``````
var randomSayi = Math.floor(Math.random() * 10);
//Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır
var tahmin = prompt("Bir sayı gir ve rastgele sayıyı bulmaya çalış!");
if (tahmin === randomSayi && tahmin != null) alert("Bildin!!!");
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
  alert("Bir daha denee :(, Random sayi: " + randomSayi);
}
``````
Bu örneği aşağıda codepen ile uygulayabilirsiniz. Sayıları promptyerine input ile almayı deneyin!

4.Örnek Verilen formüle göre vücut kitle indeksi hesaplayan ve hesapladığı değere göre yazı yazan bir program yazalım. Programda yazılmış kısımları okuyup eksik kısımları tamamlayın.

Fonksiyon parametreleri prompt ile kullanıcıdan alınmalı.

### Formül: vki = kg/(m * m)

### İstenilenler:
1. Prompt ile kullanıcıdan bilgi almak
2. Verilen formülü uygun yere yazmak
3. Formülde metre cinsinden istendiği için diyalog kutucuğuna metre cinsinden örnek 1.66 yazarak kullanıcıya rehberlik etmek

`````
//Kod satırını buraya ekleyiniz.
function vkiHesapla(weight, height) {
  var vki; //Bu kod satırını değiştiriniz
if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
return alert("Girdiğiniz değerleri kontrol ediniz");
};
vkiHesapla(weight, height);
``````
----
