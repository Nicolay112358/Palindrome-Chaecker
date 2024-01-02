const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("result");
const checkInput = document.querySelector(".check-input");
const checkInputSecontStr = document.querySelector("#check-input-secont-str");

checkBtn.addEventListener('click', () => {
    let string = inputText.value;
    checkInput.textContent = `"${string}"`;
    result.style.visibility = "visible"; 
    console.log(getString(string));
});

clearBtn.addEventListener('click', ()=> {
    inputText.value = '';
    result.style.visibility = "hidden";
    checkInput.textContent = '';
    checkInputSecontStr.textContent = '';
});

function getString(str){
    git let regexp = str.match(/[a-z0-9]/gi);
    return regexp.join('').toLowerCase();
}