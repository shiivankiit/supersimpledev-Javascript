function greeting(){
    console.log('hello');
}
greeting();//calling the function

const num=2;
//function are values
//Anonymous function(a function without a name).
const function1 = function (){
    console.log('hello2');
}
console.log(function1);
console.log(typeof function1);
function1();

const object1 ={
    num:2,
    fun: function greeting(){
        console.log('hello3');
    }
}
object1.fun()//This is called a method when function saved inside an object.

function display(param){
    console.log(param);
}
display(2);
//Passing a function into another function.called callback function.
function run(param){
    param();
}
run(function(){
    console.log('hello4');
})

//setTimeout():allows us to run a function in the future.
//Async-code.
setTimeout(function(){
    console.log('timeout');
},3000);
console.log('nextLine');

setInterval(function(){
    console.log('interval');
},3000);

console.log('next line 2');
