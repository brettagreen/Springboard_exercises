//let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
//let {numPlanets, yearNeptuneDiscovered} = facts;

//console.log(numPlanets); // 8
//console.log(yearNeptuneDiscovered); // 1846   

///////////////
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//////////////
function getUserData({firstName, favoriteColor="green"}) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"})); //'Your name is Alejandro and you like purple'
console.log(getUserData({firstName: "Melissa"})); // 'your name is Melissa and you like purple'
console.log(getUserData({})); // 'your name is undefined and you like purple.'

///////////////
let [first1, second1, third1] = ["Maya", "Marisa", "Chi"];

console.log(first1); //Maya
console.log(second1); //Marisa
console.log(third1); //Chi

////////////////
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // Raindrops on roses
  console.log(whiskers); // whiskers on kittens
  console.log(aFewOfMyFavoriteThings); // [Bright copper kettles, warm woolen mittens, brown paper packages tied up with strings]

/////////////////
let numberz = [10, 20, 30];
[numberz[1], numberz[2]] = [numberz[2], numberz[1]]

console.log(numberz[1], numberz[2]); //30, 20
console.log(numberz) // same array

////////////////
/*var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;*/

  /* Write an ES2015 Version */
const abject = {
    numbers: {
        a: 1,
        b: 2
    }
};

let {numbers: {a, b}} = abject;
console.log(a, b);

////////////////
/*var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;*/

/* Write an ES2015 Version */ 
let reh = [1,2];
[two, one] = [1, 2];
console.log(two, one);

let A = "A";
let B = "B";
let hooray = [A, B];
[B, A] = hooray;
console.log(B);

////////////////
//raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

const raceObject = ([first, second, third, ...rest]) => (
  {
    first,
    second,
    third,
    rest
  });
console.log(raceObject(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']));