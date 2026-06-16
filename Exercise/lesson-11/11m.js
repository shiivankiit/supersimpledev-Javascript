//Update the 11l code with null 

function minMax(nums){
    const result={
        min:null,
        max:null
    }
    for(let i=0;i<nums.length;i++){
        const value=nums[i];

        if(value<result.min || result.min === null){
            result.min=value;
        }
        if(value>result.max || result.max === null){
            result.max=value;
        }
    }
    return result;
}
 console.log(minMax([]));
 console.log(minMax([3]));
