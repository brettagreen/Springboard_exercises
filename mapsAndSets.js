new Set([1,1,2,2,3,4]); //{1,2,3,4}

/////////////
[...new Set("referee")].join("") //'ref'

////////////
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); //[[[1,2,3], true],[[1,2,3], false]]]

/////////////
function hasDuplicate(numberArray) {
    return numberArray.length != new Set(numberArray).size;
}
console.log(hasDuplicate([1,3,2,1])); // true
console.log(hasDuplicate([1,5,-1,4])); // false

/////////////
function vowelCount(string) {
    string = string.toLowerCase();
    const filter = 'aeiou';

    return string.split('').filter(function(char) {
        return filter.indexOf(char) != -1;
    }).reduce(function(accumulator, nextItem) {
        if (accumulator.get(nextItem) === undefined) {
           // console.log(accumulator);
            accumulator.set(nextItem, 1);
        } else {
           // console.log(accumulator);
            accumulator.set(nextItem ,accumulator.get(nextItem)+1);
        }
        return accumulator;
    }, new Map());
}
console.log(vowelCount('awesome')); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')); // Map { 'o' => 1 }