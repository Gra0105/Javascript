const menjelaskan = {
    nama: "Kapal lama",
    berat: "5 ton",
    tinggi: "20 meter",
    umur: 2
};

menjelaskan.nama = "Kapal Baru";
menjelaskan["umur"] = 1;

delete menjelaskan.umur;//gunakan delete apabila kita tidak ingin memasukkan salah satu properties
console.log(menjelaskan);


/*
Yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi ulang nilai. 
Ketika membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga 
kita masih bisa memodifikasi nilainya. Berbeda jika kita menginisialisasi ulang variabel dari object.
*/

//contoh salah
/*
menjelaskan = {nama: "Kapal Baru"};
*/