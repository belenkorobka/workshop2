window.onload = () => {
    let quoteContainer = document.getElementById('quoteContainer')
    let buttonsQuote = []

    async function getQuotes() {
        let response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=8')
        let quotes = await response.json()
        renderQuotes(quotes)
        console.log(quotes);
    }

    getQuotes()

    function renderQuotes(data) {
        let newQuote
        let now = moment().format("MMM Do YY")

        for (let i = 0; i < data.length; i++) {
            newQuote = document.createElement('li')
            newQuote.innerHTML = `
                <p>${now}</p>
                <h2>${data[i].quote}</h2>
                <button id="quote${[i]}">Quien lo dijo?</button>`
            quoteContainer.appendChild(newQuote)

            buttonsQuote[i] = document.getElementById(`quote${[i]}`)
            buttonsQuote[i].addEventListener('click', ()  => {
                viewQuote(data, i)
            })
        }

    }

    function viewQuote(data, index) {
        localStorage.setItem('quote', JSON.stringify(data[index]))
        window.location.href = 'http://127.0.0.1:5500/Sprint%202/clase%2032%20-%20Librerias%20y%20workshop/ejercicio/quote.html'
    }

}