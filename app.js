// function to fetch exchange rate from API

async function fetchData(fromCurrency, toCurrency) {
  const res = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
  const data = await res.json();
  const rates = data.rates[toCurrency];
  return rates;
}

// funnction to handle currency conversion

async function handleConvert() {
  let fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const amount = document.getElementById("amount").value;
  const result = document.getElementById("result");

  const rate = await fetchData(fromCurrency, toCurrency);
  if (!isNaN(amount)) {
    const convertedAmount = (rate * amount).toFixed(2);
    result.innerHTML += `<div><span> ${amount} ${fromCurrency} </span> = <span>${convertedAmount} ${toCurrency}</span> </div>`;
  } else {
    console.log("invalid amount type");
  }
}


document.querySelector("#convertBtn").addEventListener("click", handleConvert);
