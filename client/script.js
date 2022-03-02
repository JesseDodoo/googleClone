
function getRandomQuote(e) {
    e.preventDefault()
    

    fetch('http://localhost:3000/search')
      .then(resp => resp.json())
      .then(d=>console.log(d))
  }
  const form = document.querySelector('form')
  form.addEventListener('submit', getRandomQuote)
