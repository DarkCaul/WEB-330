/*

	Title: WEB 330 – Enterprise JavaScript II
	Author: Tiffany Baker
	Date: 04/02/2023
	Description: class for a bill and totals the sum.

*/

export class bill  {
    constructor(beverages, appetizers, mainCourses, desserts) {
        this.beverages = beverages;
        this.appetizers = appetizers;
        this.mainCourses = mainCourses;
        this.desserts = desserts;
        
    }
}
const emptyArray = []; 

function addBeverage (beverage) {
    this.beverage.push(beverage);
}

function addAppetizer (appetizer) {
    this.appetizer.push(appetizer);
}

function addMainCourse (mainCourse) {
    this.mainCourse.push(mainCourse);
}

function addDessert (dessert) {
    this.dessert.push(dessert);
}

function getTotal () {
    let total = 0;

    let beverageTotal = this.beverages.forEach(function(beverage) {
        total += parseFloat(beverage.price).toFixed(2);
    });

    let appetizerTotal = this.appetizer.forEach(function(appetizer) {
        total += parseFloat(appetizer.price).toFixed(2);
    });
    
    let mainCourseTotal = this.mainCourse.forEach(function(mainCourse) {
        total += parseFloat(mainCourse.price).toFixed(2);
    });
    
    let dessertTotal = this.dessert.forEach(function(dessert) {
        total += parseFloat(dessert.price).toFixed(2);
    });
    
    return total;
}