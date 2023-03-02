# Git-SCM en çok kullanılan komutlar

```sh
git init
git add
git commit 
git status
git push
git pull
git clone
git checkout
git rm
```
- git commit aktif etmek için

```sh
git config --global user.mail "halidduman60@gmail.com"
git config --global user.name "halid"

```
Örnek kod:

```sh


ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git init
Reinitialized existing Git repository in C:/Users/ultra/OneDrive/Masaüstü/git-example/.git/

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html
        main.scss
        style.css

nothing added to commit but untracked files present (use "git add" to track)

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git add index.html

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        main.scss
        style.css


ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$   git rn-- cached index.html
git: 'rn--' is not a git command. See 'git --help'.

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        main.scss
        style.css


ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git rm--cached index.html
git: 'rm--cached' is not a git command. See 'git --help'.

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        main.scss
        style.css


ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git rm --cached index.html
rm 'index.html'

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html
        main.scss
        style.css

nothing added to commit but untracked files present (use "git add" to track)

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git add index.html

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git commit
Aborting commit due to empty commit message.

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git commit -m "First Commit"
[master (root-commit) b5a8523] First Commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 index.html

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        main.scss
        style.css

no changes added to commit (use "git add" and/or "git commit -a")

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git diff
diff --git a/index.html b/index.html
index e69de29..1b68d0a 100644
--- a/index.html
+++ b/index.html
@@ -0,0 +1 @@
+deneme
\ No newline at end of file

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git commit -m "index dosyası değiştirildi"
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        main.scss
        style.css

no changes added to commit (use "git add" and/or "git commit -a")

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git add css/style.css
fatal: pathspec 'css/style.css' did not match any files

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        main.scss
        style.css

no changes added to commit (use "git add" and/or "git commit -a")

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git add scss/main.scss
bash: $'\302\232git': command not found

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ add status
bash: add: command not found

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ add status
bash: add: command not found

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$  git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        scss/
        style.css

no changes added to commit (use "git add" and/or "git commit -a")

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git diff
diff --git a/index.html b/index.html
index e69de29..1b68d0a 100644
--- a/index.html
+++ b/index.html
@@ -0,0 +1 @@
+deneme
\ No newline at end of file

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git diff index.html

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        scss/
        style.css

nothing added to commit but untracked files present (use "git add" to track)

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git diff

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ git diff index.html

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$ ^C

ultra@monster MINGW64 ~/OneDrive/Masaüstü/git-example (master)
$
```

# Başlıca bilmemiz gereken bazı terimler;

- untracked (izlenmeyen): GIT tarafından henüz takip edilmeyen, yani yeni oluşturulmuş dosyaları ifade eder.

- unstaged (hazırlanmamış): Güncellenmiş ancak commit’lenmek için hazırlanmamış dosyaları ifade

- staged (hazırlanmış): Commit’lenmeye hazır olan dosyaları ifade eder.

- deleted (silinmiş): Projeden silinmiş ama GIT üzerinden kaldırılmamış dosyaları ifade eder.

- git init:

    Henüz versiyon kontrolü altında olmayan bir projenin dizininde, boş bir git deposu oluşturmak için kullanılır.
- git config:

    GIT’in bir çok konfigürasyon ve ayarı vardır, bunlardan ikisi user.name ve user.email olanıdır. Bu ayarları yapılandırmak için aşağıdaki komutları kullanırız. GIT'i ilk kurduğumuzda genellikle aldığımız ilk hata bu configurasyon ayarlarını yapmadığımız için gelir. Burada yazdığınız isim ve email ileride GitHub benzeri bir plat forma commit attığınızda da görüneceği için bunu bilerek isimlendirme yapmak yararlı olur. Ayrıca görüldüğü gibi bu ayarlar --globalyani sistem genelinde geçerli ayarlardır. Proje bazlı bu ayarları değiştirebiliriz.

      $ git config --global user.name "Name Surname"
      $ git config --global user.email "test@email.com"

- git add:

    Yeni eklenen veya üzerinde değişiklik yapılan dosyaları staged ortamına göndermek için kullanılır.

- git rm:

    Staged (hazırlanmış) ortamına eklenmiş bir dosyanın takibinin bırakılması yani untracked (izlenmeyen) hale getirilmesi sağlayan komuttur.

- git status:

    Üzerinde çalışılan projenin o anki durumu hakkında bilgi verir. Yapılan değişiklikler, eklenen ve silinen dosyalar gibi bilgiler listelenir.

- git commit:

    Commit, staged (hazırlanmış) ortamına alınan dosyaların Local Repository’e gönderilmesidir. En iyi uygulama yöntemi her kayıt sırasında yapılan değişiklikleri açıklayıcı bir mesaj eklemektir. Ayrıca her commit benzersiz bir kimliğe (unique ID) sahip olur. Bu sayede eski bir commit'e geri dönebilirsiniz ve herhangi bir kayıp yaşama ihtimaliniz kalmaz.
":q": çıkış yap

- git log:

    Projedeki commit geçmişini görüntülememizi sağlar. Bütün commit'ler, id'si, yazarı, tarihi ve mesajı ile beraber listelenir.

- git branch:

    Local veya remote repository üzerinde yeni bir branch (dal) eklemek, silmek veya listelemek için kullanılır.
Projenize yeni bir branch eklemek için; $ git branch <branch_name>

detay:

      Branch oluşturmak kullanıcıya çalıştığı projenin farklı versiyonlarına erişmesini sağlar. Kullanıcı, projesine bir yenilik eklemek istediğinde, yaptığı değişiklik projenin çalışmasını olumsuz etkileyebilir. Bu gibi durumlarda projemizin o anki halini bozmamak için branch kullanabiliriz.


