//default values

const profil = {
    nama: "Sola",
    umur: 17,
    kabar: "Nganggur"
}

//const {nama, umur, adalahpria} = profil;

//jika kita membuat variabel baru yang bukan dari properti objek
//maka hasil dari adalahpria adalah undefined

//jika kita ingin melakukan dengan benar kita bisa menambahkan nilai pada variabel
//kita bisa menambahkan = "nilai" seperti dibawah 
const {nama, umur, adalahpria = "iya"} = profil;
//const {nama, umur = 16, adalahpria = "iya"} = profil;
//sayangnya kita tidak bisa menambahkan nilai pada variabel yang sudah ada
console.log(nama, umur, adalahpria);
