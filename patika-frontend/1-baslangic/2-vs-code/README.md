# eklentiler

     Live Server:biz javascrip,scc,html vs çalışırken bir yapı oluşturduktan sonra "go live" dedikten sonra sayfayı otomatik yeniler.

not:eklentiler ne işe yaradığından emin değilseniz, emin olduktan sonra kullanınız.     

# paneller yönetimi

    kısa yollar:

    ctrl+b: panel aç-kapa
    ctrl+p: menü
    ctrl+tab: pencereler arasında geçiş yapar
    ctrl+shıft+p: ayarlar

Pencereler bölümündeki çarpı işareti yuvarlak ise kaydedilmediğini gösterir.

# View menüsü

    show minimap: minimap'i aç-kapa.

    show breadcrumps: dosyamızın nerede olduğunu gösterir.

    editor layout: ekran parçalam işlemi.

    render whitespace:küçük noktayı gösterir.

    terminal: terminal aç-kapa (ctrl+")

# Terminal Kullanımı

"." şuanki bulunduğumuz dizinin ismi.

".."şuan bulunduğumuz dizinin bir üstünde bulanan dizin.

"Ctrl+l"Terminali temizler

"Clera"Terminali temizler

    View/Terminal:devam eden terminal penceresini açma

```sh
dir # içerisindeki klasör ve dosyaları listeler.

mkdir #yeni klasör açma komutu.

pwd # hangi dizinde olduğumuzu gösterir.

cd folder # klasöre girmek için yazılır.

cs #bilgisayada bir dosyaya çift tıklamak gibi denebilir.

cd .\folder1\folder1.1\ #  "/" dosyanın içine girmek için sonuna eklenir.



ls #listenin kısaltması demek.terminale yazdığınızda dosyalarının listesini gösterir.

code .\README.md # READNE dosyasını code ile açar.

code folder # folder klasörünü code ile açar.

code . # bulunduğu klasörünü code ile açar.

```

# MultiCursor (çoklu imleç) & Klavye ile Çalışmak / Klavye Kısayol Tuşları


- "Alt" tuşu ile basılı tutup seçilen yerlere yazarken aynı anda   yazar.
- ("home") tuşu ile satırın en başına gidersin.
- ("end") tuşu ile satırın en sonuna gelirsin.
- ("PgUp") tuşu ile sayfanın en üstüne çıkarsın.
- ("PgDn") tuşu ile sayfanın en altına inersin.
- ("Ctrl" + sağ veya sol)basarak kelime kelime ilerlemeye yarar.
- ("Ctrl+Shıft+yön tuşu") Satırı seçmeye yarar
- ("Esc") MultiCursor dan çıkma.
- ("Alt+Shıft") tuşu ile tüm satırları MultiCursor yapabilirsiniz
- ("Alt+yukarı veya aşşağı") tuşları ile seçili satırı taşıyabilirsiniz.
- ("Alt+Shıft") ile seçili satırı aşşağıyo kopyalar.
- ("Ctrl+D") Bir kelimeyi seçtikten sonra benzer kelimeleri    işaretler.
- ("Ctrl+X") kesme işlemi.
- ("Ctrl+Space") kod önerilerini gösterir.
- ("Crtl+Enter") Bulunduğun satıra müdahale etmden alt satıra geçme.

bu işlem MultiCursor (çoklu imleç içi de geçerlidir) için de geçerlidir.


# Snippets Kullanımı

İlgili video:VS CODE Snippets Kullanımı #10 bölüm. 

Nasıl yapılı? 


("Ctrl+Shıft+P") ile ayarlardan >snippets: Configure User Snippets'i seçin

örnek kod 1:

```
{
	"snippetName": {
		"prefix": "k1",
		"body": "<h1>kodluyoruz</h1>",
		"description": "h1 kodluyoruz yazısı"
	}
}
```
- prefix:kısayol atayacağınız kelimeyi giriniz.
- body: kısayol girdiğiniz kelimeyi seçmeniz durumunda yazılacak dizin.
- description: kısayol açıklaması.

örnek kod 2:

````
{
	"snippetName": {
		"prefix": "k1",
		"body": "<h1>${1:kodluyoruz} <span>${2:.org}</span></h1>",
		"description": "h1 kodluyoruz yazısı"
	}
}
````

# Ayarların Kişiselleştirilmesi

Otomatik kaydetme ayarı

- Settings>Commonly>AutoSave

Yazı boyutu

- Settings>Commonly>FontSize

wrap:kod satırındaki tüm metinleri aynı anda görmenizi sağlar.

- wordwrap

        monospace fontlar her harfi eşit aralıkta olan fontlardır.

not:font kullanırken monospace olmasına dikkat edin.

# Diğer Kod Editörleri

- Sublime Text
- Atom
- BcracKets
- IntelliJ IDEA







