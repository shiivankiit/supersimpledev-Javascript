let product1={
    name:'basketball',
    price:'2000'
}
let product2={
    name:'basketball',
    price:'3000'
}

function isSameProduct(){
    if((product1.name && product1.price) === (product2.name && product2.price)){
        return true;
    } else{
        return false;
    }
}
console.log(isSameProduct());

//Converting to lower-case
let greet='GOOD-MORNING';
console.log(greet.toLowerCase());

