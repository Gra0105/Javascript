 class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}

// let json = '{ "name": "Yoda", "age": 20}'; 

// let json = '{bad json}'; // karena disini kita mengetes error, maka kita menggunakan baris yang dapat menimbulkan error
// Apabila json tidak sesuai format, maka JSON.parse akan menimbulkan eror. Eror tersebut akan ditangkap oleh blok catch dan kode di dalamnya yang akan dieksekusi.

 let json = '{"age": 20}'; // jika formatnya seperti ini, maka user.name akan menghasilkan undefined
// akan tetapi catch tidak akan menganggap undefined tersebut sebagai error, maka dari itu untuk menambal kekurangan catch kita dapat menggunakan throw

try {
    let user = JSON.parse(json);  // parse disini akan digunakan untuk memisahkan nilai variabel

    if (!user.name){
        throw new SyntaxError("'name' is required.");
    }

    if (!user.age){
        throw new ValidationError("'age' is required.");
    }

    errorCode;

    console.log(user.name);
    console.log(user.age);
} 
catch (error) {
    /*console.log(error.name);
    console.log(error.message); */
    
    // console.log(`JSON Error: ${error.message}`);
    // JSON Error digunakan untuk mendeteksi error yang ada pada JSON.parse

    // Eror berhasil ditangani, tetapi konsol tetap menampilkan pesan “JSON Error”, lantas bagaimana kita bisa menampilkan pesan eror sesuai eror yang muncul?
    // Jawabannya adalah dengan if statement.
   /* if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    }
    else if (error instanceof ReferenceError){
        console.log(error.message);
    }
    else {
        console.log(error.stack);
    }
    // Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi. Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
*/

    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    }
    else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    }
    else if (error instanceof ReferenceError) {
        console.log(error.message);
    }
    else {
        console.log(error.stack);
    }
}