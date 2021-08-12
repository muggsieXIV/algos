/* 
    Given an honorific (name title) and array of full name strings,
    in "LastName, FirstName" format
    Return a new array of strings in this format: "Honorific FirstName LastName"
    Bonus: re-write it with built in functional programming methods
*/
function addHonorific(honorific, names){
    const newArr = []
    const firstName = names[0];
    const lastName =names[1]
    newArr.push(honorific);
    newArr.push(lastName);
    newArr.push(firstName);
    
    return newArr
}
console.log(addHonorific("Sir", ["Smith", "John"]));
console.log(addHonorific("Sir", ["McCartney", "Paul"]));

/* 
    https://leetcode.com/problems/compare-version-numbers/
    Given two strings, version1, and version2, both representing version numbers
    If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
    Helpful methods:
        - .split(characterToSplitOn)
            - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
        - .parseInt
            - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
    Bonus, solve without .split
*/
function compareVersionNumbers(v1, v2){

}

console.log(compareVersionNumbers("abc123", "abc124"));

