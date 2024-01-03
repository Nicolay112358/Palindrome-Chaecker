const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("result");
const checkInput = document.querySelector(".check-input");
const checkInputSecontStr = document.querySelector("#check-input-secont-str");

checkBtn.addEventListener('click', () => {
    let string = inputText.value;
    if (inputText.value) {
        checkInput.textContent = `"${string}"`;
        result.style.visibility = "visible"; 
        string = getString(string);
        console.log(checkerPlindrome(string)); 
    } else {
        alert('Please input a value');
    }
});

clearBtn.addEventListener('click', ()=> {
    inputText.value = '';
    result.style.visibility = "hidden";
    checkInput.textContent = '';
    checkInputSecontStr.textContent = '';
});

function getString(str){
    let regexp = str.match(/[a-z0-9]/gi);
    return regexp.join('').toLowerCase();
};

const checkerPlindrome = function (str) {
    let index = Math.floor(str.length / 2);
    let ferstPart = str.slice(0, index);
    let secondPart = str.slice(-index).split('').reverse().join(''); 
    console.log(ferstPart, secondPart);
    if (ferstPart === secondPart) {
        return true; 
    } else {
        return false;
    } 
};