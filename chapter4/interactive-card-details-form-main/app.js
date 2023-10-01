const cardNumber = document.querySelector(".card-number");
const userID = document.querySelector(".user-id");
const date = document.querySelector(".date");
const cvcNumber = document.querySelector(".cvc");
// ----------------
const userIdInput = document.querySelector(".username");
const cardNumberInput = document.querySelector(".card-input-number");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const cvcInput = document.querySelector(".cvc-input");
const submit = document.querySelector("button");

const typeForm = () => {
  month.value = Number(month.value);

  userID.textContent = userIdInput.value;
  if (typeof month.value === "string") {
    alert("wrong format");
  } else {
    date.textContent = month.value + "/" + year.value;
  }

  cardNumber.textContent = cardNumberInput.value;
  cvcNumber.textContent = cvcInput.value;
};

submit.addEventListener("click", typeForm);
