const profil = {
    firstName: "Sola",
    lastName: "Gracia",
    umur: 17
}


const {firstName, lastName, umur} = profil;
//const {umur} = profil; //kita juga bisa memasukkan satu variabel saja 

//jika kita tidak menggunakan baris 8, maka disaat kita akan mengeprint objek harus seperti ini

//console.log(profil.firstName, profil.lastName, profil.umur);

//dengan baris 8 kita b isa mempermudah penyebutan variabel
console.log(firstName, lastName, umur);
console.log(umur);