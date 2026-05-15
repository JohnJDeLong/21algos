/*

Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?

*/

//create a function palindrom number  //i: number //o: boolean 
//create a var that is the value of input number convert to a string split into an array, reverse , rejoin and then convert all that into an number 
// if input number is = var just created  out put true 
// else output false 

// function palindromeNumber (number: number ): boolean{ 
//     const palindrome = Number(number.toString().split("").reverse().join(""));
//     if ( number === palindrome) return true; 
// return false; 
// }


// const x = 121
// // Output: true
// console.log(palindromeNumber(x));

// const y = -121
// // Output: false
// console.log(palindromeNumber(y));


//input 121 




// function palindromeNumber(number: number): boolean {
//   let original = number;
//   let reversed = 0;

//   while (number > 0) {
//     const digit = number % 10;
//     reversed = reversed * 10 + digit;
//     number = Math.floor(number / 10);
//   }

//   return original === reversed;
// }

//create a function that checks if a number is the same forwards as it is backwards //input: number //output: boolean
function palindromeNumber(x: number): boolean {
    //return false if the input number is negative - the presence of a negative sign means it cant be a palindrome by default
    if (x < 0) return false;

    //modulo operator -> x % 10 extracts the last digit of x (e.g., 123 % 10 = 3) 
    //anything that ends with a zero (other that zero itself) cant be a palindrome because we don't write numbers like 0310 and it has to be the same backward/forwards

    //check if the last number is zero (ensuring the entire number itself isn't zero) and return false if so 
    if (x % 10 === 0 && x !== 0) return false;

    //create a variable starting at zero (will be used to mathematically rebuild the input number in reverse)
    let reversedHalf = 0;

    //while the input number 
    while (x > reversedHalf) {
        //create a constant to represent the last digit of the input number -> 
        const lastDigit = x % 10; //output -> 2
        console.log(`current last digit: ${lastDigit}`)

        //updated the value of reversed variable to the current value of reversed times 10 and add the last digit
        reversedHalf = reversedHalf * 10 + lastDigit;
        console.log(`current reversed value: ${reversedHalf}`)

        //taking the input number and removing the last digit 
        x = Math.floor(x / 10);// 12 / 10 = 1.2 -> 1
        console.log(`current x (input number): ${x}`)
    }

    //if there is an even amount of numbers in the input number we can check the equivalency of the halves directly otherwise
    //we must remove the last digit of the reversed variable - checking that either side of the mid point is equivalent to one another
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}


const y = 121
// Output: false
console.log(palindromeNumber(y));