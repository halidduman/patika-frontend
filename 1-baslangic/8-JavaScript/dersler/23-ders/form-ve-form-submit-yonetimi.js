// Form ve Form Submit Yönetimi

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener("submit", formSubmit)

function formSubmit(event) {
event.preventDefault() //default islemi engelledk...
    console.log("islem gerceklesti")
}