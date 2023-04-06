
let domain ="kodluyoruz"
let isActive = false
let items = [10, 25, 30, isActive ,domain]
console.log(items)

let emptyArray = [] //bos list

//Array icerisindeki eleman/oge sayisini ogrenmek

console.log(
items.length

)

document.querySelector("#info").innerHTML = items.length
//array icindeki ilk elemani cagirma
console.log(items[0])
//array ortasindaki elemani cagirma
console.log(items[Math.floor(items.length / 2)])
//array icindeki son elemani cagirma
console.log(items[items.length-1])
//degiskenin icindeki bilginin array olup olmadigini kontrol etme
console.log(typeof(items))//object olarak cikti veriyor

console.log(Array.isArray(items))