// disini kita bisa menggunakan untuk memilah, contoh berikut 
// kita akan melihat apakah ada angka genah dalam array

const array = [1, 2, 3 , 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);