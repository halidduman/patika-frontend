// *******************************************// Boolean-Veri-Turu-Ile-Calısmak *************************************

// 0 ve 1'i anlamak

let isActive = false //0
isActive = true //1
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") // true diyor

Boolean("0") // true diyor

Boolean("") // false diyor


userName = "user"
console.log("user name varmı",Boolean(userName))

Boolean(0)
// false
Boolean(-0)
// false
Boolean (-0.1)
// true
Boolean(0  === 0)
// true

// 0, -0, null,False,NaN,undefined,("")