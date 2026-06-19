function removeEgg(foods){
    const result=[];
    let eggremoved=0;
    for(let i=0;i<foods.length;i++){
        if(foods[i]==='egg' && eggremoved<2){
            eggremoved++;
            continue;
        }
        else{
            result.push(foods[i]);
        }
    }
    return result;
}
console.log(removeEgg(['egg','apple','egg','egg','ham']));

//s and t have same format as above 
//in t you just need to change the order of the array and apply same rule on it.