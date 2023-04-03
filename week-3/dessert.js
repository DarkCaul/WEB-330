/*

	Title: WEB 330 – Enterprise JavaScript II
	Author: Tiffany Baker
	Date: 04/02/2023
	Description: class for a dessert.

*/
import {product} from "./product.js";

export class dessert extends product {
    constructor(name, price) {

        super(name, price);
    }
}