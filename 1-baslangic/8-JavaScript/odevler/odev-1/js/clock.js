// odev 

let firstName = prompt("isminizi giriniz:")
if(firstName){
    document.querySelector("#myName").innerHTML = firstName
    function tarih() {
        let date = new Date().toLocaleString(`tr-TR`)
        document.querySelector("#myClock").innerHTML = date
    }
    
    setInterval(tarih, 1000)  }