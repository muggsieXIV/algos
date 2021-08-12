// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
    Given a square matrix (2d array) of integers n*n
    Calculate the absolute difference between the sums of its diagonals
        - top left to bottom right diagonal diagonal 1
        - top right to bottom left diagonal diagonal 2 
 */
// function diagonalDifference(matrix){
//     var x = martix[0];
//     var y = matrix.length-1;
//     var z = martix.length/2;
//     // left to bottom right
    
// }
// diagonalDifference(
//     [
//         3,2,12
//         ,4,5,6,
//         7,10,4
//     ]
//     );

function diagonalDifference(matrix){
    const length = matrix.length;
    let diag1 = 0, diag2 = 0;

    for(let i=0; i < length; i++){
        for(var j=0; j< length; j++) 
        if (i === j) {
            diag1 += matrix[i]
        }
    }
    return Math.abs(diag1 - diag2)


diagonalDifference([3,2,12,4,5,6,7,10,4]);
/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 */
function orderedUnion(array1, array2){

}