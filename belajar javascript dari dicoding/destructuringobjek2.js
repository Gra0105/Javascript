//untuk ini kita akan mencoba mendeklarasikan variabel yang ternyata diperbarui

const profil = {
    nama: "Deo",
    umur: "17"
}

let nama = "Dimas";
let age = 20;
//jadi kalau kita ingin mendeklarasikan variabel jika terdapat nilai baru
//kita diwajibkan menambahkan () pada pendeklarasian di baris 12
({nama, umur} = profil);
//akan tetapi untuk isi tetap sama seperti pada object, tidak berubah yang baru
console.log(nama);
console.log(umur);