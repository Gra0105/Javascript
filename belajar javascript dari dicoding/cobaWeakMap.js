let visitsCountMap = new Map(); //menyimpan daftar user

function countUser(user){
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count +1);
}
let jonas = {name: "Jonas"};
countUser(jonas); //menambahkan user jonas

jonas = null; //data object jonas dihapus

let jojo = {name: "Jojo", absen: 20}; //isi dalam kurung kurawa yang akan dicetak pada output
countUser(jojo);
jojo = null; 

//aslinya masih belum paham gimana, 1 itu apa di => 1, jadi kayaknya 1 itu jumlah data user
//untuk garbage collection masih berlanjut di weakmap 2
//karena di contoh ini kita tidak menggunakan weakmap

//untuk membuat garbage collector bekerja, kita membutuhkan delay
setTimeout(function(){
    console.log(visitsCountMap);
}, 10000)