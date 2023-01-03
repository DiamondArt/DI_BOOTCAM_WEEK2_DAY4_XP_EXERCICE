/********************************************************
 * @author Melissa Kouadio <angemelisk@gmail.com>       *
 * @typeof {(string|Array)}                             *
 * @typeof {(string|Objec)t}                            *
 * @typeof {number}                                     *
 * @typeof {function}                                   *
 *******************************************************/ 

/********************************************************
 * Exercice 1:
 * -----------------------------------------------------
 * PART I
 * ------------------------------------------------------
 * @function infoAboutMe
 * @description: console.log a sentence about you
 * @typeof {object} 
 * @returns {string}
 ********************************************************/  
let about = {
    firstname : "Kouadio",
    lastname: "Ange Melissa",
    age: 25,
    hobbies : {
        hobby1 : "Cinema",
        hobby2 : "Read",
        hobby3 : "Dance"
    }
};

function infoAboutMe(){
    console.log(`Hello, i'm ${about.firstname} ${about.lastname} ${about.age} years old.`);
    console.log(`My hobbies are ${about.hobbies.hobby1}, ${about.hobbies.hobby2}, ${about.hobbies.hobby3}`);
}
infoAboutMe();

/********************************************************
 * Exercice 1:
 * -----------------------------------------------------
 * PART II
 * ------------------------------------------------------
 * @function infoAboutPerson
 * @description: console.log a sentence about the person
 * @param {string} personName
 * @param {number} personAge
 * @param {string} personFavoriteColor
 * @returns {string}
 ********************************************************/  
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, your are ${personAge}, you favorite color is ${personFavoriteColor}`);
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

/************************************************************
 * Exercice 2:
 * ---------------------------------------------------------
 * @function calculateTip
 * @description:calculate match to tip when go to restaurant
 *************************************************************/
function calculateTip(){
    const bill = parseInt(prompt("Enter amount of the bill"));
    let tip = 0;
    let totalBill = 0;
    if (bill < 50) {
        tip = getTip(20,bill);
        totalBill = bill + tip;
        console.log(`the final bill is ${totalBill}`);
    }else if (bill >= 50 && bill <= 200) {
        tip = getTip(15,bill);
        totalBill = bill + tip;
        console.log(`the final bill is ${totalBill}`);
    }else if (bill > 200) {
        tip = getTip(10,bill);
        totalBill = bill + tip;
        console.log(`the final bill is ${totalBill}`);
    }
}

/************************************************************
 * @function getTip
 * @description:calculate percentage of tip
 * @param {number} percent
 * @param {number} value
 * @returns {number}
 *************************************************************/
function getTip(percent,value){
   return ((percent/100) * value);
}
calculateTip();

/************************************************************
 * Exercice 3:
 * ---------------------------------------------------------
 * @function isDivisible
 * @description:Find The Numbers Divisible By 23
 *************************************************************/
function isDivisible(){
    let sum = 0;
    let divisibleNumbers = "";
    for (let i = 0; i <= 500; i++) {
        if (i%23 == 0){
            divisibleNumbers += ` ${i} `
            sum += i;
        }
    }
    console.log(`Divisible by 23 are: ${divisibleNumbers}`);
    console.log(`Divisble sum is ${sum}`);
}
isDivisible();

/************************************************************
 * Exercice 4:
 * ---------------------------------------------------------
 * @function myBill
 * @description: Find the total price for all shopping list
 * @typeof :
 * - {object} stock
 * - {object} prices
 * - {Array} shoppingList 
 *************************************************************/
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  
const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana","orange","apple"]

function myBill() {
    let totalPrice = 0;
    for (let item of shoppingList) {
        if (item in stock && stock[item] !== 0) {
                totalPrice += prices[item];
                stock[item] -= 1;
        }
    }
    console.log(`Total price is $${totalPrice}`);
}
myBill();

/************************************************************
 * Exercice 5: What’s In My Wallet
 * ---------------------------------------------------------
 * @function changeEnough
 * @description: 
 * @typeof :
 * - {number} sumValues
 * - {Array} coin 
 * @param {number} itemPrice
 * @param {Array} amountOfChange
 * @returns {boolean}
 *************************************************************/
const coin = [0.25 , 0.10 , 0.05 , 0.01]
let sumValues = 0;

function changeEnough(itemPrice, amountOfChange) {
    for(let item = 0; item < amountOfChange.length; item++) {
        sumValues += coin[item] * amountOfChange[item];
    }
    if( sumValues >= itemPrice){
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}
changeEnough(14.11, [2,100,0,0]) // returns false
changeEnough(0.75, [0,0,20,5]) //returns true

/************************************************************
 * Exercice 6:Vacations Costs
 * ---------------------------------------------------------
 * @description: Calcul total vacation costs
 * @function :
 * - hotelCost
 * - planeRideCost
 * - rentalCarCost
 * - totalVacationCost
 * @typeof {number}
 *************************************************************/

/*************************************************************
 * @function hotelCost
 * @description : Calcule the cost of hotel by night
 * @returns {number}
 *************************************************************/
function hotelCost() {
    let numberOfNight = parseInt(prompt("Hello,enter number of nights you would like to stay"));
    while(isNaN(numberOfNight) || numberOfNight.length == 0) {
        numberOfNight = prompt("Hello,enter number of nights you would like to stay");
    }
    let hotelPrice = numberOfNight * 140 ;
    return hotelPrice;
}

/*************************************************************
 * @function planeRideCost
 * @description : Calcule the destination price
 * @returns {number}
 *************************************************************/
function planeRideCost() {
    let destination = prompt("Hello, enter you destination");
    let rideCost = 0;
    while(!isNaN(destination) || destination.length == 0) {
        destination = prompt("Hello, enter you destination");
    }
    if (destination == "London" || destination == "london"  || destination == "LONDON"){
        rideCost = 183;
        return rideCost;
    } else if (destination == "Paris" || destination == "paris"  || destination == "PARIS"){
        rideCost = 220;
        return rideCost;
    } else {
        rideCost = 300;
        return rideCost;
    }
}

/*************************************************************
 * @function rentalCarCost
 * @description : Calcule the cost of car by day
 * @returns {number}
 *************************************************************/
function rentalCarCost() {
    let rentCar = parseInt(prompt("Enter number of days you would like to rent the car."));
    let carCost = 0;
        while(isNaN(rentCar) || rentCar.length == 0) {
            rentCar = parseInt(prompt("Enter number of days you would like to rent the car."));
        }
        if(rentCar > 10) {
            carCost = rentCar * ( 5/100 * rentCar);
            return carCost;
        } else {
            carCost = rentCar * 40;
            return carCost ;
        }
}
/*************************************************************
 * @function totalVacationCost
 * @description : Calcule the total vacation cost
 * @typeof {number}
 *************************************************************/
let hotel = 0;
let destination = 0 ;
let car  = 0 ;
function totalVacationCost()
{
    hotel = hotelCost();
    destination = planeRideCost();
    car = rentalCarCost();
    let total = hotel + destination + car;
    console.log(`Total cost for you vacation is $${total}`);
}
totalVacationCost();