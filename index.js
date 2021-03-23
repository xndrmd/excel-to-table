import readXlsxFile from 'read-excel-file';

const input = document.getElementById('input');
const result = document.getElementById('result');

input.addEventListener('change', () => {
    const file = input.files[0];

    readXlsxFile(file).then((rows) => {
        const htmlrows = rows.map(row => `<tr>${row.map(col => `<td>${col}</td>`).join('')}</tr>`).join('');
        const htmlcolgroups = `<colgroup><col style="width: 230px;" span="1"></colgroup>`
        const htmltable = `<table class="table table-bordered table-striped" style="width: 100%;">${htmlcolgroups}${htmlrows}</table>`;
        result.value = htmltable;
    });
});
