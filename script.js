//Target DOM elements
const inpUser = document.querySelector('#utilisateur');
const inpEmail = document.querySelector('#email');
const inpPassword = document.querySelector('#password');
const inpConfirm = document.querySelector('.form-groupe:nth-child(4) input');
const allImg = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLigne = document.querySelectorAll('.ligne div');

//check username length
inpUser.addEventListener('input', (e) => {
    if(e.target.value.length >= 3) {
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/check.svg";
        allSpan[0].style.display = "none";
    }   
    else {
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/error.svg";
        allSpan[0].style.display = "inline";
    }
})

//check email
inpEmail.addEventListener('input', (e) => {
    const regexEmail = /\S+@\S+\.\S+/;
    //search methods will search for regexEmail in the input value and return the position of the match, if it is 0 it is a valid match
    if(e.target.value.search(regexEmail) === 0){

        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/check.svg";
        allSpan[1].style.display = "none";

    //if the position is -1 it means that there is no match, the input value doesn't contain regexEmail
    } else if(e.target.value.search(regexEmail) === -1) {

        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/error.svg";
        allSpan[1].style.display = "inline";

    }
})

//check password, if it contains at least 1 special character, 1 letter, 1 number
let inpValue;
const specialCar = /[^a-zA-Z0-9]/;
const letters = /[a-z]/i;
const numbers = /[0-9]/;

let objValidation = {
    symbole : 0,
    letter : 0,
    number : 0
}

inpPassword.addEventListener('input', (e) => {

    inpValue = e.target.value;

    if(inpValue.search(specialCar) !== -1){
        objValidation.symbole = 1;
    }
    if(inpValue.search(letters) !== -1){
        objValidation.letter = 1;
    }
    if(inpValue.search(numbers) !== -1){
        objValidation.number = 1;
    }

    //the inputType property returns the type of change that was done by the event
    if(e.inputType = 'deleteContentBackward'){
        if(inpValue.search(specialCar) === -1){
            objValidation.symbole = 0;
        }
        if(inpValue.search(letters) === -1){
            objValidation.letter = 0;
        }
        if(inpValue.search(numbers) === -1){
            objValidation.number = 0;
        }
    } 

    let testAll = 0;
    for(const property in objValidation){
        if(objValidation[property] > 0){
            testAll++;
        }
    }
    if(testAll < 3){
        allSpan[2].style.display = "inline";
        allImg[2].style.display = "inline";
        allImg[2].src = "ressources/error.svg";
    } else {
        allSpan[2].style.display = "none";
        allImg[2].src = "ressources/check.svg";
    }


    // test if password strong and indicate to user
    if(inpValue.length <= 6 && inpValue.length > 0){
        allLigne[0].style.display = 'block';
        allLigne[1].style.display = 'none';
        allLigne[2].style.display = 'none';
    }
    else if (inpValue.length > 6 && inpValue.length <= 9) {
        allLigne[0].style.display = 'block';
        allLigne[1].style.display = 'block';
        allLigne[2].style.display = 'none';
    }
    else if (inpValue.length > 9) {
        allLigne[0].style.display = 'block';
        allLigne[1].style.display = 'block';
        allLigne[2].style.display = 'block';
    }
    else if (inpValue.length === 0) {
        allLigne[0].style.display = 'none';
        allLigne[1].style.display = 'none';
        allLigne[2].style.display = 'none';
    }


})

