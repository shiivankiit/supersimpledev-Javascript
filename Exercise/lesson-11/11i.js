function addNum(array,num){
  for(let i=0;i<array.length;i++){
    array[i]+=num;
  }
  return array;
}
console.log(addNum([1,2,3],2));
console.log(addNum([1,2,3],3));
console.log(addNum([-2,-1,0,99],2));


