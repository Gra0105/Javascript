function greeting(name, language){
    if (language === "English"){
        console.log(`Good Morning ${name}!`);
    }
    else if (language === "French"){
        console.log(`Bonjour ${name}!`);
    }
    else {
        console.log(`Selamat Pagi ${name}!`);
    }
}

greeting ("Harry", "");

//kita juga bisa menghasilkan output atau mengembalikan sebuah nilai

function multiply(a, b){
    return a * b;
}

let perkalian = multiply(2, 4);

console.log(perkalian);

//fungsi return tidak hanya digunakan untung angka, tapi juga bisa huruf seperti greeting
/* 
function greeting(name, language){
    if (language === "English"){
        return `Good Morning ${name}!`
    }
    else if (language === "French"){
        return `Bonjour ${name}!`
    }
    else {
        return `Selamat Pagi ${name}!`
    }
}

let menyapa = greeting("Harry", "English");
console.log(menyapa);

*/