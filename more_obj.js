/* 
    Given a search criteria object whose values will only be primitives (ints, strings, bools)
    and a list of objects,
    return any object that matches all the key value pairs in the search criteria object
    Bonus: write a 2nd solution using build in methods to practice functional programming
    EXAMPLE INPUTS/OUTPUT
    const collection = [
        { firstName: "Bob", lastName: "Bobbert", age: 31 },
        { firstName: "John", lastName: "Smith", age: 25 },
        { firstName: "Bob", lastName: "Smith", age: 27 },
        { firstName: "Bob", lastName: "White", age: 31 },
    ];
    const criteria = {
        firstName: "Bob",
        age: 31,
    };
    const expected = [
        { firstName: "Bob", lastName: "Bobbert", age: 31 },
        { firstName: "Bob", lastName: "White", age: 31 },
    ];
*/
function findObjects(criteria, collection) {
    let answer = []; // create empty array for matches
    for (let i = 0; i < collection.length; i++){ // loop through every object in the collection
        let matches = true; // assume object matches until proven otherwise
        for (key in criteria) {
            // compare all keys in the search criteria to the object
            if (collection[i][key] === undefined || collection[i][key] !== criteria[key]) {
                // if a search key is missing from the object or does not have a matching value, set match to false and exit loop
                matches = false;
                break;
            }
        }
        if (matches) { answer.push(collection[i]) }; // if matches, add to answer array
    }
    return answer;
}



/* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found
    
    EXAMPLE INPUTS/OUTPUT
    const students = [
        {
            id: 1,
            name: "student1",
            isLateToday: false,
            lateCount: 15,
            redBeltStatus: false,
        },
        {
            id: 2,
            name: "student2",
            isLateToday: false,
            lateCount: 1,
            redBeltStatus: false,
        },
        {
            id: 3,
            name: "student3",
            isLateToday: false,
            lateCount: 0,
            redBeltStatus: false,
        },
    ];
    const id = 3;
    const updateData = { redBeltStatus: true, isLateToday: true };
    const expected = {
        id: 3,
        name: "student3",
        isLateToday: true,
        lateCount: 0,
        redBeltStatus: true,
    };
*/
function findByIdAndUpdate(id, updatedValues, collection) {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].id === id) {
            collection[i] = {...collection[i], ...updatedValues};
            return collection[i];
        }
    }
    return null;
}


