/* 
    Given a string, containing letters, single digit ints, and question marks
    return whether or not there are exactly 3 question marks between EVERY two ints that add up to 10
        - if there are no two ints that add up to 10, return false
    Helpful functions:
        parseInt(char) => NaN or the string parsed to an int
        isNaN(x) => true or false
            - need to use isNaN if you want to know if something is NaN
            - the number 0 is falsy
            - NaN is falsy
    
    EXAMPLE:
    questionMarks("acc?7??sss?3rr1??????5") will return true, because there are 3 question marks between 7 and 3
    questionMarks("aa2?1??aalkg") will return false, because there are not 3 question marks between 2 and 1
*/

function questionMarks(string){
    let isTruthful = false;
    let sumQuestionMarks = 0;
    let temp = null; // 7
    for(let i=0; i<string.length; i++){
        if(!isNaN(string(i))){
            if (temp == null){
                temp = string[i];
            }
            else {
                if(Number(temp) + Number(string[i]) == 10){
                    if (sumQuestionMarks == 3){
                        temp = string[i];
                        sumQuestionMarks = 0;
                        isTruthful = true;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
        else if(temp !== null && string[i] == "?"){
            sumQuestionMarks ++;
        }
    }
    return isTruthful;
}
console.log(questionMarks("acc?7??sss?3rr1??????5")); // Should return true
console.log(questionMarks("aa2?1??aalkg")); // Should return false

// Good job!