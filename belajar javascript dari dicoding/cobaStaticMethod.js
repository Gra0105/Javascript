class Mail{
    static isValidPhone(phone){
        return typeof phone === 'number';
    }
}

Mail.isValidPhone(089000000000);
// pada static method kita tidak perlu meng instantiate class
// Kita cukup menuliskan nama kelas dan nama method-nya secara langsung (NamaClass.namaMethod()).
// masih bingung bjir