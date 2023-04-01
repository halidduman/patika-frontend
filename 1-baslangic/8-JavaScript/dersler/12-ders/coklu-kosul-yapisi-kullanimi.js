//////////////////////// coklu-kosul-yapisi-kullanimi


let userName = prompt("kullanici adiniz:")
let age = prompt("yasiniz:")

let info = document.querySelector("#info")


if (userName && age >= 18) {
    info.innerHTML = "ehliyet alabilir"
}else if (!userName) {
    info.innerHTML = "kullaniciadiniz yok"
} else if (!(age >= 18)) {
    info.innerHTML = "yas bilginiz yok veya 18 yasindan kucuksunuz!"
}