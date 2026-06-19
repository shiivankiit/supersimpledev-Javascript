function searchstring(array){
    for(let i=0;i<=array.length;i++){
        if(array[i]==='search'){
            return i;
            break;
        }
    }
    return -1;
}
console.log(searchstring(['hello','world','search','good','search']));



//Use this template:

// function problem(array){

//     // check every element
//     for(let i=0; i<array.length; i++){

//         if(condition){
//             return answer;
//         }

//     }

//     // if loop finishes, item was not found
//     return something;
// }