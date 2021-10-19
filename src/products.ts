export interface Product { 
    name:string, 
    price:number,  
 } 
 const products : Product[] = [
    {
        name: "Honda Grom",
        price: 3000,
    },
    {
        name: "Candle",
        price: 20,
    },
    {
        name: "Gucci Watch",
        price: 500,
    },
];
export function calcAverageProductPrice(products : Product[]) : any {

    var sum = 0;
    for(var i = 0; i < products.length;i++){
        sum += products[i].price;
        // if(!products.length){
        //     return 0;
        // }
    }
    if(!products.length){
        return 0;
    }
    return sum / products.length;
 

}
calcAverageProductPrice(products);