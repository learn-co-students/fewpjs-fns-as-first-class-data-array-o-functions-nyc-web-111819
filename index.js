function wakeDog(dogName, dogBreed) {
    let wakeUp =`Wake ${dogName} the ${dogBreed}`
    console.log(wakeUp)
    return wakeUp
  }
function leashDog(dogName, dogBreed) {
    let leashem =`Leash ${dogName} the ${dogBreed}`
    console.log(leashem)
    return leashem
  }
function walkToPark(dogName, dogBreed) {
    let walkit =`Walk to the park with ${dogName} the ${dogBreed}`
    console.log(walkit)
    return walkit
  }
function throwFrisbee(dogName, dogBreed) {
    let throwIt =`Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(throwIt)
    return throwIt
  }
function walkHome(dogName, dogBreed) {
    let walker =`Walk home with ${dogName} the ${dogBreed}`
    console.log(walker)
    return walker
  }
function unleashDog(dogName, dogBreed) {
    let unleasher =`Unleash ${dogName} the ${dogBreed}`
    console.log(unleasher)
    return unleasher
  }

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function excerciseDog(dogName, dogBreed){
return routine.map(excercise => {
excercise(dogName, dogBreed)
});
}

excerciseDog()