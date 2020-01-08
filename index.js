
  const wakeDog = function(name, breed) {
    let str = `Wake ${name} the ${breed}`;
    console.log(str);
    return str;
  }

  const leashDog = function(name, breed) {
    let str = `Leash ${name} the ${breed}`;
    console.log(str);
    return str;
  }

  const walkToPark = function(name, breed) {
    let str = `Walk to the park with ${name} the ${breed}`;
    console.log(str);
    return str;
  }

  const throwFrisbee = function(name, breed) {
    let str = `Throw the frisbee for ${name} the ${breed}`;
    console.log(str);
    return str;
  }

  const walkHome = function(name, breed) {
    let str = `Walk home with ${name} the ${breed}`;
    console.log(str);
    return str;
  }

  const unleashDog = function(name, breed) {
    let str = `Unleash ${name} the ${breed}`;
    console.log(str);
    return str;
  }

const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
]

function exerciseDog(dogName, dogBreed) {
  let strArray  = [];
  for (const ele of routine) {
    strArray.push(ele(dogName, dogBreed));
  }
  return strArray;
};