let table = document.getElementById('tabelaResultados');

function createTableHeader(table){
    const template = `
        <thead>
            <tr>
                <th>Nome</th>
                <th>Site</th>
                <th>País</th>
                <th>UF</th>
            </tr>
        </thead>
    `
    table.innerHTML = template
}   

createTableHeader(table)