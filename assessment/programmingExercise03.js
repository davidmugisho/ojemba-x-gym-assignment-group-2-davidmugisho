/**
 * PROGRAMMING EXERCISE 03:
 *
 * Write a function that takes two values a and b as arguments.
 * Return the sum of both arguments.
 * If any argument is not a number, the argument should be handled as 0.
 */

// const sum5 = (a = 0, b=0) =>{
//     return myNumber((a)+(b));
// };


const sum = (a, b) =>{
    if (myFirst(a)){
        a = 0;
    }
    if (mySecond(b)){
        b = 0;
    }
    return a + b;
};
