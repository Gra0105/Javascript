// hampir mirip seperti array.some
// array.find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu
// dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi pada item array

const students = [
    {
        name: 'Hari',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Beti',
        score: 80,
    }
];

const findBeti = students.find(student => student.name === 'Beti');
console.log(findBeti);