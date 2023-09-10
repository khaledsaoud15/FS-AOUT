// const challenge = "Full Stack JS Track Days Of JavaScript";
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substring(5));
// console.log(challenge.substring(0, 20));
// console.log(challenge.includes("Script"));
// console.log(challenge.split(" "));
// const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(companies.split(","));

// console.log(challenge.replace("Track", "Groupe"));

// console.log(challenge.charAt(15));
// console.log(challenge.charCodeAt("J"));
// console.log(challenge.indexOf("a"));
// console.log(challenge.lastIndexOf("a"));
// console.log(challenge.trim());

// console.log(challenge.startsWith("F"));
// console.log(challenge.endsWith("M"));

// console.log(challenge.concat(" khaled"));

// console.log(challenge.repeat(2));

// console.log("10" === String(10));

// const py = "python";
// const ja = "jargon";

// console.log(py.includes("on") && ja.includes("on"));

// Condition

const vr = "challenge";
if (vr.includes("z")) {
  console.log(vr);
}

// exo 1

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  }
  return "odd";
}

console.log(isEvenOrOdd(5));
console.log(isEvenOrOdd(6));
console.log(isEvenOrOdd(10));
console.log(isEvenOrOdd(15));

// exo2

function findLargest(n1, n2) {
  if (n1 > n2) {
    return "the largest is " + n1;
  } else if (n1 < n2) {
    return "the largest is " + n2;
  }

  return n1 + " equal " + n2;
}

console.log(findLargest(2, 4));
console.log(findLargest(5, 4));
console.log(findLargest(4, 4));

// exo3

function findLargestAgain(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return "the largest is " + n1;
  } else if (n2 > n3) {
    return "the largest is " + n2;
  }

  return "the largest is " + n3;
}

console.log(findLargestAgain(10, 15, 20));
console.log(findLargestAgain(100, 10, 15));
console.log(findLargestAgain(50, 150, 15));

// exo4

function grade(grade) {
  switch (true) {
    case grade > 90 && grade <= 100:
      return "S";
    case grade > 80 && grade <= 90:
      return "A";
    case grade > 70 && grade <= 80:
      return "B";
    case grade > 60 && grade <= 70:
      return "C";
    case grade > 50 && grade <= 60:
      return "D";
    case grade > 40 && grade <= 50:
      return "E";
    case grade < 40:
      return "Student has failed";
    default:
      return "invalid number";
  }
}

console.log(grade(55));
console.log(grade(61));
console.log(grade(30));
console.log(grade(98));
console.log(grade());

// Loops

// For loop

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let j = 0;
// while (j < 10) {
//   console.log(j);
//   j++;
// }

let j = 0;
do {
  console.log(j);
  j++;
} while (j > 10);

function exo5(x) {
  switch (true) {
    case x == "rouge":
      return "vert";

    case x == "vert":
      return "jeune";
    case x == "jeune":
      return "rouge";
    default:
      return "error";
  }
}
console.log(exo5("rouge"));

// exo6

function removeHashtag(hash) {
  let result = "";
  for (let i = 0; i < hash.length; i++) {
    if (hash[i] !== "#") {
      result += hash[i];
    } else {
      break;
    }
  }
  return result;
}

console.log(removeHashtag("www.codewars.com#hhh"));

//  exo 7
function reverseWord(word) {
  word = word.split(" ");
  let result = "";
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].split("").reverse().join("");
    result += word[i] + " ";
  }
  return result.trim();
}

console.log(reverseWord("This is an example!"));


