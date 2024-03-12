const rangeInput = document.getElementById("range")
const rangeInputValue = document.querySelector(".CharLen")

rangeInput.addEventListener("input",function(){
    rangeInputValue.textContent = this.value;
});
