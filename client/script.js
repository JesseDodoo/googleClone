async function getSites(e) {
    e.preventDefault()

    const res = await fetch('http://localhost:3000/search')
      const data = await res.json()
      console.log(data)
      const result = document.getElementById('results')
      
      for (let i = 0; i < data.length;  i++) {
        const element = data[i];
        console.log(element)

        result.innerHTML += 
        `<ul>
        <li>${element.web}</li>
        </ul> `
        
      }

  }
  let googleSearchBtn = document.querySelector("#s-1");
  googleSearchBtn.addEventListener('click', getSites)


  let luckyBtn = document.querySelector("#s-2");
  luckyBtn.addEventListener('click', getSite)

  async function getSite(e) {
    e.preventDefault()

    const res = await fetch('http://localhost:3000/:id')
      const data = await res.json()
      console.log(data)
      const result = document.getElementById('results')
      
      result.innerHTML += 
        `<ul>
        <li>${data.web}</li>
        </ul> `

  }




