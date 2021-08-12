/* 
    Given an array of ints, find all the non-consecutive integers
    A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
    The first element is never considered non-consecutive.
    Return an array of objects where each object contains the number itself
    and it's index.
*/
function nonConsecutive(array){
    let newArr = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] - array[i - 1] != 1) {
            newArr.push({i: i, n: array[i]});
        }
    }
    return newArr;
}

console.log(nonConsecutive([1,3,4,5,7,8,9,11,14]));


// nonConsecutive([1,3,4,5,7,8,9,11,14]) should return 
// [   { i: 1, n: 3 }, 
//     { i: 4, n: 7 }, 
//     { i: 7, n: 11 }, 
//     { i: 8, n: 14 } ]
