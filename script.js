const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("result");
const checkInput = document.querySelector(".check-input");

checkBtn.addEventListener('click', () => {
    
    let string = inputText.value;

    if (inputText.value) {
        
        checkInput.textContent = `${string}`;
        
        string = getString(string);
        
        if (checkerPlindrome(string)){
            checkInput.innerHTML = `${string} <br> is a palindrome`;
        } else {
            checkInput.innerHTML = `${string} <br> is not a palindrome`;
        }
        
        result.style.visibility = "visible"; 
         
    } else {
        alert('Please input a value');
    }
});

clearBtn.addEventListener('click', ()=> {
    inputText.value = '';
    result.style.visibility = "hidden";
    checkInput.innerHTML = '';
});

function getString(str){
    let regexp = str.match(/[a-z0-9]/gi);
    return regexp.join('').toLowerCase();
};

const checkerPlindrome = function (str) {
    
    let index = Math.floor(str.length / 2);
    let ferstPart = str.slice(0, index);
    let secondPart = str.slice(-index).split('').reverse().join(''); 
    
    if (str.length === 1|| ferstPart === secondPart) {
        return true; 
    } else {
        return false;
    } 
};