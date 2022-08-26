import getUniversiades from "./api-requests.js";
import tableHeaderTemplate from "./templates.js";

var table = tableHeaderTemplate;
let elemento = document.getElementById("tabelaResultados");

let universidade = "Centro";


getUniversiades("Centro",elemento).then((result) => {
  result.forEach((value, i) => {
    const template = `
          <tr>
             <td>${value.name}</td>
             <td>${value.web_pages[0]}</td>
             <td>${value.country}</td>
             <td>${value.alpha_two_code}</td>
          </tr>   
         `;
         table += template;
  });
  elemento.innerHTML = table
});
