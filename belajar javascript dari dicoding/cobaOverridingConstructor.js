class Mail {
    constructor(author){
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts(){
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber){
        // super(); // jika kita tidak memasukkan variabel dari constructor yang kurang seperti phoneNumber, hasilnya akan undefined
        // penjelasan yang ditangkap saat ini
        super(username); // kita tidak bisa memasukkan variabel lebih dari 1
        // Hal itu terjadi karena constructor pada kelas parent kita sudah tergantikan dengan constructor turunannya. Solusinya, kita dapat memanfaatkan operator super() dengan memberikan nilai yang dibutuhkan untuk mengeksekusi constructor parent-nya. Sehingga constructor parent tetap terpanggil dengan benar.
        // jadi super bisa diberi variabel lebih dari 1, seperti pada file "quizOOP.js"
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
}

const wa1 = new WhatsApp('dicoding', true, '0855432342');

console.log(wa1.from);