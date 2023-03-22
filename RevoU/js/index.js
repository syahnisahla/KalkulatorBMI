// mengambil semua elemen
const nama = document.querySelector('.nama')
const umur = document.querySelector('.umur')
const beratBadan = document.querySelector('.berat-badan')
const tinggiBadan = document.querySelector('.tinggi-badan')
const tombolHitung = document.querySelector('.btn-hitung')
const reset = document.querySelector('.btn-reset')
const modalBody = document.querySelector('.modal-body')
const form = document.querySelector('#myForm')

// document.querySelector(".berat-badan").addEventListener("input", x => console.log(x.target.value))

// saat tombol hitung diklik
tombolHitung.addEventListener('click', function () {
    // mengecek apakah ada data yg diinput atau tidak
    if (beratBadan.value <= 0 || tinggiBadan.value <= 0 || nama.value <= 0 || umur <= 0) {
        form.reset()
        return modalBody.innerHTML = `<div class="alert alert-danger" role="alert">
        Mohon Isi data yang valid
      </div>`

    }
    let hasilIndex = hitungIndex(beratBadan.value, tinggiBadan.value)
    let hasilKategori = kategoriIndex(hasilIndex)
    let ket = ketKategori(hasilKategori)


    modalBody.innerHTML = buatElemen(nama.value, umur.value, hasilIndex, hasilKategori, ket)


    // console.log(ket)
})

// reset from
//reset.addEventListener(function myFunction() {
 //   document.getElementById("myForm").reset();
//})

// hitung indeks

const hitungIndex = (bb, tb) => {
    let tinggiBadan = tb / 100
    let hasil = bb / (tinggiBadan * tinggiBadan)
    return hasil
}

// mengisi kategori
const kategoriIndex = (index) => {
    let kategori = ''

    if (index <= 18.5) {
        kategori = 'Kekurangan berat badan'
    } else if (index > 18.5 && index <= 24.9) {
        kategori = 'Normal'
    } else if (index > 25.00 && index <= 29.9) {
        kategori = 'Kelebihan berat badan'
    } else if (index > 30.0) {
        kategori = 'Kegemukan (Obesitas)'
    }

    return kategori

}

// menentukan tips
const ketKategori = (kategori) => {
    let ket = ''
    if (kategori === 'Kekurangan berat badan') {
        ket = 'Anda berada dalam kategori kekurangan berat badan. Cara terbaik untuk menaikkan berat badan yaitu dengan memperbaiki kembali pola makannya dan olahraga agar lebih sehat!'
    } else if (kategori === 'Normal') {
        ket = 'Anda berada dalam kategori Normal(Ideal). Tetap jaga pola makan yang baik agar tetap sehat ya!'
    } else if (kategori === 'Kelebihan berat badan') {
        ket = 'Anda berada dalam kategori berat badan berlebih. Cara terbaik untuk menurunkan berat badan yaitu dengan mengurangi makanan berkarbohidrat dan kandungan gula yang berlebihan ya serta jangan lupa olahraga, biar lebih sehat!'
    } else if (kategori === 'Kegemukan (Obesitas)') {
        ket = 'Anda berada dalam kategori berat badan obesitasi. Sebaiknya, Jaga pola makan, perhatikan kandungan gula dan karbohidrat dan jangan lupa olahraga ya agar menjadi lebih sehat!'
    }

    return ket
}


const buatElemen = (n, u, has, kat, ket) => {
    let el = `<ul class="list-group">
                    <li class="list-group-item"><strong>Nama : </strong>${n}</li>
                    <li class="list-group-item"><strong>Umur : </strong>${u}</li>
                    <li class="list-group-item"><strong>Hasil : </strong>${has}</li>
                    <li class="list-group-item"><strong>Kategori : </strong>${kat}</li>
                    <li class="list-group-item"><strong>Keterangan : </strong>${ket}</li>
            </ul>`

    return el

}