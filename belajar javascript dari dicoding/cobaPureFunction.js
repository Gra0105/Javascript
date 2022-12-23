// pure function tidak bergantung terhadap nilai luar maupun mengubah nilai yang berada di luar

// contoh pure function
const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
}

console.log(hitungLuasLingkaran(4));
console.log(hitungLuasLingkaran(4));
console.log(hitungLuasLingkaran(8));
console.log(hitungLuasLingkaran(8));

const createPersonWithAge = (age, person) => {
    return { ...person, age};
};

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});