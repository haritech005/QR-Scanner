// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example 

let qrImgDiv = document.getElementById('qrImg')
let button = document.getElementById('btn')
let qrTextDiv = document.getElementById('qrText')

function generateQR(){
    qrImgDiv.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrTextDiv.value
}
button.onclick =() =>{
    generateQR()
}