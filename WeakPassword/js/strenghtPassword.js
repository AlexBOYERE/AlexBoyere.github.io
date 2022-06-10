var allBars = document.querySelectorAll('div.progress-bar > div');
var currentPercent = document.querySelector('div.percentage > div.digit');

var inputPasswordField = document.querySelector('input.password');
inputPasswordField.addEventListener('keyup', (e)=>{
    detPasswordStrength(inputPasswordField.value);
});

function detPasswordStrength(password){
    allBars.forEach(bar => {
        bar.style.background = 'none';
        bar.style.border = '1px solid lightgrey';
    });
    var pwdPercent = getStrengthPercent(password);
    if(pwdPercent == 100){
        allBars.forEach(bar => {
            bar.style.background = 'green';
            bar.style.border = '1px solid green';
        });
    } else if(pwdPercent >= 75) {
        for(var i = 0; i < 3; i++){
            allBars[i].style.background = 'gold';
            allBars[i].style.border = '1px solid gold';
        }
    } else if(pwdPercent >= 50) {
        for(var i = 0; i < 2; i++){
            allBars[i].style.background = 'gold';
            allBars[i].style.border = '1px solid gold';
        }
    } else if(pwdPercent >= 25) {
        allBars[0].style.background = 'red';
        allBars[0].style.border = 'red';
    }

    displayPercent(pwdPercent);
}

function displayPercent(pwdPercent){
    var count = currentPercent.textContent;
    var total = pwdPercent;

    document.querySelector('div.percentage').style = '';

    var x = setInterval(function(){
        if(count > total) currentPercent.innerHTML = --count;
        if(count < total) currentPercent.innerHTML = ++count;
        if(count == total) clearInterval(x);
    }, 5);
};

function getStrengthPercent(inputPassword){
    var percent = 0;
    percent = percent + percentByLength(inputPassword);
    percent = percent + (percentByUppercase(inputPassword));
    percent = percent + (percentByChar(inputPassword));
    percent = percent + (percentByNum(inputPassword));
    percent = charRepitition(percent, inputPassword);
    
    return percent;
}

function percentByLength(inputPassword){
    if(inputPassword.length >= 16) return 25;
    else if(inputPassword.length >= 8) return 15;
    else if(inputPassword.length > 0) return 5;
    else return 0;
}

function percentByUppercase(inputPassword){
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var noOfUpperCase = [];

    inputPassword.split('').forEach(char => {
        if(letters.includes(char)) noOfUpperCase.push(char);
    });

    if(inputPassword.length - noOfUpperCase.length >= inputPassword.length) return 0;
    else if(inputPassword.length - noOfUpperCase.length >= 16) return 25;
    else if(inputPassword.length - noOfUpperCase.length >= 8) return 15;
    else if(inputPassword.length - noOfUpperCase.length > 0) return 5;
    else return 0;
}

function percentByChar(inputPassword){
    var allChar = '`,.~{}()[]/+_=-!@#$%^&*|\\\'":?';
    var noOfChar = [];

    inputPassword.split('').forEach(char => {
        if(allChar.includes(char)) noOfChar.push(char);
    });

    if(inputPassword.length - noOfChar.length >= inputPassword.length) return 0;
    else if(inputPassword.length - noOfChar.length >= 16) return 25;
    else if(inputPassword.length - noOfChar.length >= 8) return 15;
    else if(inputPassword.length - noOfChar.length > 0) return 5;
    else return 0;
}

function percentByNum(inputPassword){
    var allChar = '1234567890';
    var noOfChar = [];

    inputPassword.split('').forEach(char => {
        if(allChar.includes(char)) noOfChar.push(char);
    });

    if(inputPassword.length - noOfChar.length >= inputPassword.length) return 0;
    else if(inputPassword.length - noOfChar.length >= 16) return 25;
    else if(inputPassword.length - noOfChar.length >= 8) return 15;
    else if(inputPassword.length - noOfChar.length > 0) return 5;
    else return 0;
}


