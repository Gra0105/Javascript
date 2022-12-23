/*function init() {
    var name = 'Obi Yukata'; //variabel lokal di dalam scope fungsi init

    function greet() { //inner function, merupakan contoh closure
        console.log(`Halo, ${name}`); //memanggil variabel yang dideklarasikan di parent function
    }

greet();
}

init();
*/
// beneran kayak inheritance java

// cara lain
function init() {
    var name = 'Obi Yukata';

    function greet() {
        console.log(`Halo, ${name}`);
    }
    return greet;
}

let myFunction = init();
myFunction();