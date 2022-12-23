let negara = "Korea";
let sapaan = null;

switch(negara) {
    case "English" : 
    sapaan = "Good Morning";
    break;

    case "French" :
        sapaan = "Bonjour";
    break;

    case "Japan" :
        sapaan = "Ohayo";
    break;

    default :
        sapaan = "Selamat Pagi";
}

console.log(sapaan);