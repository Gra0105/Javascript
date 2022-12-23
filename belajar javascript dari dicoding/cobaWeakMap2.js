const { count } = require('console');
const {inspect} = require('util');

let visitsCountMap = new WeakMap(); //menyimpan daftar user

function countUser(user){
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = {name: "Jonas"};
countUser(jonas); //menambahkan user jonas
jonas = null; //data object "jonas dihapus"

//seperti biasa, garbage collector membutuhkan delay untuk bekerja
setTimeout(function(){
    console.log(inspect(visitsCountMap, {showHidden: true}));
}, 10000);

//masih error dalam menjalankan weakmap, karena dikatakan waktu yang dibutuhkan untuk delay kurang lama
//dikatakan solusinya adalah memperpanjang delay pada 10000, akan tetapi sudah saya coba dan belum berhasil
//jadi saya akan lgsg memberikan output seharusnya disini

//WeakMap{ }

// contoh output = https://replit.com/@DimasSaputra/WeakMapSample