- git checkout:

    B arası veya commit'ler arası geçiş yapmak istediğimizde kullanılır.

      yani başka bir vscode kaydına dosyaları aktarmak için kullanılır.dosyayı commit ettikten sonra terminale "git checkout <master>" komutuyla veya ismini ne koyduysanız yazdıktan sonra seçtiğiniz Branch'e gönderilir.

- git merge:

    Başka bir branch'da olan değişiklikleri, bulunduğumuz branch ile birleştirmek istediğimizde kullanılır.

        eklediğiniz branch'a dosyanızda değişikli yaptığınızda "git merge <dosya>"komutunu girdiğiniz anda 2.branch da dosyanız değişmiş olacak.

- git clone:
    Mevcut bir Remote Repository'de bulunan dosyaların bilgisayarımızda bir kopyasının oluşturulmasını sağlar.
- git push:
    Projemizde aldığımız commit'leri, remote repository'e gönderir.
- git diff:
    Repository üzerinde yapılan değişikliklerden sonra dosyalar arasında oluşan farklılıkları göterir.

      "explorer" .:dosya klasörünü açma

# .gitignore Dosyası Ne İşe Yarar? Nasıl Kullanırız?

- Gitignore ne işe yarar?

      bazı uzantı veya dizindeki dosyaların git'e gönderilmesini ve değişikliklerin takip edilmesini engellemiş oluruz. 

- Branch ne işe yarar?

      Branch oluşturmak kullanıcıya çalıştığı projenin farklı versiyonlarına erişmesini sağlar. Kullanıcı, projesine bir yenilik eklemek istediğinde, yaptığı değişiklik projenin çalışmasını olumsuz etkileyebilir. Bu gibi durumlarda projemizin o anki halini bozmamak için branch kullanabiliriz.

# GitHub'a Projemizin Eklenmesi ve Diğer Repo Hosting Web Platformları

- Owner: Reponun sahibinin seçiyoruz.
 
- Repository name: Oluşturduğumuz reponun adını belirliyoruz.
- Description: Repomuz için bir açıklama girebiliriz.
- Public: Repomuzun tüm herkesin erişimini sağlar.
- Private: Bu seçenek sayesinde repomuzu gizli bir şekilde oluşturabiliriz.
- Add a README file: Repomuza öncesinde README dosyası oluşturmuş oluruz, dilersek daha sonrasında kendimiz ekleyebilir ve güncelleyebiliriz.
- Add .gitignore: Repomuza öncesinde .gitignore dosyası oluşturabilir ve göndermek istemediğimiz dosyaları seçebiliriz, daha sonrasında aynı işlemi yapabilir ve .gitignore dosyamızı güncelleyebiliriz.
-Choose a license: Reponuz için bir lisans seçimi yapabilmenizi sağlar.
# aşamalar
- Gerekli işlemleri tamamladıktan sonra "Create repository" diyerek repomuzu oluşturmuş oluruz.
---- 
     
- Oluşturmuş olduğumuz repomuza bilgisayarımızdan erişebilmek için gerekli işlemleri yapmaya başlayalım.
---
- Bilgisayarımızda oluşturmuş olduğumuz klasörümüze konsol ekranımızdan veya kullandığımız IDE yardımı ile erişim sağladıktan sonra git init komutumuzu çalıştıralım.
 ---
- Klasörümüz hazır, öncelikle README.md dosyamızı oluşturalım ve repomuza ilk push işlemini yapabilmek için adımları tamamlayalım.
---
- Eklemiş olduğumuz README dosyasını repomuza gönderebilmek için git add README.md komutumuzu ile README dosyasının GitHub repomuza göndermek üzere hazırlayalım.
--- 
- Repomuza son yapılan değişikleri göndermeden önce git commit -m "ilk yorum" komutu ile neler yaptığımızı yazalım.
--- 
- Bize belirtilen şekilde git branch -M main komutunu konsol ekranımızda çalıştıralım ve main branch oluşturalım.
---
- Son aşamaya gelmeden önce ise git remote add origin 'repo-link' komutu ile remote bağlantımızı ekleyelim.
--- 
- son aşama olarak git push -u origin main komutu ile repomuza dosyalarımızı gönderelim.Ve ilk push işlemimiz ile birlikte tüm değişikliklerimizi GitHub repomuza göndermiş olduk. GitHub sayfasını yeniden yüklediğimizde böyle bir ekran ile karşılaşmış olacağız.

# Markdown Nedir ? Nasıl Kullanırız ?
Markdown, John Gruber ve Aaron Swartz tarafından geliştirilen ve 2004 yılından bu yana kullanılan metinden HTML'e (text-to-HTML) dönüşüm için kullanılan hafif bir işaretleme dilidir.

örnk:README.md

## Nasıl Kullanırız

* başlık oluşturmak için "#" kullanıp boşluk bırakınardından başlık girin

* küçük başlık için: "##"kullanın 

- listeleme için: "*","-"

- yazı sitili için: *italic* (** italic ** ) **bold** (** bold **) ***bold italic*** (***bold italic ***)  

- link eklemek için:[ açıklama]( link ) "[ ]+( )"
image (göresel) eklemek için başına "!" işareti ekleyin.

örnek :![resim](https://picsum.photos/200/300)
- kod satırı için "```" 
  örnk:
```python
print("hello world")
```

```javascript
console.log("hello world")
```
```javascript
function("hello world")
```







