/**
 * PROGRAMMING EXERCISE 01:
 *
 * Write an arrow function that takes two values x and y as arguments.
 * Return true if the two values are equal and of the same type.
 */
const valEqual = (x, y) => {
    if (typeof x !== typeof y ){
        return false ;
    }
    return x === y;
};
