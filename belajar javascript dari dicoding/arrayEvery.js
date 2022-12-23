// dapat digunakan untuk mengecek apakah semua nilai array sesuai dengan kriteria
const scores = [70, 85, 90];
// const scores = [60, 85, 90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);