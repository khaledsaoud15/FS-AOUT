// const plus = document.querySelector(".plus");
// const minus = document.querySelector(".minus");
// const h1 = document.querySelector("h1");

// let count = 0;

// const counterFunctionAdd = () => {
//   count++;
//   h1.textContent = count;
// };
// const counterFunctionMinus = () => {
//   if (count <= 0) {
//     return;
//   }
//   count--;
//   h1.textContent = count;
// };

// plus.addEventListener("click", counterFunctionAdd);
// minus.addEventListener("click", counterFunctionMinus);

const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".username");
const confirmPassword = document.querySelector(".confirm-password");
const submit = document.querySelector(".submit");
const pop_up = document.querySelector(".pop-up");
const container = document.querySelector(".container");

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const register = () => {
  const findUser = users.find((u) => u.email === email.value);
  if (findUser) {
    alert("User already exists!");
  } else {
    users.push({
      _id: Math.random().toString(36).substring(2, 8),
      username: username.value,
      email: email.value,
      password: password.value,
      createdAt: "08/01/2020 10:00 AM",
      isLoggedIn: false,
    });
    setInterval(() => {
      pop_up.classList.add("active");
      container.classList.add("active");
    }, 2000);
  }
  console.log(users);
  return users;
};

console.log(users);
submit.addEventListener("click", register);
