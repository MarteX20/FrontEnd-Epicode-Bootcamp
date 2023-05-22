const riempi = document.querySelector('.row')

window.onload = () => {
    fetch('https://striveschool-api.herokuapp.com/books')
        .then((res) => {
            console.log(res);
            return res.json()
        })

        .then((data) => {
            console.log(data);
            function cardFill() {
                for (let i = 0; i < data.length; i++) {

                    riempi.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div class="card h-100">
                    <img src="${data[i].img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data[i].title}</h5>
                        <p class="card-text">Prezzo: ${data[i].price}</p>
                        <button class="btn btn-primary cancella">Cancella</button>
                        <button class="btn btn-primary aggiungi">Aggiungi al carello</button>
                    </div>
                </div>
            </div>`
                    // eventListener per eliminare la card interessata
                    riempi.addEventListener('click', (event) => {
                        if (event.target.classList.contains('cancella')) {
                            const rim = event.target.closest('.col-12');
                            rim.remove();
                        }
                    });
                }
            }
            cardFill()
        })

        .catch(err => console.log('Ops!'))
}