const product={
   itemName:'basketball',
   price:'2095',
}
product.price=700;
let time=product['delivery-time']='3-days';
console.log(product.itemName);
console.log(product.price);
console.log(time);


//----------------------------------------
const product1={
    name:'basketball',
    price:'2000'
}
const product2={
    name:'basketball-premium',
    price:'3000'
}
function comparePrice(){
    if(product1.price<product2.price){
        return product1.name;
    }else{
        return product2.name;
    }
}
console.log(comparePrice());