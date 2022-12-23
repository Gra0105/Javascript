const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

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

const eligibleForScholarshipStudents = students.filter((student) => student.score > 80);

console.log(eligibleForScholarshipStudents);