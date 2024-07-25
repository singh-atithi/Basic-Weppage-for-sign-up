class Person {
  constructor(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
}

// Array to hold all Person objects
const people = [];

// Dummy data
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
let p = document.querySelector("p");
p.style.display = "none";
people.push(myFather, myMother, mySister);

//Effect for normal action of inputs
let inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("click", () => {
    p.style.display = "none";
  });
});

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let a = document.querySelector("#a");
  let b = document.querySelector("#b");
  let c = document.querySelector("#c");
  let d = document.querySelector("#d");

  if (!a || !b || !c || !d) {
    console.error("One or more input elements are missing.");
    return;
  }

  let A = a.value;
  let B = b.value;
  let C = c.value;
  let D = d.value;
  let p = document.querySelector("p");

  //Normal state
  if (A == "" && B == "" && C == "" && D == "") {
    p.style.display = "block";
    p.innerText = "";
  }

  //Field Empty Error
  if (A === "" || B === "" || C === "" || D === "") {
    p.style.display = "block";
    p.innerText = "All fields must be filled.";
    return;
  } else {
    p.style.display = "block";
    p.innerText = "";
  }

  //Person exists or not condition
  let personExists = people.some(
    (person) =>
      person.firstName === A &&
      person.lastName === B &&
      person.age === C &&
      person.eyeColor === D
  );
  if (personExists) {
    p.style.display = "block";
    p.innerText = "Person already exists";
    return;
  } else {
    p.style.display = "none";
  }

  // Add input values to Person class
  const input = new Person(A, B, C, D);

  // Add new Person to the array
  people.push(input);
  p.style.display = "block";
  p.innerText = "Submited";
  a.value = "";
  b.value = "";
  c.value = "";
  d.value = "";
});
