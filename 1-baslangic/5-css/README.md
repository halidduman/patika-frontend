# CSS
Css kullanırken unutmamamız gereken isaretlerden biri ";"'dir. bu fazladan ozellik eklemek istedigimiz zaman kullanicagimiz bir isaret

peki biz < h1 > kodumuza ozellik eklemek istersek su sekilde yapabiliriz.
```
<h1 style="color:red;front-size:14px">selam"</h1>
```
peki < h1 > (baslik) renginin deismesi icin ne yapmaliyiz
```
<h1 style="color:red">Baslik<h/1>
```
diyebiliriz
--
< h1 > (baslik) yazi boyutunun degismesi icin ne yapmaliyiz
```
<h1 style="font-size:64px">Baslik<h/1>
```
diye yazabaliriz.
--

# Inline(Etikete Özel), Internal(Aynı Dosyada) ve External(CSS Dosyasında) CSS Kullanımı
uc cesid css kullanımı vardir
--
- Inline css= etiket icinde style kullanımı.
 
- Internal css=sayfanin en ust kisminda < head > etiketinin icine < style > etiketi actiktan sonra hangi etiketlere eylem yapmak istedigimizi giriyoruz ornk:h1,h2,p etiketleri vs.

yani head icinde style etiketinde yazilir
-- 
````
<head>
    <style>
        h2 {
            color: rgb(165, 42, 124);
            font-size: 64px;
        }
    </style>
</head>
````

- External css=bir tane css dosyasi olusturuyoruz ve bu dosyanin icine degismesini istedigimiz kodu yaziyoruz mesela
````
h2 {
    color: rgba(42, 93, 165, 0.748);
    font-size: 55px;
}
````
bu kodu css dosyamiza yazdiktan sonra artik istedigimiz html dosyasinin icindeki head bolumune "link:css"yazip ekledigimizde artik css dosyasinda yazilen kurallar gecerli olmaya baslicak.
--
```
<link rel="stylesheet" href="dosya-adi.css">
```

# ! ! !
< head > kısmına girdiginiz < style > etiketleri bütün hepsini etkiler ama siz etiketin icine renk,boyut gibi bilgileri girerseniz girdiginiz satiri etkilenmez.
---
----
Inline css komutları,Internal css onceliklidir
-- 
