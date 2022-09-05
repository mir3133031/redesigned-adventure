let img = document.querySelector(`.boxletimg`)
let nameText = document.querySelector(`.tiplaptop`)
let price = document.querySelector(`.paylaptop`)
let buttonTwo = document.querySelector(`.bttruewite`)
let buttonOne = document.querySelector(`.btfalsespasegrat`)
let buttonOneText = document.querySelector(`.btfalsespasegrattext`)
let buttonTwoText = document.querySelector(`.bttruewitetext`)


function getImgOne() {
    if (img.classList.contains(`boxletimgSilver`)) {
        img.classList.add(`boxletimg`)
        img.classList.remove(`boxletimgSilver`)
        nameText.innerHTML = `Space Grey`
    }

    if (buttonOne.style.backgroundColor) {
        buttonOne.style.backgroundColor = null;
    } else {
        buttonOne.style.backgroundColor = "#0071E3";
    }
    
}
function getImgTwo() {
    if (img.classList.contains(`boxletimg`)) {
        nameText.innerHTML = `White`
        img.classList.add(`boxletimgSilver`)
        img.classList.remove(`boxletimg`)
    }

    if (buttonTwo.style.backgroundColor) {
        buttonTwo.style.backgroundColor = null;
    } else {
        buttonTwo.style.backgroundColor = "#0071E3";
       
    }


}




function getOne() {
    price.innerHTML = `$1,999`
}
function gettwo() {
    price.innerHTML = `$2,199`
}
function getThree() {
    price.innerHTML = `$2,599`
}
function getFour() {
    price.innerHTML = `$3,199`
}

// priceInLetThree = 1.999
// function getThree() {
//     price = 1.999
//     priceInLetThree = priceInLetThree + 0.600
//     price.innerHTML = priceInLetThree
// }
// priceInLetFour = 1.999
// function getFour() {
//     price = 1.999
//     priceInLetFour = priceInLetFour + 1.200
//     price.innerHTML = priceInLetFour
// }

