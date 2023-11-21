let tipAmount = document.querySelector(".tip-amount span")
let totalPerPerson = document.querySelector(".total-per-person span")
let billAmount = document.querySelector("#bill-amount")
let numberOfPeople = document.querySelector("#number-of-people")
let calculate = document.querySelector("#calculate")

calculate.addEventListener("click" , ()=>{
    let percentage = document.querySelector("input[name ='tip']:checked").value
    tipAmount.innerText = (parseFloat(billAmount.value) * parseFloat(percentage) /100).toFixed(2)
    totalPerPerson.innerText = ((parseFloat(tipAmount.innerText) + parseFloat(billAmount.value)) / parseInt(numberOfPeople.value)).toFixed(2)

})