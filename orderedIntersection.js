/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).
    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/
// iterate thru both arrays at the same time
// if array1[idx] == array2[idx] then add array1[idx]

// array1[i] > array2[j]
//     step forward on array2
// array1[i] < array2[j]
//     step forward on array1
// array1[i] = array2[j]
//     add array[i] to our combined array

function orderedIntersection(array1, array2){
    let i = 0;
    let j = 0;
    intersection = [];
    while (i < array1.length){
        if (array1[i] == intersection[intersection.length-1]){
            i++;
        }
        else if (array1[i] < array2[j]){
            i++;
        }
        else if (array1[i] > array2[j]){
            j++;
        }
        else{
            intersection.push(array1[i]);
            i++;
            j++;
        }
    }
    return intersection;
}

console.log(orderedIntersection([1,3,3,3,5,15], [2,3,3,3,4,5,15,16]));

orderedIntersection([1,3,5,15], [2,3,4,5,15,16]);



[
    2, 3,  3,  3,
    4, 5, 15, 16
  ]