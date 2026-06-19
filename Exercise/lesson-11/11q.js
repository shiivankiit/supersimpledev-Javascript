function findIndex(array,word){
    for(let i=0;i<array.length;i++){
        if(word===array[i]){
            return i;
        }
    }
    return -1;
}
console.log(findIndex(['green','red','blue','red'],'red'));
console.log(findIndex(['green','red','blue','red'],'yellow'));



