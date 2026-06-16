//Create an array of number and modify the last no to the 99.

//11a
let arr=[10,20,30];
console.log(arr.pop());//Removes the last element of the array.
arr.push(99);
console.log(arr);

//11b.
function getLastvalue(array){
    const lastindex=array.length-1;
    return lastindex;
}
console.log(getLastvalue([1,20,22,24,5]));
console.log(getLastvalue(['hi','hello','good']));

//11c.
function arraySwap(array){
    let firstvalue=array[0];
    let lastindex=array.length-1;
    let lastvalue=array[lastindex];
    
    array[0]=lastvalue;
    array[lastindex]=firstvalue;

    //Error in my code
    // firstvalue=lastvalue;
    // lastvalue=firstvalue;

    return array;
}
console.log(arraySwap([1,20,22,24,5]));
console.log(arraySwap(['hi','hello','good']));


// Important lesson from your mistake.
// There are two different things:-

// let firstvalue = array[0];

// This creates a copy of the value.
// It does NOT connect to the array anymore.
// Changing:-
// firstvalue = 5;
// does not change:
// array[0]
// To change the actual array, you must write:
// array[0] = 5;
// Remember:
// A variable holding an array value is separate from the array itself. To modify the array, change its index.

//11d.
for(let i=0;i<=10;i++){
    if(i%2==0){
        console.log(i)
    }
}

//11e.-Loop that countdown from 5 to 0.
for(let i=5;i>=0;i--){
    console.log(i);
}

//11d using while loop.
let i=0;
while(i<=10){
    if(i%2==0){
        console.log(i);
    }
    i++;
}
//11e using while loop.
let j=5;
while(j<=0){
    console.log(j);
    j--;
}

//11g
let arr2=[1,2,3];
let newarr=[];
for(let i=0;i<arr2.length;i++){
    newarr.push(arr2[i]+1);
}
console.log(newarr);

