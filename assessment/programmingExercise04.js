/**
 * PROGRAMMING EXERCISE 04:
 *
 * Write a function that takes an array `foobar` as input and returns the product of all numbers in this array.
 * If the array contains the string "cat", the function shall return the string "meow" instead of the product.
 *
 * Hint:
 * A product means that all numbers multiplied with each other, for example [1, 2, 7] should be calculated
 * as 1 * 2 * 7 and return 14.
 * The array [1, "cat", 7] should return "meow", though.
 *
 * Optional: Add two more animals plus the noise they make to this function.
 */

const productMeow = (foobar) =>{
    let product = 1;
    for(let i = 0; i<foobar.length; i++){ //i use for lop to work whit every element in array like foobar is array given 
        if(foobar[i] === "cat"){
            return "meow";
        }
        else if (typeof foobar[i] === "number"){
            product *= foobar[i];
        }
    }
    return product; 
}