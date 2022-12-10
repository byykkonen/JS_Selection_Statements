console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
//Exercise 1

let correctAnswer = 144;
let guessNumber = prompt("What is the number i am think?");

guessNumber = parseInt(guessNumber);

if(isNaN(guessNumber)) {
console.log("You did not give a vaild number as a guess");
} else {
  if (correctAnswer > guessNumber) {
  console.log("too low");
  } else if (correctAnswer < guessNumber) {
  console.log("too high");
  } else {
  console.log("Congratulations!!!");
  }
}

//Exercise 2

let birthMonth = prompt("What is your birth month?");

switch (birthMonth.toLowerCase()) {
  case "january":
  case "february":
  case "december":
    console.log("You were born in the Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("You were born in the Spring");
  break;
  case "june":
  case "july":
  case "august":
    console.log("You were born in the Summer");
    break;
  case "september":
  case "october":
  case "november":
    console.log("You were born in the Fall");
  break;
  default:
    console.log("I do not recognize that month");

}

//Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId){
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type == "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}


console.log(`Product: ${size} ${color} ${type}`)



