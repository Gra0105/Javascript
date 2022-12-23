const profil = {
    nama: "Sola",
    umur: 17,
    kabar: "Nganggur"
}
//sebenarnya kita bisa membuat sebutan baru untuk variabel pada destructuring
const {nama: namalokal, umur: umurlokal, kabar: kabarlokal} = profil;

console.log(namalokal);
console.log(umurlokal);
console.log(kabarlokal);