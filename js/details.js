const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
    console.log(id);
} else {
    document.location.href = "index.html"
}
const baseUrl = "https://rickandmortyapi.com/api/character/";
const detailslUrl = `${baseUrl}${id}`;

fetch(detailslUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        details(json);
    })
    .catch(function () {
        document.location.href = "error.html";
    });


function details(json) {
    document.title = `${json.name}`
    console.dir(json);
    const detailContainer = document.querySelector(".detail-container");

    let html = ""

    html += ` <img class="details-image" src="${json.image}" alt="${json.name}" />
        <div class="detail-details">
            <h1>${json.name}</h1>
            <p>Status: <span class="value" id="status">${json.status}</span></p>
            <p>Species: <span class="value" id="species">${json.species}</span></p>
            <p>Origin: <span class="value" id="origin">${json.origin.name}</span></p>
            <p>Location: <span class="value" id="location">${json.location.name}</span></p>                   
        </div>`;

    detailContainer.innerHTML = html;

}