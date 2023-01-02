console.log("connected");


document.getElementById("clearButton").onclick = function(){
    document.getElementById("calcScreen").innerHTML = " ";
}
document.getElementById("negativeSign").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML="-" + temp;
}
document.getElementById("rightPar").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +")" ;
}
document.getElementById("leftPar").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"(" ;
}





document.getElementById("sevenButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"7";
}
document.getElementById("eightButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"8" ;
}
document.getElementById("nineButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"9" ;
}
document.getElementById("fourButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"4" ;
}
document.getElementById("fiveButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"5" ;
}
document.getElementById("sixButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"6" ;
}
document.getElementById("oneButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"1" ;
}
document.getElementById("twoButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"2" ;
}
document.getElementById("threeButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"3" ;
}
document.getElementById("zeroButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"0" ;
}



document.getElementById("divideButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"/";
}
document.getElementById("multiplyButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"*";
}
document.getElementById("minusButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"-";
}
document.getElementById("plusButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;
    document.getElementById("calcScreen").innerHTML=temp +"+";
}


function sum(a,b){
    return a+b;
}
function divide(a,b){
    return a/b;
}
function minus(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}



document.getElementById("equalButton").onclick = function(){
    let temp = document.getElementById("calcScreen").innerHTML;

    
}