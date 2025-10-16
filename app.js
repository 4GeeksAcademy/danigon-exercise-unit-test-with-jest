// ...existing code...
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87,  // british pound
}

// tasas derivadas (evitan recomputar y reducen pequeñas diferencias de orden de operaciones)
const yenPerEuro = oneEuroIs.JPY;
const usdPerEuro = oneEuroIs.USD;
const gbpPerEuro = oneEuroIs.GBP;

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * usdPerEuro;
}

const sum = (a,b) => {
    return a + b;
}

// Convierte dólares a yenes usando una tasa directa y normalizando precisión
const fromDollarToYen = (dollars) => {
    const rate = yenPerEuro / usdPerEuro; // JPY per USD
    return Number((dollars * rate).toFixed(15));
}

// ...existing code...
// Convierte yenes a libras usando la tasa GBP/JPY (calculada desde EUR)
const fromYenToPound = (yens) => {
    // calcular directamente GBP por JPY para evitar pérdidas por redondeo
    return (yens * oneEuroIs.GBP) / oneEuroIs.JPY;
}
 // ...existing code...
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };