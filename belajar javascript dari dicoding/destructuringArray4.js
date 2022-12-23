const favorit = ["Pecel"];

//const [myfood, herfood] = favorit; //sama seperti destructuring object, untuk herfood akan menjadi undefined

//jika ingin mengisi herfood, kita bisa menggunakan cara yang sama juga
const [myfood, herfood = "Lele"] = favorit;


console.log(myfood);
console.log(herfood);