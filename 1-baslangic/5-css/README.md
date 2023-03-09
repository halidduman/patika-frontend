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

## Inline(Etikete Özel), Internal(Aynı Dosyada) ve External(CSS Dosyasında) CSS Kullanımı
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
(eger bir kod satirini kullanmayacak ama kaldirmakta istemiyorsaniz) Ctrl+ö ye yani aciklama satirina ekleyebilirsiniz.
# Açıklama Satırları ile Çalışmak ve Genel Font Özellikleri
- text-transform: uppercase;butun harfleri buyuk yaz (h1) icin
```
h2 {
    text-transform: uppercase; 
}
```

- Arka planin rengini deistir.
```
body {
    background-color: rgb(199, 199, 199);
}
```
## miras sistemi
NOT:  mesela bir < ul> etiketinin rengini deistirirsek ve < ul > etiketinin icinde < li > etiketleri varsa bu < li > etiketleride etkilenip renkleri degisecektir.
--
----

## Genel Font Özellikleri

    fontu indirmeden kullanmak icin:
    index dosyasindaki < head > kısmını icine < link rel= href= > kısmına ekleyip,kısa linki css dosyamıza veya < body >kısmına < font-family > olarak ekliyoruz.
## CSS ile Class ve ID Kullanımı
+ class
    class: kullanmadan once css dosyanizi html dosyaniza tanimlayin ardindan css dosyaniza class etiketini tanimlamak icin basina "." koyun
    -
````
.red {
color: red;
}
````
".red" yazan kisma istediginizi yazin ardinda bu satirin icine slass&sifif,ozellik eklemek icin "{}" taginin icine ozellik lekleyin ornek:color,text-size,text-family.gibi...   
fazladan class eklemek icin sadece tirnak isaretinin icinde bosluk birakmaniz yeterli.

        h1.text-color
Dersek bu < h1 > etiketini direkt class li bir sekilde olusturmus olduk."."class anlamına gelir nokta koydugumuz icin class li olusturmus olduk
--
+ ID tek bir kod satirinin icinde olmali
 
  ------
## SS Seçiciler ile Çalışmak, İstediğimiz HTML Etiket Yapısına Özelliklik Ekleyebilmek
````
.class1. class2{
    color:red
    font-size:24px
}
`````
ornk:ul>li actik ilk class imizi ul satirina sonrasinda li komutunun icinde her hangi bir metni veya kelimeyi span icine aldigimiz zaman span komutuna ikinci class imizi girdigimiz zaman calisir

----
## first-chiled&last-chiled

- first chiled:  
 biz bu kodu "ul>li*5" dersek olusan ilk "li" satirinda degisiklik yapar
- last chiled
 
last child de tam tersi en son listeye etki edecektir.
