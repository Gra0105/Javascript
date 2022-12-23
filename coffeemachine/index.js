/* const coffeeStock = require("./state") // variable const dapat ditulis bebas
// const stokkopi = require("./state")

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}
 
makeCoffee("robusta", 190);
makeCoffee("arabica", 80); 
*/

/* const {coffeeStock, isCoffeeMachineReady} = require('./state');
// pada import ini kita menggunakan destructuring object, sehingga nama di dalam const dan objek pada state harus memiliki nama yang sama
console.log(coffeeStock);
console.log(isCoffeeMachineReady); 
*/

// export default
/* import coffeeStock from "./state.js";

const displayStock = stock => {
    for(const type in stock){
        console.log(type);
    }
}

displayStock(coffeeStock);
// Saat ini, fitur ES6 module tidak secara default diaktifkan. Pesan eror di atas menyebutkan dua cara bagaimana mengaktifkan ES6 module. 
// Dua cara tersebut adalah menambahkan properti pada package.json 
// atau dengan mengubah ekstensi .js menjadi .mjs. Mari kita gunakan cara pertama yang lebih sederhana.

*/

// mendapatkan 2 variabel exports dengan destructuring

// import { coffeeStock, isCoffeeMachineReady } from './state.js'; 
//tentu karena kita menggunakan destructuring kita harus menulis variabel dengan tepat
// tetapi jika masih ingin memaksa, kita dapat menggunakan keyword as
// contoh 
import { coffeeStock as stock, isCoffeeMachineReady } from './state.js'; 

console.log(stock);
console.log(isCoffeeMachineReady);