// di dalam oop js, dapat ditemukan konsep yang berbeda dari oop lain
// yaitu konsep prototype, di dalam javascript kita bisa menuliskan class
// dengan 2 cara yaitu, dengan prototype dan tanpa prototype
// meski terkadang hasilnya sama, akan tetapi disarankan menggunakan prototype untuk pembuatan class

// dengan proto
/* function Mail() {
    this.from = 'pengirim@dicoding.com';
};

Mail.prototype.sendMessage = function(msg, to){
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
};
*/
// tanpa proto
function Mail(){
    this.from = "pengirim@dicoding.com",
    this.sendMessage = function(msg, to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
};

// pemanggilan
const mail1 = new Mail();
    mail1.sendMessage('hallo', 'penerima@dicoding.com');

    //masih ga paham perbedaannya dimana

    // objek yang menggunakan prototype 
    // tidak meng-copy atribut sendMessage ke setiap objek-objek.
    // Berbeda ketika kita tidak menggunakan prototype,
    // semua attribute di-copy ke setiap objek.
    // Dengan demikian, 
    // penggunaan prototype dapat menghemat alokasi memori yang digunakan.