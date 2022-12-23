const numberSet = new Set([1, 4, 6, 4, 1]);

numberSet.add(5); //fitur add() digunakan untuk menambahkan nilai
numberSet.delete(4); // untuk delete yang dihapus adalah nilainya bukan indeksnya atau urutan
//sehingga jika kita memasukkan 4 maka semua angka 4 akan dihilangkan

console.log(numberSet);

//data pada Set tidak berurutan dan juga tidak diindeks. 
//Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi.