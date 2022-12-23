// masih bingung konsep, tapi disini contohnya bisa dipakai untuk menjumlahkan nilai siswa

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

const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);