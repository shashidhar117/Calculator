let num1 = 7;
let num2 = 5;

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumText = document.getElementById("sum-el")

function add()
{
    let result = num1 + num2
    sumText.textContent = "Sum: " + result
}

function sub()
{   
    let result = num1 - num2
    sumText.textContent = "Difference: " + result
}

function mul()
{
    let result = num1*num2
    sumText.textContent = "Product: " + result 
}

function div()
{
    let result = num1/num2
    sumText.textContent = "Quotient: " + result 
}
