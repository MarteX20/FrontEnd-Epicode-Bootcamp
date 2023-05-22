const nome = document.getElementById('nome')
const invia = document.getElementById('submit')
const del = document.getElementById('delete')
const datiSalvati = document.getElementById('datiSalvati')
console.log(del);

const salvati = []

if (localStorage.getItem('nome')) {
    datiSalvati.textContent = localStorage.getItem('name');
}

invia.addEventListener('click', (e) =>{
    e.preventDefault() //blocca il caricamento della pagina al click

    const nuovoUtente ={ //ogetto immagazinnare i dati dal input text
        nome: nome.value
    }

    salvati.push(nuovoUtente) //pusha dati inseriti dal input dentro array salvati
    let persString = JSON.stringify(salvati) //trasforma ogetto in stringa e permette di visualizzarlo nel starage
    localStorage.setItem("pers", persString) //fa inserire nel local storage la chiave "pers" e l'oggetto in sottoforma di stringa
    datiSalvati.innerHTML = nuovoUtente.nome
    nome.value = "" // svuota il campo di testo dopo il click

    salvalista()
})

del.addEventListener('click', (q) =>{
    q.preventDefault()
    
    localStorage.removeItem("pers")
    datiSalvati.innerHTML = ""
})

salvalista = function(){
    let ul = document.querySelector('ul')
    for (let i = 0; i < salvati.length; i++){
        let li = document.createElement('li')
        li.innerText = nome[i]
        ul.appendChild(ul)
    }
}