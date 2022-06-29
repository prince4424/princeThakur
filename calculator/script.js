let firstNumber;
let secondNumber;
let operator;
function operatorValue(op){
     if(!operator){
     firstNumber=document.getElementById('input').value;
     document.getElementById('input').value="";
     operator=op;

}
}
function addValue(get){
     document.getElementById("input").value+=get;
}
function clearV(){
     document.getElementById('input').value="";
}
function getValue(){
    let result;
     secondNumber=document.getElementById('input').value;
     if(operator == '+'){
         result= parseFloat(firstNumber) +parseFloat( secondNumber);
     }
          else if(operator =='-'){
         result= parseFloat(firstNumber )- parseFloat(secondNumber);

     }
     else if(operator =='*'){
         result= parseFloat(firstNumber) * parseFloat(secondNumber);
     }
     else if(operator =='/'){
         result=parseFloat( firstNumber )/parseFloat( secondNumber);
     }
     document.getElementById('input').value=result;
     operator="";
}