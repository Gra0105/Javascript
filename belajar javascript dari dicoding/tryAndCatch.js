// digunakan untuk memberi tau kita apabila terjadi error
try {
    console.log("Awal dari blok try");
    errorCode;
    console.log("Akhir dari blok try");
}
catch (error){
    console.log("Terjadi error!");
}

// kita dapat menambahkan name (nama error yang terjadi), message (pesan tentang detail erro), stack(Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error.) pada parameter

try {
    console.log("Awal blok try");
    errorCode;
    console.log("Akhir blok try");
}
catch (status){
    console.log(status.name);
    console.log(status.message);
    console.log(status.stack);
}
finally {
    console.log("blok finally akan tetap menjalankan program apapun yang terjadi")
}