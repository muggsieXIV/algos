// Like Binary Search, Jump Search (or Block Search) is a searching algorithm for sorted arrays.
// The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps
// or skipping some elements in place of searching all elements.

// For example, suppose we have an array arr[] of size n and block (to be jumped) of size m.
// Then we search at the indexes arr[0], arr[m], arr[2 * m], ..., arr[k * m] and so on. 
// Once we find the interval arr[k * m] < x < arr[(k+1) * m], we perform a linear search operation 
// from the index k * m to find the element x.

// What is the optimal block size to be skipped? In the worst case, we have to do n/m jumps
// and if the last checked value is greater than the element to be searched for, we perform
// m - 1 comparisons more for linear search. Therefore the total number of comparisons in the
// worst case will be ((n/m) + m - 1). The value of the function ((n/m) + m - 1) 
// will be minimum when m = √n. Therefore, the best step size is m = √n.

/**
 * Jump (block) search implementation.
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @param {function(a, b)}
 * @return {number}
 */

// function for comparing items
function linSearch(arr, element){
    for(let i = 0; i < arr.length; i++){
        if( arr[i] == element){
            return arr[i];
        }
    }
    return -1;
}

// returns the square root of a number rounded down
const roundedRoot = n => Math.floor(Math.sqrt(n))


function jumpSearch(sortedArray, seekElement) {
    let n = sortedArray.length, i = 0;
    
    if( n == 0) { return -1 };
    if(sortedArray[n-1] < seekElement || sortedArray[0] > seekElement){ return -1 }
    
    // determine our jump size
    // optimal jump is the sqrt of n (size of our array)
    let m = roundedRoot(n);

    // iterate through our loop
    while( i <= n ){
        // comparing current element against seek element
        if( sortedArray[i] == seekElement){
            return sortedArray[i];
        } else if (sortedArray[i] > seekElement){
            // if we find the chunk that our seek Element should be in, search within that for element
            return linSearch(sortedArray.slice(i-m, i), seekElement);
        }
        i += m
    }

    // check to see if the 
    if( i >= n + 1 && i < n + m){
        return linSearch(sortedArray.slice(i-m, n), seekElement);
    }

    // return value if found, if not return -1
    return -1;
}

jumpSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 20);
    
jumpSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 50);
    
jumpSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 10);