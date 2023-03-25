# Veri Yapıları ve Algoritmalar

## Recursion

- Bir problemin alt problemlere bölünüp hesaplanmasına, nerde son bulacağımı belirttiğimiz ifadelere recursion (Özyineleme) diyoruz. Peki bu recursion ne anlama geliyor dediğiniz duyar gibiyim. Hadi gelin fibonacci serisi ile konumuzu pekiştirelim.

- Fibonacci serisi 0,1 den başlayarak her önceki 2 sayının toplamı şeklinde bir kurala sahiptir. 0+1 = 1, 1+1=2, 2+1=3, 3+2=5 gibi. Kendinden bir önceki eleman ile iki önceki elemanın toplamı serinin devam sayısını verir. Recursion kullanımı : Fonksiyonumuz fib(x). 3. elemana n diyelim, fib(n-1) + fib(n-2) bize 3.elemanı yani 1 sonucunu verir. fib(n-1) + fib(n-2) => Recursion

## Arrays

- Arrays (Diziler), anlam ifade etmesi için birden fazla nesneye ihtiyaç duyabilir. Mesela, Şu an karşısında olduğunuz bilgisayar örneğini inceleyelim. Masaüstü bilgisayarlar, klavye-mouse-monitör üçlüsünü bir araya getirince anlam ifade eder. Herhangi biri olmadan bir işlem yapmanız olasıdır ama zorludur.

- Array (Dizi), dezavantajlarından biri olan hafıza problemini inceleyelim. Bilgisayar örneğimizden devam edelim. Hali hazırda bir klavye, bir mouse ve bir monitörümüz var. Yeni bir monitör aldığımızda daha büyük bir masaya ihtiyacımız var. Aynı şekilde yeni bir klavye veya mouse aldığımızda da aynı durum geçerli. Bir yerden bir yere taşırken zaman ve güç kaybına uğruyoruz.

- Dynamic Arrays (Dinamik diziler) ise yeni bir eleman için boşta yer tutmasından ötürü esnektir. Örneğin, bazı mutfak masaları açılan sürgülü bir yapıya sahiptir. Masanın küçük kaldığı durumlarda büyütmek için kullanılır. Dinamik dizilerde aynı mantığa sahiptir. Yeni elemanlar için yer tutarlar.

- Dynamic Array (Dinamik dizinin) dezavantajlarından biri ise hafızada fazladan yer kaplaması, gerçekleşecek olan bir diğer olayı engelleyebilir. Nasıl mı, hemen örnek ile kavrayalım. Masa örneğinden bahsetmiştik. Misafirleriniz bir işi çıkması durumunda fazladan yer kapladık ve hareket kabiliyetimizi kaybettik.

- Hep dezavantajlarını konuşuyorsun, e yahu bunun avantajı yok mu? Tabii ki var. Array'lerin birbirine bağlı olması ulaşılabilirliğini kolaylaştırır. Klavye-Mouse-Monitör örneğini vermiştik. Hepsi bir masada bulununca ulaşılması kolaydır. (Masa = Array, Klavye-Mouse-Monitör = Array Elemanı)

## Linked-List

- Linked-List (Bağlı listeler), yan yana zorunluluğu olmadan veri tutmamızı sağlayan yapılardır. Yeni gelen eleman için hafıza'da yeni bir alan açmamız gerekmez. Array'dan farklı olarak evet elemanlar hafıza içerisinde dağılmış olabilir, fakat son gelen eleman kendinden bir önceki elemana adresini bildirmek zorundadır.

<img src=images/linked-list.png alt=gorsel>

- Yukarıdaki örnekte gördüğünüz üzere, her bir düğüm bir sonrakinin adresini tutar. Her bir önceki eleman bir sonraki eleman ile bağlıdır.

## Linked List vs Array

<img src=images/2.png alt=gorsel>

<img src=images/3.png alt=gorsel>

## Linked List Eleman Ekleme/Silme
Gelin 3 elemanlı bir hücre oluşturalım.

<img src=images/4.png alt=gorsel>

### Eleman Ekleme

- Adresi #12 olan 22 sayısını listeye eklemek istiyoruz. Yapmamız gereken 6 hücresine 22 sayısının adresini yazmak.
<img src=images/6.png alt=gorsel>

### Eleman Çıkarma
- Adresi #20 olan 6 numaralı hücresini çıkarmak istiyoruz. Linked-List'de bir önceki eleman adresini tutuyordu. Yani 7 numaralı hücrede bulunan 6'nın hücre adresini siliyoruz. Yerine 22 numaralı hücrenin adresini yazıyoruz
<img src=images/7.png alt=gorsel>

## Stack

- Stack, LIFO (Last in First out) (En son giren en önce çıkar) mantığına dayanan, elemanlar topluluğundan oluşan bir yapıdır. Gelin hemen örneğimize geçelim. Taşınırken topladığınız koli kutusu düşünün. İçerisinde kitaplar var ve en, boy olarak koliye tam olarak koyuluyor. Mantıken kolinin altı kapalı ve üst üste koymanız gerekmektedir. Yeni taşındığınız yerde çıkartırken en üstekinden başlarsınız. İşte stack (Yığın) da aynı mantıkta çalışıyor.

- Yığınlara eleman eklerken veya çıkartırken bazı methodlar uygulanır. Bunlardan biri push, diğeri ise pop. Push, yığının üzerine eleman eklemek için kullanılır (Koliye kitap koymak). Pop ise, yığından eleman çıkarmak için kullanılır.
- <img src=images/8.png alt=gorsel>

## Hash Collision

Hash Function farklı iki değerden aynı sayı üretilirse bu duruma Collison (çarpışma) denir. Bu olay istediğimiz bir durum değildir.

