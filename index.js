const wakeDog = function(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`)
  return (`Wake ${dogName} the ${dogBreed}`)
}
const leashDog = function(dogName, dogBreed){
  console.log(`Leash ${dogName} the ${dogBreed}`)
  return (`Leash ${dogName} the ${dogBreed}`)
}

const walkToPark = function(dogName, dogBreed){
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
  return (`Walk to the park with ${dogName} the ${dogBreed}`)
}

const throwFrisbee = function(dogName, dogBreed){
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
  return (`Throw the frisbee for ${dogName} the ${dogBreed}`)
}

const walkHome = function(dogName, dogBreed){
  console.log(`Walk home with ${dogName} the ${dogBreed}`)
  return (`Walk home with ${dogName} the ${dogBreed}`)
}

const unleashDog = function(dogName, dogBreed){
  console.log(`Unleash ${dogName} the ${dogBreed}`)
  return (`Unleash ${dogName} the ${dogBreed}`)
}


let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dog, breed) {
  return routine.map(fn => fn(dog, breed))
}




// describe("index.js", () => {
//   describe("independent functions", () => {
//     it("has a function wakeDog", () => {
//       const a = "Xerox"
//       const b = "Border Collie"
//       expect(wakeDog(a,b)).to.equal(`Wake ${a} the ${b}`)
//     })
//     it("has a function leashDog", () => {
//       const a = "Boo Radley"
//       const b = "Pibble"
//       expect(leashDog(a, b)).to.equal(`Leash ${a} the ${b}`)
//     })
//     it("has a function walkToPark", () => {
//       const a = "Bunny"
//       const b = "Labrador"
//       expect(walkToPark(a, b)).to.equal(`Walk to the park with ${a} the ${b}`)
//     })
//     it("has a function throwFrisbee", () => {
//       const a = "Mary J. Blige"
//       const b = "Papillon"
//       expect(throwFrisbee(a, b)).to.equal(`Throw the frisbee for ${a} the ${b}`)
//     })
//     it("has a function walkHome", () => {
//       const a = "Santa Paws"
//       const b = "Husky"
//       expect(walkHome(a, b)).to.equal(`Walk home with ${a} the ${b}`)
//     })
//     it("has a function unleashDog", () => {
//       const a = "Lauren"
//       const b = "Golden Retriever"
//       expect(unleashDog(a, b)).to.equal(`Unleash ${a} the ${b}`)
//     })
//     it("accepts 2 parameters for dogName and dogBreed", () => {
//       const a = "Skippy"
//       const b = "Welsh Corgi"
//       expect(wakeDog(a, b)).to.equal(`Wake Skippy the Welsh Corgi`)
//     })
//   })

//   describe("the array of functions", () => {
//     it("has variables for each activity", () => {
//       expect(wakeDog).to.exist
//       expect(leashDog).to.exist
//       expect(walkToPark).to.exist
//       expect(throwFrisbee).to.exist
//       expect(walkHome).to.exist
//       expect(unleashDog).to.exist
//     })
//     it("has an array called 'routine' that contains each activity", () => {
//       expect(routine).to.be.a('array');
//       expect(routine).to.include(wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog);
//     })
//   })

//   describe("the function that runs the array o' functions", () => {
//     it("calls into the independent functions", () => {
//       expect(routine).to.be.a('array');
//       expect(routine).to.include(wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog);
//       expect(throwFrisbee).to.exist

//       const executedMessages = exerciseDog("Esther", "Dalmation")

//       const successMessages = [ 'Wake Esther the Dalmation',
//         'Leash Esther the Dalmation',
//         'Walk to the park with Esther the Dalmation',
//         'Throw the frisbee for Esther the Dalmation',
//         'Walk home with Esther the Dalmation',
//         'Unleash Esther the Dalmation' ]

//       result = successMessages.every(msg => executedMessages.indexOf(msg) >= 0);
//       expect(result, "exerciseDog should run all the functions in the 'routine' array").true
//     })
//   })
// });
