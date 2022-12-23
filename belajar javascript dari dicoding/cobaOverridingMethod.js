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
        super(phoneNumber);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }

    // override method = melakukan Override total
sendMessage(msg, to) {
    // Untuk tetap melakukan eksekusi kode pada parent class maka perlu menggunakan operator super.methodName().
    super.sendMessage(msg, to);
    console.log('Send by WA');
}
}

const wa1 = new WhatsApp('dicoding', true, '0890003432');
wa1.sendMessage('halo', '0824623234');

// super() digunakan untuk memanggil constructor parent dan hanya dapat digunakan di constructor
// super.methodName() digunakan untuk memanggil parent method