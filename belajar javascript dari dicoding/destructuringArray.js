const favorit = ["Lele", "Pecel", "Soto", "Bubur"];

const [firstfood, secondfood, thirdfood, fourthfood] = favorit;
//di array kita menggunakan []
//untuk variabel pada baris 3, kita bisa menggunakan nama sesuai yang diinginkan
//akan tetapi kita harus melihat urutan pada destructuring dan array
//variabel pertama akan diisi dengan array pertama dan seterusnya

//kita juga bisa memberikan nama variabel baru pada array tertentu

//const [ , , thirdfood] = favorit;

//dengan menggunakan koma kita menunjukkan kalau kita lgsg melompat ke variabel 3
//jika kita lgsg mengisinya dengan thirdfood tanpa koma, maka array yang terpanggil adalah lele dan bukan soto

console.log(firstfood);
console.log(secondfood);
console.log(thirdfood);
console.log(fourthfood);