const showPasswordBtn = document.querySelector('div.show-pass');
showPasswordBtn.addEventListener('click', (event)=>{
    if(inputPasswordField.getAttribute('type') == "password") {
        inputPasswordField.setAttribute('type','text');
        showPasswordBtn.children[0].innerHTML = 'visibility_off';
    } else {
        inputPasswordField.setAttribute('type','password');    
        showPasswordBtn.children[0].innerHTML = 'visibility';
    } 
});

const generatePasswordBtn = document.querySelector('div.gen-pass');
generatePasswordBtn.addEventListener('click', (event)=>{

    var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCaseLetters = upperCaseLetters.toLowerCase();
    var numbers = '1234567890';
    var chars = '`,.~{}()[]/+_=-!@#$%^&*|\\\'":?';
    var passwordLength = 16;
    
    var newPassword = [];

    // 16 characters all together 
    // 12 letters: 7 uc, 5lc
    // 2 numbers
    // 1 chars

    for(var i = 0; i < 3; i++){
        var letterPosition = Math.floor(Math.random() * upperCaseLetters.length);
           
        if(newPassword[newPassword.length - 1] != upperCaseLetters[letterPosition] && newPassword[newPassword.length - 2] != upperCaseLetters[letterPosition]){
            newPassword.push(upperCaseLetters[letterPosition]);
            console.log(newPassword.length - 1 + ' = ' + upperCaseLetters[letterPosition]);
        } else --i
    }

    for(var i = 0; i < 13; i++){
        var letterPosition = Math.floor(Math.random() * lowerCaseLetters.length);

        if(newPassword[newPassword.length - 1].toLowerCase() != lowerCaseLetters[letterPosition] && newPassword[newPassword.length - 2].toLowerCase() != lowerCaseLetters[letterPosition]){
            newPassword.push(lowerCaseLetters[letterPosition]);
            console.log(newPassword.length - 1 + ' = ' + lowerCaseLetters[letterPosition]);
        } else --i;
    }

    for(var i = 0; i < 2; i++){
        var letterPosition = Math.floor(Math.random() * numbers.length);

        if(newPassword[newPassword.length - 1] != numbers[letterPosition]
        && parseInt(newPassword[newPassword.length - 1]) + 1  != numbers[letterPosition]
        && parseInt(newPassword[newPassword.length - 1]) - 1  != numbers[letterPosition]
        && parseInt(newPassword[newPassword.length - 1]) + 2  != numbers[letterPosition]
        && parseInt(newPassword[newPassword.length - 1]) - 2  != numbers[letterPosition]){
            newPassword.push(numbers[letterPosition]);
            console.log(newPassword.length - 1 + ' = ' + numbers[letterPosition]);
        } else --i;
    }

    var letterPosition = Math.floor(Math.random() * chars.length);
    newPassword.push(chars[letterPosition]);

    // randomly sort the generated password 
    // ISSUE: it scatters the calculated arrangement of the elements 

    // for (var i = 0; i < newPassword.length; i++) {
    //     var randomIndex = Math.floor(Math.random() * newPassword.length);
    //     var hold = newPassword[randomIndex];
    //     newPassword[randomIndex] = newPassword[i];
    //     newPassword[i] = hold;
    // }

    inputPasswordField.value = newPassword.join('');
    detPasswordStrength(newPassword.join(''));
});

function charRepitition(percent, inputPassword){
    var allChar = inputPassword.split('');
    console.log(allChar);
    var reps = [];

    for (var currentPosition = 0; currentPosition < allChar.length; currentPosition++) {
        for(var inc = 1; inc <= 2; inc++){
            var nextPosition = currentPosition + inc;
            if(allChar[currentPosition] == allChar[nextPosition] || allChar[nextPosition] == (parseInt(allChar[currentPosition]) + 1)){
                if(!reps.includes(allChar[currentPosition])) reps.push(allChar[currentPosition]); 
                else break;
            }
        }
    }

    console.log(reps);
    
    if(reps.length >= 3) return percent - 25;
    if(reps.length == 2) return percent - 15;
    if(reps.length == 1) return percent - 5;
    return percent;
}



