// let number1=prompt("Enter number one");
// let number2=prompt("Enter number two");

// let numberDivide=number1/number2;
// alert(numberDivide);


// let number = prompt("Enter a number");

// if (number % 3 === 0 && number % 5 === 0) {
//     alert("FizzBuzz");
// }  else if (number % 5 === 0){
//     alert("Buzz")
// }else if (number % 3 === 0) {
//     alert("Fizz");
// }


let randomNumber = Math.floor(Math.random()*10)+1
console.log(randomNumber)
let guessNumber = prompt("Guess a number 1-10");
if (guessNumber==randomNumber){
    alert("You guessed right") 
}else {
    alert("Try again!")
}


// var n = Math.floor((Math.random() * 1000) + 1);
// if (n) {
//   var output = "";
//   if (n % 3 == 0)
//     output += "Rock";
//   if (n % 5 == 0)
//     output += "star";
//   prompt(output || n);
// }