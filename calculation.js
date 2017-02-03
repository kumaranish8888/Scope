var references = {}

function getreferences(){
    references.firstnumber = document.getElementById("first");
    references.secondnumber = document.getElementById("second");
    references.result = document.getElementById("result");
    references.buttonAdd = document.getElementById("btnAdd");
    references.buttonSub = document.getElementById("btnSub");
    references.buttonMul = document.getElementById("btnMul");
    references.buttonDiv = document.getElementById("btnDiv");
}

function myinit(){
    
    getreferences();
    addition();
    subtraction();
    multiplication();
    division();
    
}

function addition(){
    
    var num1 = references.firstnumber.value;
    var num2 = references.secondnumber.value;
    var myresult = add(num1, num2);
    references.result.value = myresult;
    
}

function subtraction(){
    
    var num1 = references.firstnumber.value;
    var num2 = references.secondnumber.value;
    var myresult = sub(num1, num2);
    references.result.value = myresult;
    
}

function multiplication(){
    
    var num1 = references.firstnumber.value;
    var num2 = references.secondnumber.value;
    var myresult = mul(num1, num2);
    references.result.value = myresult;
    
}

function division(){
    
    var num1 = references.firstnumber.value;
    var num2 = references.secondnumber.value;
    var myresult = div(num1, num2);
    references.result.value = myresult;
    
}

myinit();