const mail = {
    from: "pengirim@dicoding.com",
    // pada baris 2 kita juga bisa menggunakan code berikut
    // mail.from = "pengirim@dicoding.com";
    // atau menambahkan fungsi baru bernama saveContact
    /* mail.saveContact = function(addr){
        console.log(`email saved ${addr}`);
    }*/
    // contoh diatas merupakan penulisan dengan gaya format object literal
    sendMessage: function (msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
};

console.log(mail.from);
mail.sendMessage('apa kabar', 'penerima@dicoding.com');