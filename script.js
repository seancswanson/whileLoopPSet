console.log("Print all numbers between -10 and 19.");

var num = -9;

while (num <  19) {
    console.log(num);
    num++;
}

console.log("");
console.log("Print all even numbers between 10 and 40.");

num = 12;

while (num < 40) {
    console.log(num);
    num += 2;
}

console.log("");
console.log("Print all odd numbers between 300 and 333.");

num = 301;

while (num < 333) {
    console.log(num);
    num += 2;
}

console.log("");
console.log("Print all numbers divisable by 5 and 3 between 5 and 50.");

num = 5;
while (num < 50) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
  num++;
}
