/*

	Title: WEB 330 – Enterprise JavaScript II
	Author: Tiffany Baker
	Date: 04/02/2023
	Description: class for a appetizer.

*/
import {product} from "./product.js";

export class appetizer extends product {
    constructor(name, price) {

        super(name, price);
    }
}