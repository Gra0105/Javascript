const menu = ["Ratattouile", "Curry", "Udon", "Oden"];
const dessert = ["Cupcake", "Donut", "Puding"];

const semuamenu = [menu,dessert];//variabel ini masih belum bisa dikatakan menggabungkan kedua array
const menusemua = [...menu,...dessert];//kali ini menggunakan spread operator untuk menggabungkan kedua array

console.log(semuamenu);
console.log(menusemua);

//gabungkan object dengan object literals
const obj1 = { firstname : 'Sola', age : 18};
const obj2 = {lastname : 'Gracia', gender : 'M'};

const newobj = {...obj1, ...obj2};

console.log(newobj);