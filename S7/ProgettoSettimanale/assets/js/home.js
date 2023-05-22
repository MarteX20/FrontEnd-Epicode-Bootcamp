const api = 'https://striveschool-api.herokuapp.com/api/product/'

window.onload = function () {
    getCard()
}

const getCard = function () {
    fetch(api, {
        
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYxNmI0YTc3NTgzYzAwMTRkMmNjN2YiLCJpYXQiOjE2ODQxMDYwNTgsImV4cCI6MTY4NTMxNTY1OH0.CzZrtnhj9KoKB1juBWY8lBjYx3a2GsI20TbVp4ogQKU"
        },
    })
        .then((risp) => {
            console.log(risp);
            if (risp.ok) {
                return risp.json()
            } else {
                throw new Error('Errore generico')
            }
        })

        .then((dati) => {
            console.log('Risposta ', dati);

            dati.forEach((event) => {
                let cardTemplate = `
                <div class="col-12 col-md-3">
                    <div class="card mb-4">
                        <img src="${event.imageUrl}" class="card-img-top" alt="immagineProdotto">
                        <div class="card-body">
                            <h5 class="card-title">${event.brand}</h5>
                            <p class="card-text">${event.name}</p>
                            <p class="card-text">${event.description}</p>
                            <p class="card-text">Prezzo: ${event.price} €</p>
                            <a href="./admin.html?id=${event._id}" class="btn btn-primary">Modifica</a>
                        </div>
                    </div>
                </div>
                `
                let rowRef = document.getElementById('cardsContainer') //div con la classe 'row' dove andranno inseriti i prodotti
                rowRef.innerHTML += cardTemplate
            })
        })
        .catch((errore) => {
            console.log(errore);
        })
}