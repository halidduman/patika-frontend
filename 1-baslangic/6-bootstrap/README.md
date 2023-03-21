# Genel Tutucu(Container), Satır Blokları(Row) ve Kolon(Col) Yapısı
Container'ı(konteynır) isminden de biraz anlaşılacağı gibi, içine web sayfamızda bulunması gereken yazıları, resimleri, videoları veya herhangi bir içeriği koyduğumuz kapsayıcı bir çerçeve, kutu gibi düşünebiliriz. Biz içeriklerimizi bu container içerisine koyuyoruz ve bir tarayıcıdan web sayfamız görüntülendiğinde container kendisini ekranın tam ortasına gelecek şekilde ayarlıyor. Görsel bir örnek üzerinde en ilerlemek daha açıklayıcı olacaktır. Örnek olarak aşağıda kodluyoruz'dan aldığım bir ekran görüntüsünü inceleyebiliriz.


Becerilerini geliştir, Mezunlar Kulübü'ne Katıl ve Şirketlerle Buluş kısımlarını kapsayan ancak bize gözükmeyen bir çerçeve olduğunu düşünelim. Bu çerçeve ile sayfayı görüntülediğim ekran arasında sağ taraftan ve sol taraftan eşit miktarda boşluklar var gördüğünüz gibi, yani container ortalanmış.

----
## Bootstrap - Ekran Çözünürlüğü / Cihaz Duyarlı(Responsive) Kolon Yapısı Kullanımları
kolon(col) istedigimiz cihaza gore madifikasyon yapabiliriz.

ornek:
mobil bir ekranım varsa ekranı tam doldursun diye biliriz.veya tablet(small) ekranında yarısını kaplıyacak iki tane kutum olsun,laptop (medium) ekranında iki değil uc tane kutum olsun,pc(large) de dort kutu,tv(1x) altı tane kutum yan yana gelsin diyebiliriz.

----
## Bootstrap - Ekran Çözünürlüğü / Cihaz Duyarlı(Responsive) Kolon Yapısı Kullanımları

bir cozunurluk verdiginizde zaman cizgisi gecerlidir.mesela siz (col-sm-6) ve (col-xl-2) derseniz bu iki kolunun arasına bir deger girmediginizden dolayı LG (large) cozunurlukli cihazlarda sm (small) komutu gecerli olacaktir

----
## Bootstrap - Satır Blokları (Row) Kullanımı
ROW:bir container veya kolunu 12'lik grid sisteme geri çevirir.

----
## Bootstrap Renk Strandartları, Tipografi, Margin ve Padding Kullanımı

###   Renk Standartları, Tipografi, Margin ve Padding Kullanımı Bootstrap Renk Standartları

Bootstrap temamızı, bileşenlerimizi daha iyi stillendirebilmemiz adına kapsamlı bir renk sistemine sahip. Renk standartları deyince aklımıza belirli renk kullanımları gelebilir fakat direkt renk ataması yapmak yerine Bootstrap anlamlı renk kümelerini içeriyor. Günümüzde Bootstrap kullanılmayan projelerde dahi standart olarak bu yaklaşımı görebiliyoruz.

Herhangi bir web sitesini ziyaret ettiğinizde en ön plana çıkan renk, site içerisindeki önemli vurgularda ve kullanıcıyı harekete geçirebilecek dinamikliğin olduğu yerlerde, ana renk olarak görürüz. Ana rengin yanına ek olarak kullanıcıya daha iyi UI/UX tecrübesi sunabilmek için kullanıcıyı site içerisinde yönlendirirken belirli renk seçimleri yaparız. Bootstrap renk standartlarında da bu yapıyı görmek mümkün.

Bootstrap tarafından üretilmiş renk şemaları ve örnek kullanımı şu şekilde;

        
    Primary: tema ana rengi
    Secondary: temada kullanılacak ikincil renk.
    Success: örnek olarak kullanıcıların bütün gereksinimleri sağladıkları bir formu doldurduktan sonra yeşil renk tonlarını içeren bir mesaj gösterirken kullanabileceğimiz sınıf.
    Danger: Success için verdiğimiz örneğin tersi bir durumda kırmızı renk tonlarını içeren bir feedback için kullabileceğimiz sınıf.
    Warning: Kullacıların dikkatini çekmek amaçlı kullanılan renk şema sınıfı.
    Info: Kullacıların dikkatini çekmek amaçlı kullanılan renk şema sınıfı.
    Light: Tema içinde yazılar ve arkaplan renklendirmesi için kullanabileceğimiz renk şema sınıfı.
    Dark: Tema içinde yazılar ve arkaplan renklendirmesi için kullanabileceğimiz renk şema sınıfı.

