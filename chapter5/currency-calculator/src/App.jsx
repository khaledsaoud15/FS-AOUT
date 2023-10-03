import React, { useState } from "react";

const App = () => {
  const [password, setpassword] = useState([]);
  const [result, setResult] = useState([]);
  const [uppercase, setUppercase] = useState("");
  const [lowercase, setLowercase] = useState("");
  const [number, setNumber] = useState("");
  const [symbole, setSymbole] = useState("");
  const [randomU, setRandomU] = useState([]);
  const [randomL, setRandomL] = useState([]);
  const [randomN, setRandomN] = useState([]);
  const [randomS, setRandomS] = useState([]);

  const upperCaseGenerator = (e) => {
    if (e.target.checked) {
      setUppercase(e.target.value);
    } else {
      setUppercase("");
    }
  };

  const lowerCaseGenerator = (e) => {
    if (e.target.checked) {
      setLowercase(e.target.value);
    } else {
      setLowercase("");
    }
  };

  const numberGenerator = (e) => {
    if (e.target.checked) {
      setNumber(e.target.value);
    } else {
      setNumber("");
    }
  };

  const symbolGenerator = (e) => {
    if (e.target.checked) {
      setSymbole(e.target.value);
    } else {
      setSymbole("");
    }
  };

  const generatePassword = () => {
    let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowwercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let symbols = "&éç_)à$£¤*ù%/#~~{^^_è";

    for (let i = 0; i < 100; i++) {
      let rU =
        uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
      let rL =
        lowwercaseLetters[Math.floor(Math.random() * lowwercaseLetters.length)];
      let rS = symbols[Math.floor(Math.random() * symbols.length)];
      if (uppercase === "uppercase") {
        randomU.push(rU);
      }
      if (lowercase === "lowercase") {
        randomL.push(rL);
      }

      if (number === "number") {
        randomN.push(Math.floor(Math.random() * 100));
      }

      if (symbole === "symbole") {
        randomS.push(rS);
      }
      // password.push(randomL + randomN + randomS);
    }

    console.log(randomU);
    console.log(randomL);
    console.log(randomN);
    console.log(randomS);
    result.push(password.join(""));
  };

  // random password generator ?

  return (
    <div>
      <div className="container">
        <h1>{result.join("")}</h1>
      </div>
      <div className="choices">
        <div className="input">
          <input
            type="checkbox"
            name="uppercase"
            value="uppercase"
            onChange={upperCaseGenerator}
          />
          <label htmlFor="uppercase">Include Uppercase Letter</label>
        </div>
        <div className="input">
          <input
            type="checkbox"
            name="lowercase"
            value="lowercase"
            onChange={lowerCaseGenerator}
          />
          <label htmlFor="lowercase">Include Lowercase Letter</label>
        </div>
        <div className="input">
          <input
            type="checkbox"
            name="number"
            value="number"
            onChange={numberGenerator}
          />
          <label htmlFor="number">Include Numbers</label>
        </div>
        <div className="input">
          <input
            type="checkbox"
            name="symbole"
            value="symbole"
            onChange={symbolGenerator}
          />
          <label htmlFor="symbole">Include Symbols</label>
        </div>
      </div>
      <button onClick={generatePassword}>Generate</button>
    </div>
  );
};

export default App;

// let password = "";
//   for (let i = 0; i < length; i++) {
//     let character = characterSet[Math.floor(Math.random() * characterSet.length)];
//     if (specialCharacters && i === 0) {
//       character = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
//     }
//     password += character;
//   }
//   return password;
// }

// const password = generatePassword(8, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", "!@#$%^&*()-+");
// console.log(password); // Output: "s5@t$2#Yp"
