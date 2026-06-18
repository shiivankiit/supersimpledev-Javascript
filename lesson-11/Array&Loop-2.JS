//Array and object are refrences.

const array1=[1,2,3]
const array2=array1.slice();//slice creates new copy of the array.
array2.push(4);
console.log(array1);
console.log(array2);

// array1 = original notebook.
//array2=photocopy of notebook
//changing the photocopy does not change the original.