### Tipografi

Bir web sitesini ziyaret ettiğinizde karşınıza harfler ve semboller olmadan bir yapı ortaya çıksa ne kadar anlamlı olurdu? Tipografi sadece internet değil hemen hemen bütün iletişim kanallarında başrol oynayan harf ve semboller kullanılarak yapılan bir sanattır.

### Başlıklar
````
Web sitesinin içeriğinde, önem derecesine göre attığımız başlıkları <h1> den <h6> ya kadar sınıflandırabiliriz. Bootstrap hepsini destekler. En az bir <h1> tag'i olması SEO açısından da önemlidir. HTML içerisinde ise başlıkları bu şekilde atabiliriz.
````
Eğer başlık etiketlerinden farklı bir HTML etiketinde, paragraph etiketi gibi(<  p  >), başlıklardan birinin font stillerini kullanmak isterseniz .h1 den .h6 ya kadar class'lar Bootstrap de mevcut.

### Örneğin:

````
<p class="h1">content</p>
````
Yukarıda p etiketi içerisinde yazdıklarımız şekil olarak h1 class'ının biçimini aldı.

### Paragraf
Web sitesinde bir içeriğe dikkat çekmek, daha belirgin kılmak için Bootstrap içerisinde var olan utility class'lardan .lead classını kullanabiliriz.

### Örnek kullanım:

````
<p class="lead">Önemli bir paragraf</p>,
````
Paragrafın font stillendirmesi daha okunabilir ve standart paragrafa göre yazı boyutu daha büyük olacaktır.

## Inline HTML

HTML kodlarımızda bazen vurgulamak istediğimiz kelimeleri ve ya bir yazıyı inline elementler ile belirtebiliriz. , kalın ve/ya italic yapmak istersek gibi. Bunu yapmanın bir kaç yolu var tabii ki. Inline elementler kullanarak <  strong  ><  /strong  > gibi veya inline element kullanmadan bir stillendirme vererek de bu sonucu elde edebiliriz.
````
<p><mark>Highlight</mark></p>
<p><u>Altı çizili</u></p>
<p><strong>Kalın</strong></p>
<p><em>italic</em></p>
<p><small></small></p>
````
Diğer bir çözüm Bootstrap tarafından bize sağlanan class'ları HTML etiketine atamak. Yani .mark .small .text-decoration-underline gibi class'ları etiket içerisinde kullanmak.

### Örneğin:
````
<p class="mark">Highlight</p>
<p class="text-decoration-underline">Altı çizili</p>
<p class="small">Küçük</p>
````
Bir kelime bütününü veya cümleyi gerçekten vurgulamak, italic kullanmak, şeklinde kullanıp o yapıya bir anlam yükleyecek isek tercihen HTML tag'lerini kullanmak önemlidir. Bu şekilde Ekran okuyuculara bu anlamı belirtmiş olur ve en önemlisi engeli olan ve interneti kullanan bireylere de bu mesajı vermiş oluruz.

### Listeler
Bootstrap, en çok kullandığımız elementlerden biri olan listeler içinde utility class'lara sahip.

````
<ul class="list-unstyled">
    ..........
    ..........
  </ul>
 <ul class="list-inline">
    <li class="list-inline-item">
      Lorem Ipsum
    </li>
    ..........
    ..........
  </ul>
  ````
  Yukarıdaki kodu açıklayacak olursak:
  
  list-unstyle classı , varsayılan olarak gelen liste stillendirmesini ve margin-left özeliğini kaldırır.
list-inline ve list-inline-item classlarının birlikte kullanımı ile, liste stillendirilmesi kaldırılır ve <li> taglerinin tek bir satırda, aralarında margin verilmiş şekilde görüntülenmesini sağlar.
----

## Display Özellikleri ile Responsive Yapıya Göre İstenilen Blokların Gösterilmesi / Gizlenmesi

Bootstrap’te Display Özellikleri ile Responsive Yapıya Göre İstenilen Blokların Gösterilmesi / Gizlenmesi
Bootstrap 5’teki display özellikleri sayesinde, CSS’teki display özelliği daha kolay bir kullanıma kavuşuyor.

CSS’teki display özelliğini kısaca hatırlayalım.

````
display: none;
/* Elemanı sayfadan tamamen kaldırır */

display: block;
/* Elemente blok seviyesi elementlerin (<div>, <header>, <h1> gibi) görünüm özelliğini kazandırır.  */

display: inline;
/* Elemente <span>, <a>, <img> elementlerinde olduğu gibi, satır içi yerleşim özelliği kazandırır. Element satırı tamamen kaplamaz, içeriği kadar yer kaplar.  */

