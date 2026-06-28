//When we click on a btn we store no in a variable and remember the no which i clicked,
let firstno='';
let operator='';
let scndno='';

function storevalue(button){
     if(operator === ''){
      firstno+=button.innerHTML;
     }
     else{
      scndno+=button.innerHTML;
     }
     display();  
}
function storeoperator(button){
  operator=button.innerHTML;
  display();
}

function calculation(){
  let result='';
  if(operator === '+'){
     result=Number(firstno)+Number(scndno);
  }
  document.querySelector('.display').innerHTML=firstno + operator + scndno + '=' + result;
  
}

function display(){
  document.querySelector('.display').innerHTML=firstno + operator + scndno;
}
function emptybtn(){
    firstno='';
    scndno='';
    operator='';

     document.querySelector('.display').innerHTML='';
}

