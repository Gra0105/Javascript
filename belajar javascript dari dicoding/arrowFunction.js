/* 
//function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}

// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`);
} */

// kita dapat mempermudah penyebutan function dengan arrow function
// contoh:
/*
const sayName = (name) => {
    console.log(`Nama saya ${name}`);
}

sayName("Leia");

const sayHello = () => { //jika kita tidak perlu mengisi parameter, kita tetap harus memasukkan nilai kosong dalam tanda kurung
    console.log("Selamat Pagi Semuanya!");
}

sayHello();
*/
// kita juga bisa mempersingkat baris dengan tidak menuliskan {}
const sayName = name => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello = () => console.log("Selamat Pagi Semuanya");
sayHello();

// Ketika sebuah fungsi perlu mengembalikan nilai, 
// kita tidak perlu lagi menuliskan return 
// (hanya bekerja untuk fungsi satu baris).

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));