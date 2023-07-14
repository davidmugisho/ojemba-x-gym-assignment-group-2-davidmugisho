/**
 * PROGRAMMING EXERCISE 05:
 *
 * Write a function that takes `checkMe` as an argument and returns `true` if it is a prime number.
 * If `checkMe` is equal to "dog", return "Woof!".
 * In all other cases, return `false`. Your function should not break if `checkMe` is not a real number.
 *
 * Hint: A prime number is a number that is only divisable by 1 and by itself. For example: 2, 3, 7, 13 are prime numbers
 */
const givenArgument = (checkMe) => {
    if (checkMe === "dog"){
        return "Woof!";
    }
    else if (isNaN(checkMe) || checkMe <= 1 ){
        return false;
    }
    else{
        let prime = true;
        let i = 2;
        while(i < checkMe){
            if (checkMe % i === 0){
                prime = false;
                break;
            }
            i++
        }
        return prime
    }
};