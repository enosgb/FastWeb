import getUniversiades from "./api-requests.js";
import tableHeaderTemplate from "./templates.js";

var table = tableHeaderTemplate;
let elemento = document.getElementById("container");

let universidade = "Centro";


getUniversiades(universidade, elemento).then((result) => {
  let dados = result;
  console.log(dados);
  teste(dados);
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
  elemento.innerHTML = table;
});

/*
getUniversiades(universidade, elemento).then((result) => {
  let container = $("pagination");
  container.pagination({
    dataSource: result,

  })
  let dados = result;
  console.log(dados);
  teste(dados);
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
  elemento.innerHTML = table;
})*/


function teste(table) {
  let tabelaResultados = $("#pagination");
  tabelaResultados.pagination({
    dataSource: table,
    pageSize: 5,
    callback: function (data, pagination) {
      var dataHtml = "<tbody>";

      $.each(data, function (index, item) {
        const template = `
          <tr>
             <td>${item.name}</td>             
             <td>${item.web_pages[0]}</td>
             <td>${item.country}</td>
             <td>${item.alpha_two_code}</td>
          </tr>   
         `;
        dataHtml += template;
        /*
        dataHtml += "<td>" + item.nome + "</td>";
        dataHtml += "<td>" + item.country + "</td>";
        dataHtml += "<td>" + item.alpha_two_code + "</td>";*/
      });

      dataHtml += `</tbody
      `;
      $("#container").html(dataHtml);
    },
  });
}
