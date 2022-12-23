let arrayku = ["Sola Gracia Deo Andrew", 17.7, 168];
const arraysaya = ["Sola Gracia", 17, 168, 56];

console.log(arrayku);
console.log(arrayku[0]);
console.log(arrayku[1]);
console.log(arrayku[2]);
//untuk menampilkan sebuah nilai dari array, kita bisa menggunakan [] setelah variabel
//dan diisi dengan urutan angka yang mewakili nilai tersebut
//setiap nilai selalu diawali dari 0

//kita bisa melihat jumlah data yang terdapat pada array
console.log("jumlah array yang dimiliki adalah " + arrayku.length + ".");

//gunakan push() untuk menambahkan data pada array
//arraysaya.push("pelajar");

//gunakan pop() untuk mengeluarkan data terakhir pada array
//arraysaya.pop();

//gunakan shift() dan unshift() untuk mengeluarkan dan menambah nilai pertama array
//arraysaya.shift();
//arraysaya.unshift("Halo");

//gunakan delete untuk menghapus, akan tetapi yang dihapus akan tergantikan dengan nilai kosong
//yang berarti tidak hilang sepenuhnya
//delete arraysaya[0];

//untuk menghapus sepenuhnya, gunakan splice()
//arraysaya.splice(2,1); //2 menandakan urutan, dan 1 menunjukkan jumlah data yang dihapus dari urutan nomor 2


console.log(arraysaya);
