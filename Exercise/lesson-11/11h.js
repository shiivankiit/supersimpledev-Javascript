function addOne(array){
   for(let i=0;i<array.length;i++){
      array[i]=array[i]+1;
   }
   return array;
}
console.log(addOne([1,2,3]));
console.log(addOne([-2,-1,0,99]));

