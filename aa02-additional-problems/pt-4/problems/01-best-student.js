/*
    
    Write a function bestStudent() that takes any number of student objects, each with names for keys, and total points for values.
    The function should return the name of the student with the most points.
    If no students are passed to the function, return null;
    See below for how student objects are structured.

    const student1 = { name: "Geoff", points: 50 };
    const student2 = { name: "Justin", points: 1000 };
    const student3 = { name: "Tom", points: 568 };
    const student4 = { name: "Emily", points: 700 };
    const student5 = { name: "Corina", points: 750 };

    console.log(bestStudent(student1, student2, student3, student4, student5)) // returns "Justin"

    
*/

const bestStudent = (...args) => {
    if(args.length === 0) {
        return null;
    }
    let maxName = args[0].name;
    let maxPoints = args[0].points;
    for(let key of args) {
        if(key.points > maxPoints) {
            maxName = key.name;
            maxPoints = key.points;
        }
    }
    return maxName;
}

const student1 = { name: "Geoff", points: 50 };
    const student2 = { name: "Justin", points: 1000 };
    const student3 = { name: "Tom", points: 568 };
    const student4 = { name: "Emily", points: 700 };
    const student5 = { name: "Corina", points: 750 };

    console.log(bestStudent(student1, student2, student3, student4, student5)) // returns "Justin"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = bestStudent;
} catch (e) {
    module.exports = null;
}