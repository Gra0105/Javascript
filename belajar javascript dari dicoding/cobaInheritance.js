class Mail {
    constructor(author){
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    constructor(author) {
        super (author);
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    }
    myProfile(){
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`
    }
}

const wal = new WhatsApp('080111000111');
console.log(wal.myProfile());

// Kita juga dapat mengakses attribute maupun method dari parent class yang Accessible.
// contoh
wal.sendMessage('halo', '089512341221');