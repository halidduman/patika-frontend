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