const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

const isCoffeeMachineReady = true;

// kita tidak bisa mengexport module dengan bersamaan seperti berikut
// module.exports = coffeeStock;
// module.exports = isCoffeeMachineReady;

// satu satunya cara adalah memanfaatkan object literals ({})

// module.exports = {coffeeStock, isCoffeeMachineReady};

// kita juga dapat menggunakan export default contoh:

//  export default coffeeStock;

// jika terdapat 2 variabel, kita bisa menggunakan destructuring
export {coffeeStock, isCoffeeMachineReady};