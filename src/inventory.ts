import { Product } from './products'

export interface InventoryItem { 
    product: Product, 
    quanitity:number,  
 } 
 const inventory : InventoryItem[] = [
    {
        // name: "Honda Grom",
        // price: 3000,
        quanitity: 10,
        product: {name: "lights", price: 20}
    },
    {
        // name: "Candle",
        // price: 20,
        quanitity: 15,
        product: {name: 'LED', price: 30.50}
    },
    {
        // name: "Gucci Watch",
        // price: 500,
        quanitity: 20,
        product: {name: 'bike', price: 200}
    },
];
export function calcInventoryValue(products : InventoryItem[]) : number {

    // return products.price[0] * products.quanitity[0] + products.price[1] * products.quanitity[1] + products.price[2] * products.quanitity[2];
    let sum = 0;
    for (const item of products) {
        const price = item.product.price
        const quanitity = item.quanitity
        sum += price * quanitity; 
    }
    return sum;
}

// take the product price times the quantity.
//  Add these together for all the items. For the above data, the total will be 10.00 x 10 + 12.5 x 4 + 1.00 * 20 = 170.
