// ...existing code...
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(dollars).toBe(expected);
});

test('fromDollarToYen: 1 USD -> 146.26168224299065 JPY', () => {
    const result = fromDollarToYen(1);
    expect(result).toBeCloseTo(146.26168224299065, 5);
});

// Ajuste: reducir precisión para tolerar pequeñas diferencias de FP
test('fromYenToPound: 1 JPY -> 0.005562913907284768 GBP', () => {
    const result = fromYenToPound(1);
    expect(result).toBeCloseTo(0.005562913907284768, 5);
});