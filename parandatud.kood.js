function matemaatilisedArvutused2(a, b) {
    let summa = a + b;
    let vahe = a - b;
    let jagatis = Math.floor(a / b);
    let korrutis = a * a;

    return { summa, vahe, jagatis, korrutis };
}

console.log(matemaatilisedArvutused2(10, 5)); 
// oodatav vastus: { summa: 15, vahe: 5, jagatis: 2, korrutis: 100 }

module.exports = matemaatilisedArvutused2; // Export the function