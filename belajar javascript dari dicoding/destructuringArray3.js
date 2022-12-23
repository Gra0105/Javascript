//dengan destructuring assignment, kita bisa mempermudah penukaran nilai tanpa perlu memanggil variabel baru

var a = 1;
var b = 2;
//var temp;

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

/*temp = a;
a = b;
b = temp;
*/
//dengan destructuring assignment, kalian dapat mempermudah penukaran
[a, b] = [b, a]

console.log("Sesudah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);