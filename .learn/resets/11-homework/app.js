const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

// ...existing code...
const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));
// ...existing code...

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87,  // british pound
}

// Convierte dólares a yenes
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}

// Convierte yenes a libras
const fromYenToPound = (yens) => {
    const euros = yens / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}

// ...existing code...
module.exports = { sum, fromEuroToDollar };