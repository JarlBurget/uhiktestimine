// testing.js
const matemaatilisedArvutused2 = require('./parandatud.kood.js');

test('matemaatilised arvutused2', () => {
    const tulemus = matemaatilisedArvutused2(10, 5);

    expect(tulemus.summa).toBe(15);  // Õige summa
    expect(tulemus.vahe).toBe(5);    // Õige vahe
    expect(tulemus.jagatis).toBe(2); // Õige jagatis
    expect(tulemus.korrutis).toBe(100);  // Õige korrutis
});

