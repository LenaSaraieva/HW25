class Hamburger {
constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];
}
addTopping(topping) {
    this.topping.push(topping);
}
calculatePrice() {
    let totalPrice =  this.size.price + this.stuffing.price;
  
    for (let i = 0; i < this.toppings.length; i++) {
      totalPrice += this.toppings[i].price;
    }
    
    return totalPrice;
}

calculateCalories() {
    let totalCalories = this.size.calories + this.stuffing.calories;
    this.topping.forEach(topping => {
        totalCalories += topping.calories;
    });
    return totalCalories
}
}

//
const SIZE_SMALL = { price: 50, calories: 20 };
const SIZE_BIG = { price: 100, calories: 40} ;
const STUFFING_CHEESE = { price: 10, calories: 20 };
const STUFFING_SALAD = { price: 20, calories: 5 };
const STUFFING_POTATO = { price: 15, calories: 10 };
const TOPPING_SAUCE = { price: 15, calories: 0 };
const TOPPING_MAYO = { price: 20, calories: 5 };

//Example
// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());