display: inline-block;
/* Elementleri satır içi element gibi yan yana dizmek için kullanılır. */

display: flex;
/* Element inline element gibi davranır ve bunun yanında flexbox modeline uygun görünüme sahip olur. */

display: grid;
/* Element, blok level bir element gibi davranır ve grid model görünümüne uygun davranır. */
````
Bootstrap display özelliği sayesinde çok daha kolay bir şekilde responsive uyumlu hazır grid sistemler inşa edebiliriz. Bunun için oluşturacağımız element için class değerine d.{value} girmemiz yeterlidir.

{  value  } değeri aşağıdakilerden herhangi biri olabilir:
````
none
inline
inline-block
block
grid
table
table-cell
table-row
flex
inline-flex
````
### Breakpoint’ler
Bootstrap’te ekran boyutları için hazır tanımlamalar bulunmaktadır. Bu tanımlamalara göre elementlerin görünürlüğünü açık/kapalı olarak class tag’inde belirtebiliriz. Bu sayede responsive uyumlu dinamik bir görünüm elde ederiz:

### Alıştırma
Şimdi, Bootstrap özelliklerini kullanarak 5 adet h1 oluşturalım ve bu h1 elementlerinin display özelliklerini ayarlayalım.

Bootstrap display class’larında ilk belirtilen değer aksi belirtilmedikçe diğer ekran boyutlarında da geçerli olmaktadır. Örneğin XS (mobil) boyutu için görünür olmayan bir element ekstra bir tanım yapılmadıkça diğer ekran boyutlarında da görünür olmayacaktır. XS boyutunda d-none (CSS’teki display:none; ile eşdeğer) olarak tanımlanmış bir elementi MD (Laptop) boyutunda ekranda görünür hale getirmek için

İlk elementimiz mobil yani “xs” boyutu için görünür olmalı. Bunun için class tag’ine d-block yazmamız gerekiyor ve bu da CSS’teki display:block; satırına eşdeğer. Fakat bir sonraki boyut ve sonrasında elementi gizlemek için display:none; olarak ayarlamamız gerekiyor. Bunun için Bootstrap’te sonraki boyut olan “sm” boyutu için d-sm-none tanımlamasını yapıyoruz. Böylece sm ve daha sonraki ekran boyutları için display:none tanımlamasını yapmış oluyoruz:
`````
<h1 class="d-block d-sm-none bg-warning p-5 text-white mx-auto">XS - Birinci Element - Mobil Görünüm</h1>
````
Bir sonraki h1 elementi için ise sadece sm ekran boyutunda görünür olmasını istiyoruz. Bunun için standart olarak d-none özelliği tanımlayıp ardından sm ekran boyutu için d-sm-block tanımlaması yapıyoruz. Sonraki ekran boyutları için elementi gizlemenin yolu ise, bir sonraki ekran boyutunda yine display:none tanımlaması yapmak. Bunun için d-md-none yazabiliriz:
````
<h1 class="d-none d-sm-block d-md-none bg-primary p-5 text-white mx-auto">SM - İkinci Element - Tablet Görünüm</h1>
````
Sonraki h1 elementinde sadece md ekran boyutunda görünür olması için varsayılan olarak d-none tanımlaması yapıp ardından d-md-block yazmalıyız. Sonraki ekran boyutlarında görünürlüğü kapatmak için ise d-lg-none yazmamız yeterli olacaktır:
````
<h1 class="d-none d-md-block d-lg-none bg-success p-5 text-white mx-auto">MD - Üçüncü Element - Laptop Görünüm</h1>
````
Sonraki h1 elementinde önce d-none, ardından lg ekran boyutunda görünür hale getirmek için d—lg-block, sonraki ekran boyutlarında gizli hale getirmek için ise d-xl-none yazabiliriz:
````
<h1 class="d-none d-lg-block d-xl-none bg-danger p-5 text-white mx-auto">LG - Dördüncü Element - Normal Ekran Görünüm</h1>
````
Son ekran boyutunda görünmesini istediğimiz h1 elementini ise varsayılan olarak d-none şeklinde ayarlıyoruz. Ardından d-xl-block yazmamız yeterli olacaktır. Bu ekrandan daha büyük tanımlı bir ekran bulunmadığı için, başka bir tanımlama yapmamıza gerek yoktur:
````
<h1 class="d-none d-xl-block bg-info p-5 text-white mx-auto">XL - Beşinci Element - Büyük Ekran Görünüm</h1>
````
``````
## Diğer CSS Kütüphaneleri.

- Foundation  
- Semantic UI
- Bulma
- UIkit
- pure.css
- Skeleton
- Miligram
- TailWindcss
---



