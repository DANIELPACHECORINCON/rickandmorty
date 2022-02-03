// scrip para consumir la api de Rick and Morty

const API = "https://rickandmortyapi.com/api/character";

const getAPI = (api) => {
  return fetch(api) //este fetch consume la api
    .then((response) => response.json()) // este then es para hacer la promesa y decirle que nos va a responder con un json
    .then((json) => {
      fillData(json.results), pagination(json.info); // aca le decimos que del json le envie a la funcion fillData el arreglo resultados
    })
    .catch((error) => {
      console.log("Error en la API: " + error); //este catch nos mustra si sucede un erro en la api
    });
};

const fillData = (data) => {
  // en esta funcion lo que hacemos es pintar las tarjetas en el html
  let html = "";
  data.forEach((ch) => {
    html += '<div class="col">';
    html += '<div class="card h-100">';
    html += `<img src="${ch.image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${ch.name}</h5>`;
    html += `<h6 class="card-text">${ch.species}</h6>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });

  document.getElementById("characters").innerHTML = html;
};

const pagination = (info) => {
  let html = "";

  html += `<li class="page-item ${
    info.prev == null ? "disabled" : ""
  } "><a class="page-link textItem" onclick="getAPI('${info.prev}')">Prev</a></li>`;

  html += `<li class="page-item ${
    info.next == null ? "disabled" : ""
  } "><a class="page-link textItem" onclick="getAPI('${info.next}')">next</a></li>`;

  document.getElementById("pagination").innerHTML = html;
};

getAPI(API);
