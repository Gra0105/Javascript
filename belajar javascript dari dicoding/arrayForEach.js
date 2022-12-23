const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

names.forEach((name) => {
    console.log(`Hello, ${name}!`);
});

// jika kita menggunakan foreach kita tidak bisa menggunakan continue atau break yang dapat dilakukan pada fungsi for

for(let i =0; i <names.length;i++){
    if(names[i] === 'Jeff') continue;

    console.log(`Hello, ${names[i]}!`);
}