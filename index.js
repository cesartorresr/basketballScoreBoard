let home = document.getElementById('marcador')
let result = 0

function marcadorHome() {
    let result = 0
    home.innerText = result;
}

function uno () {
    result += 1;
    home.innerText = result;
}

function dos () {
    result += 2;
    home.innerText = result;
}

function tres () {
    result += 3;
    home.innerText = result;
}

let guest = document.getElementById('marcadorGuest')
let resultDos = 0 

function guestUno() {
    resultDos += 1;
    guest.innerText = resultDos;
    
}

function guestDos() {
    resultDos += 2;
    guest.innerText = resultDos;
    
}

function guestTres() {
    resultDos += 3;
    guest.innerText = resultDos;
    
}