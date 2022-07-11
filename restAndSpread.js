/*function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
}*/

const myFilterOutOdds = (...allNums) => allNums.filter(num => num % 2 === 0);
console.log(myFilterOutOdds(1,2,3,4,5,6,7,8,9,10));

////////////////

const myFindMin = (...allNums) => Math.min(...allNums);
console.log(myFindMin(-1, -10, 5, 6, 100));

////////////////

function mergeObjects(obj1, obj2) {
  return myNewObject = {...obj1, ...obj2};
}

console.log(mergeObjects({age: 25, name: "charles"}, {age: 99, name: "gertrude"}));
console.log(mergeObjects({age: 25, name: "charles"}, {age1: 99, name1: "gertrude"}));

function doubleAndReturnArguments(myArray, ...args) {
  const finalArray = [];
  args.forEach(function(val) {
    finalArray.push(val*2);
  });
  return [...myArray, ...finalArray];
}

console.log(doubleAndReturnArguments([1,3,5,8,9], 11, 13, 15));

//////////////////

/** remove a random element in the items array
and return a new array without that item. */
const items = ["string", 90, true, {}];
const removeItem = items => {
  const index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)]
  //also, rest operator evaluated last here. thanks for the tip!
  ///EH???????? had to learn more about how slice works
}
console.log(removeItem(items));

/** Return a new array with every item in array1 and array2. */

const first = [2,4,6];
const second = [1,3,5];
const extend = (first, second) => [...first, ...second];

console.log(extend(first, second));

/** Return a new object with all the keys and values
from obj and a new key/value pair */

/*function addKeyVal(obj, key, val) {

}*/

const addKeyValue = (obj, key, val) => ({...obj, [key]: val});
console.log(addKeyValue({age: 29, sex: "male"}, "name", "steve"));


/** Return a new object with a key removed. */

/*function removeKey(obj, key) {

}*/

const removeKey = (obj, key) => {
  delete obj[key];
  return {...obj};
}
 
console.log(removeKey({"name": "Percy", "hungerlevel": "maximum", "sleepy": true}, "name"));
/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});
console.log(combine({"age":23, "wealth": "poor", "certified": true}, {"title": "mechanic", "employed": false}));


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  obj[key] = val;
  return {...obj};
};

console.log(update({"age":23, "wealth": "poor", "certified": true}, "age", "ETERNAL"));