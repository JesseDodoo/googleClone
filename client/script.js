
async function getSite(e) {
    e.preventDefault()

    const res = await fetch('http://localhost:3000/search')
      const data = await res.json()
      console.log(data)
  }
  const form = document.querySelector('form')
  form.addEventListener('submit', getSite)


//   let form = document.querySelector('form')
// let quoteID = document.getElementById('quote')
// let authorID = document.getElementById('author')


// async function getQuote(e) {
//   e.preventDefault(e)
//   const res = await fetch("http://localhost:3000/quotes/quote/random");
//   const data = await res.json();

//   const quote = data.quote
//   const author = data.author
//   quoteID.innerHTML = (capitalize(quote))
//   authorID.innerHTML = (authorName(author))
//   console.log(quote)
//   console.log(author)
// }
