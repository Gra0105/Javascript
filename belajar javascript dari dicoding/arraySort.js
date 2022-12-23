// sesuai namanya, untuk mengurutkan
// secara default pengurutannya sesuai ascending

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);

// Contoh pengurutan di atas didasarkan pada pengurutan bentuk tipe data string. Oleh karena itu, ketika kita ingin mengurutkan sesuai dengan kriteria yang kita inginkan 
// (berdasarkan tanggal ataupun berdasarkan nilai siswa) maka kita perlu membuat compare function tersendiri.

const array2 = [1, 30, 4, 1000];

const ascending = (a, b) => {
    return a - b;
};
/* const descending = (a, b) => {
    return b - a;
} */
/* const tetap = (a, b) => {
    return 0;
} */

const asc = array2.sort(ascending);
// const desc = array2.sort(descending);
// const stay = array2.sort(tetap);

console.log(asc);
// console.log(desc);
// console.log(stay);