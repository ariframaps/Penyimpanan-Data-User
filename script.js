// mengambil data pada local web storage
// membuat fungsi submit pada form
// fungsi submit menyimpan data di lokal
// jika data lokal lebih dari 5 maka data terlama dihapus
// selesai menyimpan maka render data di user list

const usersKey = 'USER_DATA';
const form = document.getElementById('form');
const destroyButton = document.getElementById('destroy');
renderData();

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const namaUser = document.getElementById('inputNama').value;
    const umurUser = document.getElementById('inputUmur').value;
    const domisiliUser = document.getElementById('inputDomisili').value;
    const userDataBaru = {
        nama: namaUser,
        umurUser: umurUser,
        domisili: domisiliUser
    }

    submitData(userDataBaru);
    renderData();
});

function submitData(userDataBaru) {
    if (storageAvailabe()) {
        let userData = []
        if (localStorage.getItem(usersKey) !== null) {
            userData = JSON.parse(localStorage.getItem(usersKey))
        }

        userData.unshift(userDataBaru);
        if (userData.length > 5) {
            userData.pop();
        }

        localStorage.setItem(usersKey, JSON.stringify(userData));
    }
    console.log(localStorage.getItem(usersKey));
}

function renderData() {
    const table = document.getElementById('table');
    table.innerHTML = '';

    const trHeader = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.innerText = 'Nama';
    const th2 = document.createElement('th');
    th2.innerText = 'Umur';
    const th3 = document.createElement('th');
    th3.innerText = 'Domisili';

    trHeader.append(th1, th2, th3);
    table.append(trHeader);

    if (localStorage.getItem(usersKey) === null) {
        return [];
    }

    const userLocalData = JSON.parse(localStorage.getItem(usersKey));
    for (const item of userLocalData) {
        const tr = document.createElement('tr');
        for (const key in item) {
            const td = document.createElement('td');
            td.append(item[key]);
            tr.append(td);
        }
        table.append(tr);
    }

}

function storageAvailabe() {
    return typeof (Storage) !== 'undefined';
}

destroyButton.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem(usersKey);
    renderData();
})