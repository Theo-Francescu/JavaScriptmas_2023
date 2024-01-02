const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];

function shufflePeople(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateSecretSantaPairs(arr) {
  let shuffledPeople = shufflePeople([...arr]);

  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let currentPerson = arr[i];
    let pairOfCurrentPerson = shuffledPeople[i];
    obj[currentPerson] = pairOfCurrentPerson;
  }
  return obj;
}

console.log(generateSecretSantaPairs(people));