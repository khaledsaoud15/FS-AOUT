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

// const vr = "challenge";
// if (vr.includes("z")) {
//   console.log(vr);
// }

// exo 1

// function isEvenOrOdd(num) {
//   if (num % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// }

// console.log(isEvenOrOdd(5));
// console.log(isEvenOrOdd(6));
// console.log(isEvenOrOdd(10));
// console.log(isEvenOrOdd(15));

// exo2

// function findLargest(n1, n2) {
//   if (n1 > n2) {
//     return "the largest is " + n1;
//   } else if (n1 < n2) {
//     return "the largest is " + n2;
//   }

//   return n1 + " equal " + n2;
// }

// console.log(findLargest(2, 4));
// console.log(findLargest(5, 4));
// console.log(findLargest(4, 4));

// exo3

// function findLargestAgain(n1, n2, n3) {
//   if (n1 > n2 && n1 > n3) {
//     return "the largest is " + n1;
//   } else if (n2 > n3) {
//     return "the largest is " + n2;
//   }

//   return "the largest is " + n3;
// }

// console.log(findLargestAgain(10, 15, 20));
// console.log(findLargestAgain(100, 10, 15));
// console.log(findLargestAgain(50, 150, 15));

// exo4

// function grade(grade) {
//   switch (true) {
//     case grade > 90 && grade <= 100:
//       return "S";
//     case grade > 80 && grade <= 90:
//       return "A";
//     case grade > 70 && grade <= 80:
//       return "B";
//     case grade > 60 && grade <= 70:
//       return "C";
//     case grade > 50 && grade <= 60:
//       return "D";
//     case grade > 40 && grade <= 50:
//       return "E";
//     case grade < 40:
//       return "Student has failed";
//     default:
//       return "invalid number";
//   }
// }

// console.log(grade(55));
// console.log(grade(61));
// console.log(grade(30));
// console.log(grade(98));
// console.log(grade());

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

// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j > 10);

// function exo5(x) {
//   switch (true) {
//     case x == "rouge":
//       return "vert";

//     case x == "vert":
//       return "jeune";
//     case x == "jeune":
//       return "rouge";
//     default:
//       return "error";
//   }
// }
// console.log(exo5("rouge"));

// exo6

// function removeHashtag(hash) {
//   let result = "";
//   for (let i = 0; i < hash.length; i++) {
//     if (hash[i] !== "#") {
//       result += hash[i];
//     } else {
//       break;
//     }
//   }
//   return result;
// }

// console.log(removeHashtag("www.codewars.com#hhh"));

//  exo 7
// function reverseWord(word) {
//   word = word.split(" ");
//   let result = "";
//   for (let i = 0; i < word.length; i++) {
//     word[i] = word[i].split("").reverse().join("");
//     result += word[i] + " ";
//   }
//   return result.trim();
// }

// console.log(reverseWord("This is an example!"));

//arrays

// const arr = [1, "k", true, {}, [], undefined];

// const empty = [];
// empty.push(1);
// console.log(empty);

// empty.push("js");
// console.log(empty);

// empty.unshift("first");
// console.log(empty);

// empty.pop();
// empty.pop();

// empty.pop();

// empty.shift();
// empty.shift();
// empty.shift();

// console.log(empty);

// 1
const arr = [];
// 2
const moreThanFiveElements = [1, true, "k", undefined, {}];
// 3
// console.log(moreThanFiveElements.length);

// // 4
// const first = moreThanFiveElements[0];
// const middle =
//   moreThanFiveElements[Math.floor((moreThanFiveElements.length - 1) / 2)];
// const last = moreThanFiveElements[moreThanFiveElements.length - 1];

// console.log(first, middle, last);

// 5
const itCompanies = [
  "facebook",
  "amazon",
  "google",
  "microsoft",
  "ibm",
  "apple",
  "oracle",
];

function printCompany(itCompanies) {
  for (let i = 0; i < itCompanies.length; ++i) {
    console.log(itCompanies[i]);
  }
}
function upperCaseCompany(itCompanies) {
  for (let i = 0; i < itCompanies.length; ++i) {
    console.log(itCompanies[i].toUpperCase());
  }
}

// printCompany(itCompanies);

// upperCaseCompany(itCompanies);

function tostring(itCompanies) {
  return itCompanies.join(",") + " are big IT companies.";
}

// console.log(tostring(itCompanies));

function checkCompany(company) {
  if (itCompanies.includes(company)) {
    return company;
  }

  return "Not Found";
}

// console.log(checkCompany("facebook"));
// console.log(checkCompany("amazon"));
// console.log(checkCompany("samsung"));

function checkDoubleO(itCompanies) {
  let newArr = [];
  let count = 0;
  for (let i = 0; i < itCompanies.length; i++) {
    for (let j = 0; j < itCompanies[i].length; j++) {
      if (itCompanies[i][j] === "o") {
        count++;
      }
    }
    if (count > 1) {
      newArr.push(itCompanies[i]);
    }
    count = 0;
  }

  return newArr;
}

// console.log(checkDoubleO(itCompanies));

// console.log(itCompanies.sort());

// console.log(itCompanies.slice(3));
// console.log(itCompanies.slice(0, -3));

// function removeMiddle(itCompanies) {
//   let newArr = [];
//   let temp = itCompanies.length;
//   for (let i = 0; i < itCompanies.length; i++) {
//     if (itCompanies[i] !== itCompanies[Math.floor((temp - 1) / 2)]) {
//       newArr.push(itCompanies[i]);
//     }
//   }

