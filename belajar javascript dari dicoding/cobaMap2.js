const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London")); //get() digunakan untuk memanggil value tertentu
capital.set("New Delhi", "India"); //set() digunakan untuk menambah value ke map
console.log(capital.size);
console.log(capital.get("New Delhi"));