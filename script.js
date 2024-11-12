/* 
    * Objek adalah kumpulan data dan/atau fungsi terkait. Ini biasanya terdiri dari beberapa variabel dan fungsi (yang disebut properti dan metode ketika berada di dalam objek). - MDN Web Docs
*/

//* Membuat Object

//! Dalam membuat Object disarankan menggunakan 'const'
// 1.
const myObj = {} // Membuat Object Kosong.

// 2.
const hisObj = new Object() // Membuat Object Kosong.

const notMyObj = { 
    name: 'John',
    teman: 'Alex',
    motor: 'Beat Street',
    age: 15 
} // Membuat Object yang memiliki isi.

const nestedObj = {
    nama: 'Satria',
    teman: 'Siku',
    alatMusik: {
        alat1: 'Keyboard',
        alat2: 'Gitar',
        alat3: 'Melodica',
        alat4: 'Pukul lele'
    }
} // Nested Object, Object yang berada di dalam Object lainnya.

//* Mengakses Object

// console.log(notMyObj) // Menampilkan seluruh isi Object.

console.log(notMyObj.name) // Menampilkan suatu value yang ada di Object.
// console.log(notMyObj['name']) // Sama aja tapi pake kurung siku.

for (const key in notMyObj) {
    console.log(notMyObj[key])
}


//* Mengubah Object

notMyObj.age = 99 // Mengubah value suatu properti dari Object.
// console.log(notMyObj)

notMyObj.rumah = 'Tapos' // Menambahkan properti ke Object.
console.log(notMyObj)

delete notMyObj.rumah // Menghapus properti dari Object.
console.log(notMyObj)
