// cara 1
// yaitu menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`)

var contacts = [];
// contoh
function Mail(){
    this.from = `pengirim@dicoding.com`;
    var contacts = [];
}

// cara 2
// cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`

this._contacts = []
// contoh
class Mail {
    constructor(){
        this._contacts = [];
        this.from = 'pengirim@dicoding.com';
    }
}

// sebenarnya ada 1 cara lagi akan tetapi belum sepenuhnya didukung oleh js engine lama
// cara 3
// menambahkan prefix #, cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja

// #contacts = [];
// contoh 
class Mail {
    #contacts = [];
    constructor(){
        this.from = 'pengirim@dicoding.com';
    }
}