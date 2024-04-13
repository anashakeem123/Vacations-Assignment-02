///////////////////////// *The Starting Coding* //////////////////////////
// Vacation Assignment : 02
// Problem : 01
// Find Whether a number is Even Or odd :
function Even_or_odd(Num) {
    if (Num % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
var Num1 = 100;
var check = Even_or_odd(Num1);
console.log("Your Value ".concat(Num1, " is ").concat(check));
// Problem : 02
// Find Average :
function Averages(Num_01, Num_02, Num_03) {
    var total = Num_01 + Num_02 + Num_03;
    var Average = total / 3;
    console.log("The Average OF Number : ".concat(Num_01, " ").concat(Num_02, " ").concat(Num_03, " is ").concat(Average));
}
Averages(20, 3, 15);
// Problem : 03
// Find Area of Circle
function calculateAreaCircle(radius) {
    var pi = 3.14159; // Pi ki approximate value
    // Area formula: π * r^2
    var area = pi * radius * radius;
    return area;
}
// Example usage:
var radius = 5;
var area = calculateAreaCircle(radius);
console.log("Area OF Circle:", area);
// Problem : 04
// Password Validation :
function Password_validation(pin) {
    if (pin.length <= 5 || pin.length <= 15) {
        console.log("Pin must have at least 5 and most 15 Characters ");
    }
    else {
        console.log("Pin Create Successfully");
    }
}
Password_validation("Okay....");
// Problem : 05
// Find maximum number And minimum number:
function findMax(numbers) {
    return Math.max.apply(Math, numbers);
}
function findMin(numbers) {
    return Math.min.apply(Math, numbers);
}
// Example usage:
var numbers = [5, 3, 9, 2, 7];
var maxNumber = findMax(numbers);
var minNumber = findMin(numbers);
console.log("Maximum number:", maxNumber); // Output: Maximum number: 9
console.log("Minimum number:", minNumber); // Output: Minimum number: 2
////////////////// *The Ending Coding* ////////////////////
