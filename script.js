const rangeInput = document.getElementById("range")
const rangeInputValue = document.querySelector(".CharLen")

rangeInput.addEventListener("input",function(){
    rangeInputValue.textContent = this.value;
    
});

const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const specialSet = "~!@#$%^&*()_+"

const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

//selectors
const passwordBox = document.getElementById("passwordbox")
const totalChar = document.getElementById("range")
const upperInput = document.getElementById("my1checkbox")
const lowerInput = document.getElementById("my2checkbox")
const numberInput = document.getElementById("my3checkbox")
const specialInput = document.getElementById("my4checkbox")

const generateButton = document.getElementById("btn")


 

const generatePassword = (password = "") => {
    if (upperInput.checked){
        password += getRandomData(uppercaseSet)
    }
    if (lowerInput.checked){
        password += getRandomData(lowercaseSet)
    }
    if(numberInput.checked){
        password += getRandomData(numberSet)
    }
    if(specialInput.checked){
        password += getRandomData(specialSet)
    }

    if(password.length < totalChar.value){
        return generatePassword(password)
    }

    return trimPass(password,totalChar.value)
}



generateButton.addEventListener("click",function(){
    const newPassword = generatePassword();
    passwordBox.textContent = newPassword;

    if (totalChar.value === 0 || (!upperInput.checked && !lowerInput.checked && !numberInput.checked && !specialInput.checked)) {
        alert("Please select a valid number of characters");
    }else{
        strengthBox();
    }
});

function trimPass(str,num){
    if (str.length > num) {
        let subStr = str.substring(0,num);
        return subStr
    }else{
        return str
    }
}

//selectors
const strength = document.querySelector(".strength");
const bar1 = document.getElementById("one");
const bar2 = document.getElementById("two");
const bar3 = document.getElementById("three");
const bar4 = document.getElementById("four");

const checkboxesChecked = () => {
    const arr = [];
    if (upperInput.checked) {
        arr.push("1");
    }
    if (lowerInput.checked) {
        arr.push("2");
    }
    if (numberInput.checked) {
        arr.push("3");
    }
    if (specialInput.checked) {
        arr.push("4");
    }

    return arr.length;
};

const strengthBox = () => {
    if (totalChar.value < 8 || checkboxesChecked() <= 2) {
        strength.textContent = "WEAK";
        bar1.style.backgroundColor = "darkgoldenrod";
        bar2.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        bar3.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
        bar4.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
    }
    if (totalChar.value >= 8 && checkboxesChecked() === 3) {
        strength.textContent = "MEDIUM";
        bar1.style.backgroundColor = "darkgoldenrod";
        bar2.style.backgroundColor = "darkgoldenrod";
        bar3.style.backgroundColor = "darkgoldenrod"
        bar4.style.backgroundColor = "rgba(255, 255, 255, 0.5)"

    }
    if (totalChar.value >= 8 && checkboxesChecked() === 4) {
        strength.textContent = "STRONG";
        bar1.style.backgroundColor = "darkgoldenrod";
        bar2.style.backgroundColor = "darkgoldenrod";
        bar3.style.backgroundColor = "darkgoldenrod";
        bar4.style.backgroundColor = "darkgoldenrod";
    }
};

rangeInput.addEventListener("input",()=>{
    rangeInput.style.backgroundSize = (rangeInput.value/50)*100+"% 100%";
})

const copybtn = document.getElementById("copy")

function copyText(){
    let password = document.getElementById("passwordbox")

    navigator.clipboard.writeText(password.textContent).then(function (){
        alert(`Your password ${password.textContent} is copied to clipboard`)
    });

};

copybtn.addEventListener("click",copyText);
















// let copyBtn = document.getElementById("copy");

// function copy(){

//     let password = document.getElementById("passwordbox")

//     navigator.clipboard.writeText(password.textContent).then(function(){

//         alert(`Password copied to clipboard: ${password.textContent}`);

//     });

// }

// copyBtn.addEventListener("click",copy);
