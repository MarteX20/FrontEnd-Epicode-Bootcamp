const form = document.getElementById('prod-form')
const api = 'https://striveschool-api.herokuapp.com/api/product/'


form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    console.log('invio dati');
    // ------------------------------------------------------------------------------
    const brand = document.getElementById('brand')
    const nome = document.getElementById('nome')
    const price = document.getElementById('price')
    const immagine = document.getElementById('imgURL')
    const description = document.getElementById('description')
    // ------------------------------------------------------------------------------
    // 
    const nuovoProd = { //creo un oggetto con i nomi proprietà UGUALI al'API fornito (SE NON SONO UGUALI ESCE ERRORE 500)
        brand: brand.value, // brand: scritto uguale come nella api e così anche le proprietà seguenti
        name: nome.value,
        price: price.value,
        imageUrl: immagine.value,
        description: description.value
    };
    console.log('dati recuperati ', nuovoProd); //verifico il funzionamento 

    //creo una variabile contente l'API per semplificarne l'uso

    let endpoint = api;
    let metodo = 'POST';

    if (id) {
        endpoint += id; // aggiungo id al link della fetch()
        metodo = 'PUT'; // se c'è id il metodo qunidi diventa PUT
    }

    fetch(endpoint, {
        method: metodo, // indetifico il metodo POST o PUT
        headers: {
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYxNmI0YTc3NTgzYzAwMTRkMmNjN2YiLCJpYXQiOjE2ODQxMDYwNTgsImV4cCI6MTY4NTMxNTY1OH0.CzZrtnhj9KoKB1juBWY8lBjYx3a2GsI20TbVp4ogQKU",

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuovoProd), //body accetta solo stringhe, perciò bisogna "strighifizzarlo", nel metodo POST ci va SEMPRE 'body: ...'
    })
        .then(response => {
            console.log(response);
            if (response.ok) {
                alert(id ? 'Modifiche Salvate!' : 'Prodotto aggiungo con successo!')
                
                if(confirm('Vuoi tornare alla home? (rifiuta se vuoi aggiungere un altro prodotto)')){ // chiedo se la persona vuole tornare alla home e svuoto il form
                    location.assign('./home.html')
                }else{
                    location.assign('./admin.html')
                }
            } else {
                alert('Errore nel salvataggio')
                throw new Error('Errore nel salvataggio');
            }
        })
})

let adressUrl = new URLSearchParams(location.search)
let id = adressUrl.get('id')


if (id) {
    fetch(api + id, {

        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYxNmI0YTc3NTgzYzAwMTRkMmNjN2YiLCJpYXQiOjE2ODQxMDYwNTgsImV4cCI6MTY4NTMxNTY1OH0.CzZrtnhj9KoKB1juBWY8lBjYx3a2GsI20TbVp4ogQKU",
        },
    })
        .then((res) => {
            console.log(res);
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Errore nel recupero dei prodotti!");
            }
        })
        .then((data) => {
            console.log(data);
            document.getElementById("nome").value = data.name;
            document.getElementById("description").value = data.description;
            document.getElementById("brand").value = data.brand;
            document.getElementById("imgURL").value = data.imageUrl;
            document.getElementById("price").value = data.price;

            document.getElementById('saveBtn').innerText = 'Salva le modifiche'
            document.getElementById('titoloAdmin').innerText = 'Modifica Prodotto'
            document.getElementById('deleteBtn').classList.remove('d-none')

        });

        function canc(e){
            fetch(api + id, {
                method: 'DELETE',
                headers: {
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYxNmI0YTc3NTgzYzAwMTRkMmNjN2YiLCJpYXQiOjE2ODQxMDYwNTgsImV4cCI6MTY4NTMxNTY1OH0.CzZrtnhj9KoKB1juBWY8lBjYx3a2GsI20TbVp4ogQKU",
        
                    'Content-Type': 'application/json'
                },
                
            })
            .then((risp) =>{
                if(risp.ok){
                    alert('Prodotto Eliminato')
                    location.assign('./home.html') // se prodotto è stato rimosso ritorna alla home page
                }else{
                    throw new Error('Errore durante la cancellazione del Prodotto!')
                }

            })
            .catch((err) =>{
                console.log(err);
            })
        }
}
// ------------------------------------------------------------------------------