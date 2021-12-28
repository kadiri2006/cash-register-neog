let bill = document.getElementById("bill-amount");
let givenAmount = document.getElementById("given-amount");
let btn = document.getElementById("btn-check");
let errorBillAmount = document.getElementById("error-bill-amount");
let errorGivenAmount = document.getElementById("error-given-amount");
let noteSelection = document.querySelectorAll(".note-number");
let balance = document.getElementById("balance");

let bankNotes = [2000, 500, 100, 20, 10, 5, 1];

btn.addEventListener("click", function () {
  removeError();

  if (parseInt(bill.value) > 0) {
    if (
      parseInt(givenAmount.value) > 0 &&
      parseInt(givenAmount.value) >= parseInt(bill.value)
    ) {
      let change = parseInt(givenAmount.value) - parseInt(bill.value);
      balance.innerHTML = `Balance: ${change}`;
      balance.style.backgroundColor = "lightgreen";
      for (let index = 0; index < bankNotes.length; index++) {
        let noteNumber = Math.trunc(change / bankNotes[index]);
        if (noteNumber > 0) {
          noteSelection[index].innerHTML = noteNumber;
        } else {
          noteSelection[index].innerHTML = "";
        }
        change %= bankNotes[index];
      }
    } else {
      errorGivenAmount.innerHTML = "Please enter a valid given amount";
      errorGivenAmount.removeAttribute("hidden");
      errorGivenAmount.style.color = "red";
    }
  } else {
    errorBillAmount.innerHTML = "Please enter a valid bill amount";
    errorBillAmount.removeAttribute("hidden");
    errorBillAmount.style.color = "red";
  }
});

function removeError() {
  errorGivenAmount.setAttribute("hidden", true);
  errorBillAmount.setAttribute("hidden", true);
}
