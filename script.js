const addTwoNumbers = (a, b) => a + b;
console.log(addTwoNumbers(0, 0));
console.log(addTwoNumbers(9, 1));
console.log(addTwoNumbers(1, 9));

const student = {
  name: "Ajay Prakash",
  role: "Developer",
  address: "Prestige Falcon City, Bangalore",
  greet() {
    console.log(`Namaste, I am ${this.name}`);
  },
};
student.greet();
