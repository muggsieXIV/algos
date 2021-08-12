/* 
    Given an arr and a separator, output a string of every item in the array separated by the separator.
    The separator should only be between two elements.

    join([1, 2, 3], ", ") => "1, 2, 3"
*/

function arrToString(arr, sep){
    var accString = ''
    for(var i=0; i<arr.length; i++){
        if(i===arr.length-1){
            accString += String(arr[i]) + '';
        }
        else{
            accString += String(arr[i]) + sep;
        }
    }
    return accString;

}

arrToString([1,2,3,4], '|');










/* 
    Array: Second-Largest
    Return the second-largest element of an array. Given [42,1,4,Math.PI,7] , return 7. 
    If the array is too short, return null .
*/

function secondLargest(arr){
    var max = null;
    var secmax = null;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i]!== max && arr[i]<max && arr[i]>=secmax){
            secmax = arr[i];
        }
    }
    return secmax;
}
secondLargest([42,1,4,Math.PI,7]);
console.log(secmax);



function secondLargest(arr){
    largestEl = null
    secondLargestEl = null
    if(arr.length>1){
        for(var i=0;i<arr.length;i++){
            if(arr[i] >= largestEl){
                secondLargestEl = largestEl
                largestEl = arr[i]
            }
            if(i===1&&secondLargestEl===null){
                secondLargestEl = arr[i]
            }
            if(arr[i]<largestEl){
                if(arr[i]>secondLargestEl){
                    secondLargestEl = arr[i]
                }
            }
        }
    }
    console.log('1: ', largestEl, '2: ', secondLargestEl);
}

secondLargest([42,9,1,4,3.14,7])

t1 = [3, 5, 2, 6, 7, 8]
t2 = [1, 2, 7, 4, 3, 2]
t3 = [45, 45, 45, 2, 3, 8]
t4 = [-1, -6, -3, -20, -2]
t5 = [-1, -1, -1, -20, -2]
t6 = [8, 8, 8, 8, 8]
t7 = [6, 2]
t8 = [2, 6]
t9 = [2]
t10 = []

