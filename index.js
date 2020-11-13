//1. Declare variables and use the assignment operators ( print the results)
let x = 1;
let y = 3;
let z = 5;

console.log(x);
console.log((y += 3));
console.log((z -= 3));
console.log((x *= 3));
console.log((y /= 3));
console.log((z %= 3));

//2. Try out the two kind of alerts that have been studied.
window.alert("Vnimanie");
window.confirm("Are you still here?");

//3. Try out the different types of loggings in the console
console.error("Something went wrong?!");

let chair = {
  name: "chair",
  color: "green",
  stock: "available",
};

console.dir(chair);

console.table(["bruh", "sound", "effect"]);
