import readXlsxFile from 'read-excel-file';

const input = document.getElementById('input');
const result = document.getElementById('result');

input.addEventListener('change', () => {
    const file = input.files[0];

    readXlsxFile(file).then((rows) => {
        const htmlrows = rows.map(row => `<tr>${row.map(col => `<td>${col}</td>`).join('')}</tr>`).join('');
        const htmltable = `<table class="table table-bordered table-striped">${htmlrows}</table>`;
        result.value = htmltable;
    });
});
