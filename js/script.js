const baseUrl = "https://rickandmortyapi.com/api/character/";

fetch(baseUrl)
    .then(function (response) {
        return response.json();
    })

    .then(function (json) {
        baseUrlLoop(json);
    })

    .catch(function (error) {
        document.location.href = "error.html";
    });

function baseUrlLoop(json) {
    const results = json.results;

    const resultsContainer = document.querySelector(".results");

    let html = ""


    results.forEach(function (result) {

        let typeOf = "Unknown";
        if (result.type) {
            typeOf = result.type;
        }

        html += `<div class="col-sm-6 col-md-4 col-lg-3">                
        <div class="card">
            <img class="image" src="${result.image}" alt="${result.name}">
            <div class="details">
                <h4 class="name">${result.name}</h4>
                <p>Type: ${typeOf}</p>    
                <p>Episode count: ${result.episode.length}</p>                                       
                <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
            </div>
        </div>
    </div>`
    })

    resultsContainer.innerHTML = html;
}
