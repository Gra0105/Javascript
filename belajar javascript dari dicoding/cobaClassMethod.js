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
const mail1 = new Mail(); //bagian ini diwajibkan untuk ada apabila menggunakan class method
// untuk baris 12, baris ini dinamakan instantiate
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'pengirim@dicoding.com');
