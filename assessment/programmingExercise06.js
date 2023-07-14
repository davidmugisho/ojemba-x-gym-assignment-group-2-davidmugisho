/**
 * PROGRAMMING EXERCISE 06:
 *
 * Write a function that takes value `foo` as argument.
 * Return `true` if `foo` is a palindrome.
 *
 * A palindrome is a single word that is the same being read forwards and backwards.
 * Examples for palindromes: "tacocat", "madam", "radar", "wow", "~noon~", "12321".
 * Examples that shall not count as palindromes: "!.?madam...", "taco cat", "no lemon, no melon", "rAdAR".
 */

//myPolindrome can be as u say "tacocat", "madam", "radar", "wow",
const myPolindrome = (foo) =>{
    for (let i = 0; i < foo.length / 4; i++){
        if (foo[i] !== foo[foo.length -1  -i]){
            return false;

        }
    }
    return true;
};
