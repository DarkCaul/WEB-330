import { product } from "./product";

export class shoppingCart {
    constructor () {
        this.products = [];

    }
    
    add (product){
        this.products.push(product);

    }

    count () {
        return products.length;

    }

    *[Symbol.iterator] () {
        for (let product of this.products) {
            yield products;
        }
    }
    
}