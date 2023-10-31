// mengambil data pada local web storage
// membuat fungsi submit pada form
// fungsi submit menyimpan data di lokal
// jika data lokal lebih dari 5 maka data terlama dihapus
// selesai menyimpan maka render data di user list

renderData();
const form = document.getElementById('form');
console.log(form);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const namaUser = document.getElementById('inputNama').value;
    const umurUser = document.getElementById('inputUmur').value;
    const domisiliUser = document.getElementById('inputDomisili').value;
    submitData(namaUser, umurUser, domisiliUser);

    renderData();
});

function submitData(namaUser, umurUser, domisiliUser) {

}

function renderData() {

}