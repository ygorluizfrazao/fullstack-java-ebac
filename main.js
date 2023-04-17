const input1 = document.getElementById("primeiro-numero");
let input1Valid = false;
const input2 = document.getElementById("segundo-numero");
let input2Valid = false;
const errorMessage1 = document.getElementById("first-error-message");
const errorMessage2 = document.getElementById("second-error-message");

const submitButton = document.getElementById("submit-button");
const submitErrorMessage = document.getElementById("submit-error-message");

const maxValue = 50;
const minValue = 0;

const validaEvent = function (event, errorMessageContainer, input) {
  const value = event.target.value;
  if (!validaNum(value, minValue, maxValue)) {
    errorMessageContainer.innerHTML = `Deve ser um número entre ${minValue} e ${maxValue}`;
    errorMessageContainer.style.display = "block";
    input.classList.remove("success-input");
    input.classList.add("error-input");
    return false;
  } else {
    errorMessageContainer.innerHTML = `Deve ser um número entre ${minValue} e ${maxValue}`;
    errorMessageContainer.style.display = "none";
    input.classList.remove("error-input");
    input.classList.add("success-input");
    return true;
  }
};

function validaNum(num, min, max) {
  if (isNaN(parseInt(num))) return false;
  if (num < min) return false;
  if (num > max) return false;
  return true;
}

function validaForm() {
  if (!input1Valid || !input2Valid) {
    submitErrorMessage.innerHTML = `As entradas devem ser válidas.`;
    submitErrorMessage.style.display = "block";
    return false;
  }

  if (parseInt(input2.value) <= parseInt(input1.value)) {
    submitErrorMessage.innerHTML = `Segundo número deve ser maior que o primeiro.`;
    submitErrorMessage.style.display = "block";
    return false;
  }

  submitErrorMessage.innerHTML = "";
  submitErrorMessage.style.display = "none";
  return true
}

input1.addEventListener("change", function (e) {
  input1Valid = validaEvent(e, errorMessage1, input1);
  submitButton.disabled = !validaForm();
});
input1.addEventListener("keyup", function (e) {
  input1Valid = validaEvent(e, errorMessage1, input1);
  submitButton.disabled = !validaForm();
});

input2.addEventListener("change", function (e) {
  input2Valid = validaEvent(e, errorMessage2, input2);
  submitButton.disabled = !validaForm();
});
input2.addEventListener("keyup", function (e) {
  input2Valid = validaEvent(e, errorMessage2, input2);
  submitButton.disabled = !validaForm();
});

submitButton.addEventListener("click", function (e){
    alert("Parabéns, o seu form funciona!")
})
