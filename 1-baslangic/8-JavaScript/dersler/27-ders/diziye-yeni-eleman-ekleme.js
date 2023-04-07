//////////// Diziye Yeni Eleman Eklemek, Çıkartmak ve Güncellemek

let items = [10, 25, 30,]
console.log("items - ilk hali : ", items)

// Array: sona oge/eleman eklemek ->push 
items.push(50)
console.log("50 : ", items)
// Array: basa oge eklemek ->unshift 
items.unshift(5)
console.log("5 : ", items)
// Array: sondaki ogeyi cikartmak->pop 
let lastItem = items.pop() //son elemanın lasItems icerisine eklendi 
console.log(lastItem, items)
// Array: bastaki ogeyi cikartmak->shift 
let firtItems = items.shift() //ilk elemanın lasItems icerisine eklendi 
console.log(firtItems, items)

