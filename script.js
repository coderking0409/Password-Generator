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

    if (totalChar.value === 0 && !upperInput.checked) {
        alert("Please select a valid number of characters");
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
