/* Write an ES2015 Version */
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    };
}

console.log(createInstructor("Brett", "Green"));

/* Write an ES2015 Version */
const favoriteNumber = 42;

const instrctr = {
  firstName: "Colt",
  [favoriteNumber]: "mon nombre prefere"
}

console.log(instrctr);

/* Write an ES2015 Version */
const instructor = {
    firstName: "Colt",
    Hi () {
      return "Hi!";
    },
    sayBye() {
      return this.firstName + " says bye!";
    }
}

console.log(instructor.Hi(), instructor.sayBye());

//////////////////
function createAnimal(species, vocalisation, sound) {
    return {
        species,
        [vocalisation] () {
            return sound;
        }
    }
}

const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
console.log(d.bark()); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
console.log(s.bleet()); //"BAAAAaaaa"
