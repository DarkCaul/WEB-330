/*

	Title: WEB 330 – Enterprise JavaScript II
	Author: Tiffany Baker
	Date: 04/05/2023
	Description: JavaScript for calorie converter class.

*/

//inports the foodModel class
import { foodModel } from "./food-model";


//creates a class for the calorie converter
export class calorieConverter {

//data for array of foods    
static data = [
    new foodModel(1007,"Egg",78),
    new foodModel(1008,"Apple",95),
    new foodModel(1009,"Hamburger",354),
    new foodModel(1010,"Fries",400),
    new foodModel(1011,"Banana",105),
    new foodModel(1012,"Soda",150)
];

// filters the data based on the user input
static find(str){
    const dataStr = data.filter(foodModel => foodModel.name === str);

}
}

//input
console.log(dataStr);

