const currencyElement_1 = document.getElementById("currency-1");
const amountElement_1 = document.getElementById("amount-1");
const currencyElement_2 = document.getElementById("currency-2");
const amountElement_2 = document.getElementById("amount-2");
const rateElement = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculation() {
  const currency_1 = currencyElement_1.value;
  const currency_2 = currencyElement_2.value;

  //Getting rates and updating
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_1}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_2];
      rateElement.innerText = `1 ${currency_1} = ${rate} ${currency_2}`;
      amountElement_2.value = (amountElement_1.value * rate).toFixed(3);
    });
}

//eventListeners
currencyElement_1.addEventListener("change", calculation);
amountElement_1.addEventListener("input", calculation);
currencyElement_2.addEventListener("change", calculation);
amountElement_2.addEventListener("input", calculation);
swap.addEventListener("click", () => {
  const temp = currencyElement_1.value;
  currencyElement_1.value = currencyElement_2.value;
  currencyElement_2.value = temp;
  calculation();
});
calculation();
