const repaymentButton = document.querySelector("#repayment");
const interestButton = document.querySelector("#interest");

const monthlyValue = document.querySelector(".monthly-value");
const totalValue = document.querySelector(".total-value");

const resultContainer = document.querySelector(".result-container");

const calculateButton = document.querySelector(".calculate-button-container");

const clearBtn = document.querySelector('.clear-all');

let monthlyPayment = 0;
let totalRepayment = 0;

calculateButton.addEventListener("click", () => {
  const allInputs = document.querySelectorAll(`input[type="number"]`);
  let hasInputError = false;
  allInputs.forEach((input) => {
    const parentElement = input.closest(".box");
    const inputBox = input.closest(".input-box");

    const inputContent = inputBox.querySelector(".input-content");
    const inputText = inputContent.querySelector(".input-text");
    const value = input.value.trim();

    if (value === "") {
      parentElement.classList.add("show");
      inputBox.style.border = "1px solid red";
      inputContent.style.backgroundColor = "red";
      inputText.style.color = "white";
      hasInputError= true;
    } else {
      parentElement.classList.remove("show");
      inputBox.style.border = "1px solid hsl(200, 24%, 40%)";
      inputContent.style.backgroundColor = "hsl(202, 86%, 94%)";
      inputText.style.color = "hsl(200, 24%, 40%)";
    }
  });

  const allRadioBtns = document.querySelectorAll('input[type="radio"]');
  const radioContainer = document.querySelector(".mortgage-type-container");
  let isRadioSelected = false;

  allRadioBtns.forEach((radio) => {
    if (radio.checked) {
      isRadioSelected = true;
      radio.closest(".radio-button").style.backgroundColor =
        "rgb(210 210 100 / 11%)";
      radio.closest(".radio-button").style.border =
        "1px solid rgb(210 210 100)";
    } else {
      radio.closest(".radio-button").style.backgroundColor = "white";
      radio.closest(".radio-button").style.border =
        "1px solid hsl(200, 24%, 40%)";
    }
  });

  if (!isRadioSelected) {
    radioContainer.classList.add("show");
  } else {
    radioContainer.classList.remove("show");
  }

  if (!hasInputError && isRadioSelected) {
    calculateRepayments();
    resultContainer.parentElement.classList.add("calculate-payment");
  }
});

clearBtn.addEventListener('click',()=>{
  const allInputs = document.querySelectorAll(`input[type="number"]`);
  for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].value = '';
  }
  
  
  const allRadioBtns = document.querySelectorAll('input[type="radio"]');
  allRadioBtns.forEach((radio)=>{
    radio.checked = false;
    radio.closest(".radio-button").style.backgroundColor = "white";
    radio.closest(".radio-button").style.border =
    "1px solid hsl(200, 24%, 40%)";
  })
  resultContainer.parentElement.classList.remove("calculate-payment");
})

function calculateRepayments() {
  const amount = parseFloat(document.querySelector("#input-amount").value);
  const interest = parseFloat(document.querySelector("#input-interest").value);
  const years = parseFloat(document.querySelector("#input-term").value);
  const rate = interest / 100;

  if (repaymentButton.checked) {
    const monthlyRate = rate / 12;
    const n = years * 12;
    monthlyPayment =
      (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
    totalRepayment = monthlyPayment * n;
    monthlyValue.textContent = `$ ${monthlyPayment.toFixed(2)}`;
    totalValue.textContent = `$ ${totalRepayment.toFixed(2)}`;
  } else if (interestButton.checked) {
    monthlyPayment = (amount * rate) / 12;
    totalRepayment = monthlyPayment * years * 12;
    monthlyValue.textContent = `$ ${monthlyPayment.toFixed(2)}`;
    totalValue.textContent = `$ ${totalRepayment.toFixed(2)}`;
  }
}
