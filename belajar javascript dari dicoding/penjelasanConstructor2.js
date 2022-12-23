// cara 1 
class Mail {
    constructor(author) {
        this.from = author;
        console.log('is instantiated', author);
    }
}

// cara 2
function Mail(author){
    this.from = author;
    console.log('is instantiated', author);
}

// cara pemanggilan

const mail1 = new Mail("emailku@dicoding.com");
// Karena JavaScript bukan bahasa dengan dukungan static type maka sebenarnya 
// kita dapat melakukan instansiasi dengan parameter sesuka kita
// contoh

// const mail1 = new Mail(085962323333);
// const mail1 = new Mail("emailku@dicoding.com");