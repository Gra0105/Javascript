let a = 5;
let b = 10;

console.log(a < 10 && b > 5); // (true && true) -> true
console.log(a < 10 && b < 5); // (false && true) -> false
console.log(a > 10 && b < 5); // (false || false) -> false
// And (&&) selama hasilnya terdapat false, maka hasilnya akan false jika tidak maka true

console.log(a < 10 || b > 5); // (true || true) -> true
console.log(a < 10 || b < 5); // (false || true) -> true
console.log(a > 10 || b < 5); // (false || false) -> false
// Or (||) selama hasilnya terdapat true, maka hasilnya akan true jika tidak maka false

console.log(!(a < 10)); // !(true) -> false
console.log(!(a > 10)); // !(false) -> true
console.log(!(a < 10 && b > 5)); // !(true && true) -> !(true) -> false
console.log(!(a < 10 && b < 5)); // !(true && false) -> !(false) -> true
// Not (!) akan menampilkan hasil yang berlawanan dari proses sebelumnya
//seperti !(true) maka hasilnya akan false dan sebaliknya