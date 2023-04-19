export class product {
    constructor (name, price)
    {
        this.name = name;
        this.price = price;
        this.id = math.random().toString(16).slice(2);
    }
}