/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
The input is generated such that a majority element will exist in the array.


function majorityElement(nums: number[]): number {
    
};

*/


// //instantiate a function definition //input: array //output: single number 
// function majorityElement(array: number[]): number {
//     //declare a variable assign it an empty object 
//     let valueObject: Record<number, number> = {} 
    
//     //iterate through the input array 
//     for(let element of array){
//         //if the object we created has the current element we are iterating over - increment the value 
//         if(valueObject[element]) valueObject[element]++

//         //else add the element we are iterating over with a value of one to the object we created above
//         else valueObject[element] = 1
//     }
        
//     //declare a constant and assign it to Object.entries of our created object - will be an array of arrays - sort through nested arrays by numerical value
//     const keyValueArr = Object.entries(valueObject).sort((a, b) => {
//         return b[1] - a[1]
//     })

//     //return the constant array at the index position of [0][0]
//     console.log(keyValueArr);
//     return Number(keyValueArr[0][0]) 
// }





//console.log

// //CHATGTP OPTOMIZED SOLUTION 
function majorityElement(array: number[]): number {
    // count tracks how strong the current candidate is
    let count = 0;

    // candidate is our current "best guess" for majority element
    let candidate = 0;

    // iterate through every number in the array
    for (let num of array) {

        // if we have no current candidate (count = 0),
        // pick the current number as the new candidate
        if (count === 0) {
            candidate = num;
        }

        // if current number matches candidate,
        // increase its "support"
        if (num === candidate) {
            count++;
        }

        // if current number is different,
        // it cancels out one support from the candidate
        else {
            count--;
        }
    }

    // after all cancellations, the remaining candidate is the majority element
    return candidate;
}



// const majorityElement = (array: number[]) => {
//     const object: Record<string, number> = {}
//     let majorityNum = 0
//     let majorityCount = 0

//     for(const number of array){
//         if(object[number]) object[number]++
//         else object[number] = 1
//     }

//     for(const key in object){
//         if(object[key] > majorityCount) {
//             majorityNum = Number(key) 
//             majorityCount = object[key]
//         }
//     }
    
//     return majorityNum;
// }

//chatGPT's version of Olivia solution 
// function majorityElement(array: number[]): number {
//     const countMap: Record<number, number> = {};

//     for (let num of array) {
//         countMap[num] = (countMap[num] || 0) + 1;
//     }

//     let maxNum = array[0];
//     let maxCount = 0;

//     for (let key in countMap) {
//         if (countMap[key] > maxCount) {
//             maxCount = countMap[key];
//             maxNum = Number(key);
//         }
//     }

//     return maxNum;
// }

const nums: number[] = [3,2,1,3,3]
//Output: 3

console.log(majorityElement(nums))