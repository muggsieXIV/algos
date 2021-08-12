/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    Bonus: Make it O(n) time
*/
function twoSum(array, target) {
    newarray = []

    for(let x in array){
        for(let y in array){
            if(array[x] + array[y] === target){
                newarray.push ([array[x], array [y]])
                return newarray;
            }
        }
    }
}
//     return newarray;
// }

console.log(twoSum([2,4,5,7,10], 12));



/* 
    Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
    You can assume there is always a valid solution
    These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
    Hard Bonus: make it O(n) time
*/
function kMostFrequent(array, k){

}

console.log(kMostFrequent([1,2,3,1,5,2], 2))
[1, 2]

