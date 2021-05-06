window.onload = () => {
    let quoteCharacter = document.getElementById('quoteCharacter')
    let quoteStorage = JSON.parse(localStorage.getItem('quote'))
    quoteCharacter.innerHTML = `
    <img src="${quoteStorage.image}">
    <div>
        <p>${quoteStorage.character}</p>
        <h2>"${quoteStorage.quote}"</h2>
    </div>`
}