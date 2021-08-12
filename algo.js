/*
    Given two arrays of ints
    return the symmetric differences, (aka disjunctive union)
        - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
        think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
        - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
    Venn Diagram Visualization: https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

// take in two arrays
// make new empty array
// iterate through both arrays
// add unique values to new array (only include 1 value if duplicate in same array)
// return new array

// [1,2,4,5] [3,4,6] = [1,2,3,5,6]

function symmetricDifference(array1, array2) {
    const newArr = [];
    let i = 0;
    let j = 0;
    // while i is in array1 and j is in array2
    while(i < array1.length && j < array2.length){
        // if equal
        if (array1[i] == array2[j]){
            // increment both i and j
            i++;
            j++;
        } else if (array1[i] < array2[j]){ // else if array1 at i is less than array 2 at j 
            // push array1 at i and increment i
            if (array1[i] != array1[i-1]) {
                newArr.push(array1[i]);
            }
            i++;
        } else {
            //push array2 at j and increment j 
            if (array2[j] != array2[j-1]){
                newArr.push(array2[j]);
            }
            j++;
        }
    }
    while (i < array1.length){
        if (array1[i] != array1[i-1]) {
            newArr.push(array1[i]);
        }
        i++;
    }
    while(j < array2.length){
        if (array2[j] != array2[j-1]){
            newArr.push(array2[j]);
        }
        j++;
    }
    return newArr;
}

console.log(symmetricDifference([1,3,5,7,34], [3,4,5,23,33,34,65]));
