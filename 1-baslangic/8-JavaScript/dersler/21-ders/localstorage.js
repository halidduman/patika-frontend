///////////////////////////////////// LocalStorage içerisine Farklı Türde Veriler Eklemek

let user = {userName:"halid DUMAN", isActive : true}
console.log(user)
localStorage.setItem("userInfo", JSON.stringify(user))

let userInfo = localStorage.getItem("userInfo") //bilgiyi al
userInfo = JSON.parse(userInfo)
console.log(userInfo)