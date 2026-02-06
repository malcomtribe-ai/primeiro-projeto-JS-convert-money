const converterButton = document.querySelector(".convert-button")
const currencySelectConverted = document.querySelector(".currency-select-converted")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")

const currencyValues = {
  real: 1,
  dolar: 5.24,
  euro: 6.19,
  libra: 7.16,
  bitcoin: 382855.19
}

function convertValues() {
  const inputCurrencyValue = Number(document.querySelector(".input-currency").value) || 0

  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
  const currencyValue = document.querySelector(".currency-value")

  const currencySelectFrom = currencySelectToConvert.value
  const currencySelectTo = currencySelectConverted.value

  const valueInReal = inputCurrencyValue * currencyValues[currencySelectFrom]
  const convertedValue = valueInReal / currencyValues[currencySelectTo]

  currencyValue.innerHTML = formatCurrency(convertedValue, currencySelectTo)
  currencyValueToConvert.innerHTML = formatCurrency(inputCurrencyValue, currencySelectFrom)
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.querySelector(".currency-img")

  if (currencySelectConverted.value == "real") {
    currencyName.innerHTML = "Real Brasileiro"
    currencyImg.src = "./assets/real.png"
  }

  if (currencySelectConverted.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImg.src = "./assets/dolar.png"
  }

  if (currencySelectConverted.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.png"
  }

  if (currencySelectConverted.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina"
    currencyImg.src = "./assets/libra.png"
  }

  if (currencySelectConverted.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./assets/bitcoin.png"
  }

  convertValues()
}


function changeCurrencyFrom() {
  const currencyNameFrom = document.getElementById("currency-name-from")
  const currencyImgFrom = document.querySelector(".img-currency")

  if (currencySelectToConvert.value == "real") {
    currencyNameFrom.innerHTML = "Real Brasileiro"
    currencyImgFrom.src = "./assets/real.png"
  }

  if (currencySelectToConvert.value == "dolar") {
    currencyNameFrom.innerHTML = "Dólar Americano"
    currencyImgFrom.src = "./assets/dolar.png"
  }

  if (currencySelectToConvert.value == "euro") {
    currencyNameFrom.innerHTML = "Euro"
    currencyImgFrom.src = "./assets/euro.png"
  }

  if (currencySelectToConvert.value == "libra") {
    currencyNameFrom.innerHTML = "Libra Esterlina"
    currencyImgFrom.src = "./assets/libra.png"
  }

  if (currencySelectToConvert.value == "bitcoin") {
    currencyNameFrom.innerHTML = "Bitcoin"
    currencyImgFrom.src = "./assets/bitcoin.png"
  }

  convertValues()
}



function formatCurrency(value, currency) {
  if (currency === "real") {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value)
  }

  if (currency === "dolar") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(value)
  }

  if (currency === "euro") {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(value)
  }

  if (currency === "libra") {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(value)
  }

  if (currency === "bitcoin") {
    return value.toFixed(6) + " BTC"
  }
}


currencySelectConverted.addEventListener("change", changeCurrency)
currencySelectToConvert.addEventListener("change", changeCurrencyFrom)
converterButton.addEventListener("click", convertValues)

// Inicializa valores e imagens ao carregar a página
changeCurrency()
changeCurrencyFrom()