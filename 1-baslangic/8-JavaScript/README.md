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