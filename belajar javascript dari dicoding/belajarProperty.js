class Mail {
    constructor(){
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
    }
    sendMessage(msg, to, from){
        console.log(`you send: ${msg} to ${to} from ${from}`);
        // from disini merujuk kepada from parameter "sendMessage()"
        this.contacts.push(to); // untuk menginisialisasi ataupun mengakses sebuah attribute global dari sebuah kelas, maka harus menggunakan this.attributeName
    }
};

const mail1 = new Mail();
mail1.sendMessage('hello', 'penerima@dicoding.com', 'aku@gmail.com');

// this merupakan representasi bahwasanya variable yang ditunjuk adalah atribute yang bersifat global 
// dan menempel dengan objek tersebut.