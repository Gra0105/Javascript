// parameter birthday dapat berupa miliseconds ataupun date string
// contoh date
const myAge = birthday => {
    const ultah = new Date(birthday);
    const today = Date.now(); // today menghasilkan nilai miliseconds saat ini

    const diff_ms = today - ultah.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
    const diffDate = new Date(diff_ms);

    return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds 
};

console.log(myAge('2000-01-22')); 

// contoh lain
const listofContent = [1, 2, "President", {}];
console.log(Array.isArray(listofContent));
// result is true

const splitText = "12:20:11".split(':');
console.log(splitText);
// [ '12', '20', '11' ]