//   return newArr;
// }

// console.log(removeMiddle(itCompanies));

// itCompanies.lenght = 0;

/* 
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.
Examples: (Input --> Output)
[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

function numiricArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1 + ": " + arr[i];
  }

  return arr;
}

// console.log(numiricArray(["a", "b", "c"]));
// console.log(numiricArray(["a", "b", "c", "e", "f", "g"]));

function switchandSort(arr) {
  let alph = [];
  let num = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (typeof arr[i] === "number") {
  //     num.push(arr[i]);
  //   } else {
  //     alph.push(arr[i]);
  //   }
  // }

  // alph = alph.sort();
  // num = num.sort();

  // return [...alph, ...num];

  arr.filter((a) => (typeof a === "number" ? num.push(a) : alph.push(a)));
  num = num.sort();
  alph = alph.sort();

  return [...alph, ...num];
}

// console.log(switchandSort(["e", 5, 3, 1, "a", "b", "5"]));

// check if pangram

function pangram(word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < alphabet.length; i++) {
    if (
      word.includes(alphabet[i]) ||
      word.includes(alphabet[i].toUpperCase())
    ) {
      return "this sentence is a pangram";
    }
  }
  return "this sentence is not a pangram";
}

// console.log(pangram("The quick brown fox jumps over the lazy dog"));

/* // you are a farmer you need to save your sheeps from the wolf
// you have an array as an input but be carefull it starts from right to left
// test case if the wof is in the position arr.length - 1 = return "Pls go away and stop eating my sheep"
// else return "Oi! sheep number " + sheepIndex + " !You are about to be eaten by a Wolf" notice that the array starts the right*/

function sheep(queu) {
  const s = queu.length - queu.indexOf("wolf") - 1;

  if (!queu.includes("wolf")) {
    return "there is no wolf";
  }
  if (s === 0) {
    return "Pls go away and stop eating my sheep";
  }
  return "oi! sheep number " + s + " you are goin to be eaten by the wolf";
}

// console.log(sheep(["sheep", "sheep", "sheep", "wolf"]));
// console.log(sheep(["sheep", "sheep", "sheep", "sheep"]));
// console.log(sheep(["sheep", "sheep", "wolf", "sheep", "sheep"]));

/* 
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel. */

function removeVowls(vowl) {
  let regexVowlLowerCase = /[aeiou]/;
  let regexVowlUpperrCase = /[AEIOU]/;
  let res = [];

  for (let i = 0; i < vowl.length; i++) {
    if (
      !regexVowlLowerCase.test(vowl[i]) &&
      !regexVowlUpperrCase.test(vowl[i])
    ) {
      res.push(vowl[i]);
    }
  }

  return res.join("");
}

// console.log(removeVowls("This website is for losers LOL!"));

/*

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function findLongest(a, b) {
  let res = a + b;
  res = res.split("").sort();
  let finsalRes = "";
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== res[i + 1]) {
      finsalRes += res[i];
    }
  }
  return finsalRes;
}

// console.log(findLongest("qksjdbvlqksjbvlqksjb", "mqsjmbqjbmkjqfmkbqm"));

/* 
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
*/

function num7(arr) {
  arr = arr.join("").split("");
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] === 7) {
      return "boom!";
    }
  }
  return "there is no number 7";
}

// console.log(num7(["78", 8547, 52, 1, 6]));
// console.log(num7(["8", 854, 52, 1, 6]));

/*
  Create a function that takes a sentence and returns the number of letters in this sentence sorted alphabetically.
Output format:
letter:count space letter:count (see examples).
Special cases:
space is NOT a letter!
special symbols like ($ & * @ ! ' @') is NOT a letter!
lower and upper letters IS EQUAL (A == a, B == b ... Z == z)!
*/

function countLetters(str) {
  str = str.toUpperCase();
  let b;
  let tab = [];
  let res = "";
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str[i].length; j++) {
      b = str[i][j].toLowerCase();
      if (b !== str[i][j]) {
        tab.push(str[i][j]);
      }
    }
  }

  tab = tab.sort();
  let index = 1;
  for (let k = 0; k < tab.length; k++) {
    if (tab[k] == tab[k + 1]) {
      index++;
    } else {
      res += tab[k] + ":" + index + " ";
      index = 1;
    }
  }

  return res.toLowerCase();
}

// console.log(countLetters("hello Worldd §&"));

// Objects

const obj = {
  name: "khaled",
  email: "khaledsaoud@gmail.com",
};

const obj2 = obj;

obj2.name = "rafik";

obj.country = "algeria";

console.log(obj);
console.log(obj2);

delete obj.country;

console.log(obj);

console.log(obj2);

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

function getMAxSkilledUser(users) {
  let maxUser;
  let maxUserObj;
  let count = 0;
  for (u in users) {
    if (users[u].skills.length > count) {
      count = users[u].skills.length;
      maxUser = u;
      maxUserObj = users[u];
    }
  }

  return {
    maxUser,
    maxUserObj,
  };
}

console.log(getMAxSkilledUser(users));

function setUserName(name, user, users) {
  users[name] = user;
  return users;
}

const myData = {
  email: "khaledsaoud@gmail.com",
  skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
  age: 22,
  isLoggedIn: true,
  points: 100,
};

console.log(setUserName("khaled", myData, users));
