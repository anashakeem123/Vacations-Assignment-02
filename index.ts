      ///////////////////////// *The Starting Coding* //////////////////////////
 
// Vacation Assignment : 02

// Problem : 01
// Find Whether a number is Even Or odd :

function Even_or_odd(Num:number){
    if(Num%2 == 0){
        return "Even"
    } else {
        return "Odd"
    }
}
let Num1 = 100;
let check = Even_or_odd(Num1)
console.log(`Your Value ${Num1} is ${check}`) 

// Problem : 02
// Find Average :

function Averages(Num_01:number,Num_02:number,Num_03:number){
    let total = Num_01 + Num_02 + Num_03
    let Average = total/3
    console.log(`The Average OF Number : ${Num_01} ${Num_02} ${Num_03} is ${Average}`)
}
Averages(20,3,15)

// Problem : 03
// Find Area of Circle

function calculateAreaCircle(radius: number): number {
    const pi: number = 3.14159; // Pi ki approximate value
    
    // Area formula: π * r^2
    const area: number = pi * radius * radius;
    
    return area;
}

// Example usage:
const radius: number = 5;
const area: number = calculateAreaCircle(radius);
console.log("Area OF Circle:", area);

// Problem : 04
// Password Validation :

function Password_validation(pin:string){
    if (pin.length <= 5 || pin.length <= 15){
        console.log("Pin must have at least 5 and most 15 Characters ")
    } else {
        console.log("Pin Create Successfully")
    }
}
Password_validation("Okay....")


// Problem : 05
// Find maximum number And minimum number:

function findMax(numbers: number[]): number {
    return Math.max(...numbers);
}

function findMin(numbers: number[]): number {
    return Math.min(...numbers);
}

// Example usage:
const numbers: number[] = [5, 3, 9, 2, 7];
const maxNumber: number = findMax(numbers);
const minNumber: number = findMin(numbers);

console.log("Maximum number:", maxNumber); // Output: Maximum number: 9
console.log("Minimum number:", minNumber); // Output: Minimum number: 2



          ////////////////// *The Ending Coding* ////////////////////