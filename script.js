const bg = document.getElementById("bg");

if (window.innerWidth >= 900) {
  bg.src = "images/bg-main-desktop.png";
}

const number = document.getElementById("entered-number");
const wrongNum = document.getElementById("wrong_number");

number.addEventListener("change", function () {
  if (number.value.match(/[^\d\s]+/)) {
    number.classList.toggle("error");
    wrongNum.style.display = "block";
    number.value = "";
  } else {
    number.classList.remove("error");
    wrongNum.style.display = "none";
  }
});

const month = document.getElementById("entered-month");
const blanked = document.getElementById("blanked");

month.addEventListener("change", function () {
  if (month.value === "") {
    month.classList.toggle("error");
    blanked.style.display = "block";
  } else {
    month.classList.remove("error");
    blanked.style.display = "none";
  }
});

const year = document.getElementById("entered-year");

year.addEventListener("change", function () {
  if (year.value === "") {
    year.classList.toggle("error");
    blanked.style.display = "block";
  } else {
    year.classList.remove("error");
    blanked.style.display = "none";
  }
});

const enteredCvc = document.getElementById("entered-cvc");
const blankedcvc = document.getElementById("blankedcvc");

enteredCvc.addEventListener("change", function () {
  if (enteredCvc.value === "") {
    enteredCvc.classList.toggle("error");
    blankedcvc.style.display = "block";
  } else {
    enteredCvc.classList.remove("error");
    blankedcvc.style.display = "none";
  }
});

const submit = document.getElementById("confirm");
const name = document.getElementById("name");
const enteredName = document.getElementById("entered-name");
const cardNum = document.getElementById("card-number");
const cvc = document.getElementById("cvc");
const monthDisplay = document.getElementById("month");
const yearDisplay = document.getElementById("year");
const inputs = document.getElementById("inputs");
const completeCon = document.getElementById("complete_con");
const blankName = document.getElementById("blank_name");

submit.addEventListener("click", function () {
  if (
    enteredName.value != "" &&
    number.value != "" &&
    month.value != "" &&
    enteredCvc.value !== ""
  ) {
    if (enteredName.value !== "" && enteredName.value !== null) {
      name.innerHTML = enteredName.value;
    }

    if (number.value !== "" && number.value !== null) {
      cardNum.innerHTML = number.value;
    }

    if (enteredCvc.value !== "" && enteredCvc.value !== null) {
      cvc.innerHTML = enteredCvc.value;
    }

    if (month.value !== "" && month.value !== null) {
      monthDisplay.innerHTML = month.value;
    }

    if (year.value !== "" && year.value !== null) {
      yearDisplay.innerHTML = year.value;
    }
    inputs.style.display = "none";
    completeCon.style.display = "flex";
    enteredName.classList.remove("error");
  } else {
  }
});

completeCon.addEventListener("click", function () {
  inputs.style.display = "block";
  completeCon.style.display = "none";
  enteredName.value = "";
  number.value = "";
  month.value = "";
  year.value = "";
  enteredCvc.value = "";
});