- Hash Function'lar bazen farklı durumlar için farklı sonuçlar üretemeyebilir. Örnek olarak araçları bir hash function dan geçirelim. Bu fonksiyonumuz son harflerine göre bir değer atıyor. Örneğin, motor ve tır için aynı değerleri ataması collision'a neden oluyor.
- Collision sorunuyla az karşılaşabilmek için kaliteli bir hash function olmalı. Bu sayede verimli bir Hash Table elde etmiş oluyoruz.
- Çarpışma sayısı arttıkça aradığımız şeyi bulma hızı azalır.

## Algoritma Analizi

- Algoritma analizi, var olan kaynaklara göre en uygun algoritmayı seçmek için uygulanır. Peki algoritma analizi en iyi nasıl yapılır? Kulağa karmaşık geliyor ama çok basit. Programlama dillerinden ve donanımlardan bağımsız bir şekilde Algoritma analizi yapılmalıdır. Aksi taktirde en uygun sonuç alınamayabilir.


- Donanımlar veya programlama dilleri farklı cihazlarda aynı performansı vermeyebilir. Örnek verecek olursak, cep telefonları için uygulama tasarladığımızı varsayalım. Bu uygulamanın performansı Apple telefonlar için farklı, Android telefonlar için farklı, arasında donanım farklı olanlar için ayrı olacaktır. Donanım ve diller ile algoritma analizi pek sağlıklı değildir.


- Algoritma analizi, bir algoritmanın çalışabilmesi için gerekli koşulların sağlanıp sağlanamadığını gösteren bir parametredir.

## Big-O Notation

Big-O Notation grafikleri :

<img src=images/9.png alt=gorsel>

- İki farklı arama yöntemimiz var. Bunlardan A algoritması sayfa sayfa, B algoritması yarıya bölüp tarıyor. Sizce hangisi daha hızlı çalışır? Tabii ki B algoritması. Peki neden? Sürekli tarayacağı alan azalıyor. A algoritması daha işlemini bile yarılamamışken, B algoritması sonuca ulaşıyor.


- N tane işlem üzerinden big-o gösterimi yapalım. A algoritması input olarak kaç sayfa varsa o kadar işlem yapıyor. B algoritması ise sayfa sayısını azaltmak için alfabetik sıraya göre sağ ve sol olarak yarıya indiriyor. 

<img src=images/10.png alt=gorsel>

## Sorting
Sorting, kendinden sıralama algoritmaları olarak bahsetmektedir. Sorting, bir eleman dizisini, belirli sıralama kurallarına göre sıralama yapar.
<img src=images/11.png alt=gorsel>

1. Searching yöntemini kullanarak elemanlarımızı sıraladık. Bunun sebebi, eleman ararken işimizin kolaylaşmasını istiyoruz.

2. Closest Pair yöntemini kullanarak birbirine yakın sayıları gruplandırdık ki arama yaparken zamanımızı efektif bir şekilde kullanalım.

3. Aynı eleman kontrolü: birbiriyle aynı olan sayıları örüntü içerisinde kaç tane aynı eleman varsa sayısını öğrenebilirim.

4. Mode bulma: eleman dizisini search ettikten sonra elemanların yan yana olanları sayarsam daha hızlı mode bulabilirim.

## Merge Sort

Insertion Sort'da, Big-O gösteriminden dolayı input'um arttığında n2 olduğunda dolayı çalışma zamanı artıyor.

- Peki daha hızlı bir şekilde sıralama yapılabilir mi? Evet, Merge Sort burada yardımımıza koşuyor. Bir listeyi her adımda parçaya ayırıp tek eleman kalıncaya kadar bölüyor. Böldükten sonra sıralı bir şekilde bize sunuyor (Performans).

<img src=images/12.png alt=gorsel>
<img src=images/13.png alt=gorsel>

Insertion sort'da, time complexity n2 olduğundan ötürü çalışma zamanımız artıyordu. Merge sort'da ise nlogn olduğu için açık ara performans olarak daha iyi diyebiliriz.

## Linear Search

Linear search, tek tek elemanları dolandıktan sonra istediğim elemanın olup olmadığına bakmaktır.

- Örneğin, [20,25,46,48] veri setini ele alalım. Benim aradığım eleman 25. İlk elemana gidiyorum ve değeri 20 sen değilsin diyorum. İkinci elemana gidiyorum ve değeri 25 evet sensin diyorum. Linear search algoritmam burada bitmiş oluyor.

- Big-o ya göre incelediğimizde bizim worst case'imiz neydi? Elemanın dizinin sonunda bulunmasıydı. Bu sebepten ötürü n elemanımız varsa big-o notasyonumuz otomatik olarak n oluyor.

## Binary Search Tree
Bir düğüm her iki tarafa da referans verebiliyor. Sağ ve sol olarak. Sağ tarafından kendinden büyük elemanlar, sol tarafında ise kendinden küçük elemanlar bulunacak.
<img src=images/14.png alt=gorsel>

- Tree'ye eleman eklemek istediğimde root'dan başlıyorum. Örnek olarak ben 26 sayısını ağaç yapısına eklemek istiyorum. Root'a soruyorum senin değerin ne 56. Baştaki açıklamamızı hatırlayalım. Sağ tarafında kendinden büyük, sol tarafında kendinden küçük elemanlar var. O yüzden sırasıyla 56 ve 30 a kadar ilerliyorum. 30 bana benim sol tarafıma geçmelisin çünkü sen benden küçüksün diyor. Karşıma 22 değerinde olan düğüm çıkıyor ve 22 den büyük olduğum için sağ tarafına bir köşe çekiyorum ve 26 sayısını bağlıyorum.