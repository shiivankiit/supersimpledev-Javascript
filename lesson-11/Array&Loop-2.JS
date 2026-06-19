//Array and object are refrences.

const array1=[1,2,3]
const array2=array1.slice();//slice creates new copy of the array.
array2.push(4);
console.log(array1);
console.log(array2);

// array1 = original notebook.
//array2=photocopy of notebook
//changing the photocopy does not change the original.

/*Important concept:Refrence vs Copy.
Array are refrence types in JavaScript.
if you do:const array2=array1;
then both variables point to the same array:
array1 ───┐
          ↓
      [1,2,3]
          ↑
array2 ───┘
With slice you create seprate array.
or with spread operator.
*/

const array3=[1,2,3];
const firstvalue=array3[0];
const secondvalue=array4[0];
//or
const [firstvalue,secondvalue]=[4,5,6];

//break and continue
//break will exit from the loop while
//continue skips the iteration.

function doubleArray(nums){
    const numsDobuble=[]
    for(let i=0;i<nums.length;i++){
        const num=nums[i];
        if(num === 0){
            return numsDobuble;
        }
        numsDobuble.push(num*2);
    }
    return numsDobuble;
}
console.log(doubleArray([1,2,3]));
console.log(doubleArray([4,5,6]));

