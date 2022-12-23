/*function exponentsFormula(baseNumber, exponent) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);*/

// jika menggunakan kode diatas, hasilnya akan seperti ini
// 2^undefined = NaN

// kita bisa menggunakan nilai default pada parameter apabila kita tidak ingin
// memasukkan nilai pada parameter yang lain

function exponentsFormula(baseNumber, exponent = 3) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);