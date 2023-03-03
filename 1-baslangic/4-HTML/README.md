# HTML Nedir?
Web sayfalarında gördüğümüz iskelet yapısını oluşturmak için kullanılan metin işaretleme dilidir. Bir programlama dili olarak tanımlanmayan HTML' e metin işaretleme dili denilmesinin sebebi, HTML kodlarıyla çalışan bir program yazamadığımızdan kaynaklıdır.
# HTML Ne Yapar?
- Web sayfasında gördüğümüz görseller, yazılar ve videoların konumlandırılmasını sağlamaktadır.
- Konumlandırılan web sayfalarının web tarayıcılar tarafından doğru bir şekilde görüntülenmesini gerekli kuralları belirler.

        HTML aslında bilgisayarda sürekli olarak kullandığımız web sitelerinin oluşmasında kullanılan bir dildir. Yazılan kodlar web tarayıcıları (browser) tarafından web sayfalarına dönüştürülmektedir. Tabi ki bu web sayfalarının sadece HTML kodlarıyla oluşmuyor. HTML kodlarının yanında CSS ve JavaScript dilleri de kullanılmakta. Ancak bu dillere şu an bakmanıza gerek yok. Öncelikle HTML dilinin mantığını, tarihini ve web tarayıcıları hakkındaki bilgilerle başlayalım.

# Web Tarayıcısı
"HTML Nedir?" sorusunun cevabını iyi bir şekilde anlamak için web tarayıcıları hakkında kısa da olsa bilgi sahibi olmak gereklidir. Aslında hepimizin sürekli halde kullandığı web tarayıcıları basit anlamıyla; www (World Wide Web) sisteminde bulunan bilgileri görüntülemeye yarayan teknolojiler olduğunu söyleyebiliriz. Bir web tarayıcısı internet dünyasındaki istediğiniz bir noktaya gitmenizi sağlayarak metin, resim ve videolar görmenize imkan verir.

# html Açıklama Satırları Oluşturmak
```
<H1>BAŞLIK </H2> NOT:"</H2>" kodundaki "/" işareti başlığı kapatmak için.

<!-- açıklama satırı&kodudur buradak yazanlar tarayıcıda gözükmez --> (<!---->)
```
- NOT: "(<!.---->)" bu kodu satırlar arasında kaybolmamak için kullanılabilir veya tarayıcı üzerinde görünmesini istemeyip sadece kendinizin görmesini isteyeceği açıklaba vs. yazabilirsiniz.
- kısayol tuşu:(Ctrl+ö)
- seçtiğiniz örn:<h 1>başlı<h/1> komutunu seçim veya benzer kodları  "Ctrl+ö" derseniz gizlemiş olursunuz.
- açıklama kodu etki etmez.
- # Başlıklar ve Paragraflarla Çalışmak
```
<h1>kodluyoruz-front-end 101 eğitimi</h1>
<!-- başlık -->
<h2>HTML</h2>
<!-- ikinci başlık -->
<h3>Başlıklar ve paragraflarla çalışmak</h3>
<!-- 3. başlık -->
<p>örnek yazı</p>
<!-- paragraf -->
<h2>CSS</h2>
<!-- 2.başlık -->
<h2>Booststrap</h2>
<!-- 2. başlık -->
````
NOT: Başlıklar kod satırı parantezinin içinde olduğu için görünür durumdalar.tarayızı veya metin dosyalarında gözükmez.

# listelerle çalışmak
```
* ilk komutumuz:"<ol>" yani sıralı liste 1,2,3 diye devam eden liste türü.ayrıca "<ol>" kullanımı içinkomutunun içine <li> komutunu girmelisiniz.

* yukarıdaki işlemlerin aynısı "<ul>" yani sırasız liste komutu içinde geçerli. NOT:kod satırının yanındaki ufak ok işaretine basarak satırları gizleyebilirsiniz.

* listenin içine liste açabilirsiniz.
```
# Emmet ile Daha Hızlı HTML Yapıları Oluşturmak

```
* "+"   :kardeş element oluşturur.mesela ben <h1>+<h2>+<p>dersem ve "tab"a basarsam bir başlık, bir alt başlık, ve bir paragraf açıcaktır.


* ">"   kısaca açtığınız kod satırının içine yazmak istediğiniz kod satırı için bu işateti kullanın örnek:ben <ul>(sırasız liste)'nin içine <li>(silte)açmak istersem şu şekilde yapabilirim:<ul>><li> Ayrıca içine yazladan <li>(liste)açmak istersem <ul>><li>*5 diyebilirim


* "^"   yukarı çık işareti kod satırın içinden çıkmak için kullanılır eğer ben bu işareti kullanmazsam "<ul>><li>><p>><h3>><p>" yaparsak iç içe geçer ve karmaşık hale gelir bu yüzden üst satıra geçmek için bu işaret kullanılır.NOT:duruma göre iki veya fazlakez kullanılabilir.(^^^)gibi.içinne girdiğiniz koddan çıkmak için kullanılıyo gibi düşünebiliriz.


* "*"  komutları çoğaltır kaç tane isterseniz bu işareti ekleyip sayı ile belirtmeniz yeterli.


* "lorem"   anlamsız yazılar eklemek için kullanılır.ayrıca "lorem" yazıp bir rakam belirtirsek (1,2,3,4,5,6) yazdığınız rakam kadar kelime yazar örnek:"lorem4"4 kelimelik yazı.


* "#"İD için


* "."Class? (ne olduğu belirtilmedi)
```

# Görsellerle Çalışmak

internet üzerinden görsel eklemek için görselin linkini kopyalayın.
-
```
<img src="" alt="">kodunu oluşturun kısaca[img+tab]
````
NOT:src:linki yapıştıracağınız yer.Alt görselin açıklamasını yazabilirsiniz

-----
karışık&rastgele oluşan img lorem(anlamsız,değişken) resimler oluşturan siteler mevcut.
---
* <strong>Lorem picsum

internet üzerindeki görseli indirip kullanmak isterseniz.projenizin olduğu klasore koymanız gerekir.

```
(width=200):genişlik eklemek için.

(height=): yukseklik eklemek icin.
````

"< img >"satırından sonra bosluk bırakıp ekleyin.