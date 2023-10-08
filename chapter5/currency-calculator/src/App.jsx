import React, { useState } from "react";

const App = () => {
  const [password, setpassword] = useState([]);
  const [result, setResult] = useState("");
  const [uppercase, setUppercase] = useState("");
  const [lowercase, setLowercase] = useState("");
  const [number, setNumber] = useState("");
  const [symbole, setSymbole] = useState("");
  const [randomU, setRandomU] = useState([]);
  const [randomL, setRandomL] = useState([]);
  const [randomN, setRandomN] = useState([]);
  const [randomS, setRandomS] = useState([]);
  const [range, setRange] = useState(0);

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

  const change = (e) => {
    setRange(e.target.value);
  };

  const generatePassword = () => {
    // VARS
    let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowwercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let symbols = "&éç_)à$£¤*ù%/#~~{^^_è-|@)";

    // CONTAINER FOR THE RANDOM LETTERS
    let res = "";

    // LOOPING OVER RANGE AND SETTING RANDOM LETTER ON EACH ITTERATION
    for (let i = 0; i < range; i++) {
      // ---------------------------------------------
      const RL = Math.floor(Math.random() * uppercaseLetters.length);
      let rU =
        uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
      let rL =
        lowwercaseLetters[Math.floor(Math.random() * lowwercaseLetters.length)];
      let rS = symbols[Math.floor(Math.random() * symbols.length)];

      // ------------------------------------------
      if (uppercase === "uppercase") {
        randomU.push(rU);
        res += randomU.join("")[RL];
        console.log(res);
      }
      if (lowercase === "lowercase") {
        randomL.push(rL);
        res += randomL.join("")[RL];
      }

      if (number === "number") {
        randomN.push(Math.floor(Math.random() * 100));
        res += randomN.join("").toString()[RL];
      }

      if (symbole === "symbole") {
        randomS.push(rS);
        const SL = Math.floor(Math.random() * symbols.length);
        res += randomS.join("")[SL];
      }
    }

    setResult(res.slice(0, range));
  };

  return (
    <div>
      <div className="container">
        <h1>{result}</h1>
      </div>
      <div className="choices">
        <div className="input-slide">
          <input
            type="range"
            min={5}
            max={12}
            value={range}
            onChange={change}
          />
        </div>
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
