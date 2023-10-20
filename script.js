// const addTwoNumbers = (a, b) => a + b;
// console.log(addTwoNumbers(0, 0));
// console.log(addTwoNumbers(9, 1));
// console.log(addTwoNumbers(1, 9));

// const student = {
//   name: "Ajay Prakash",
//   role: "Developer",
//   address: "Prestige Falcon City, Bangalore",
//   greet() {
//     console.log(`Namaste, I am ${this.name}`);
//   },
// };
// student.greet();

const hobbies = ["sports", "Cooking"];
for (let hobby of hobbies) {
  console.log(hobby);
}

const newHobbies = hobbies.map((hobby) => `Hobby: ${hobby}`);
console.log(newHobbies);

const array = ["apple", "oranges", "", "mango", "", "lemon"];

const newArray = array.map((item) => {
  if (item === "") {
    return "empty string";
  } else {
    return item;
  }
});
console.log(newArray);

const obj1 = { key1: 1 };

const obj2 = { ...obj1 };
if (obj2 === obj1) {
  console.log("same objects");
} else {
  console.log("different objects");
}

const obj3 = { key1: 1, key2: 2 };
const obj4 = { ...obj3, key1: 1000 };
console.log(obj3);
console.log(obj4);
